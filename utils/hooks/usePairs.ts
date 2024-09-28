import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

export type PumpfunPairDB = {
  deployer: string;
  mintAddress: string;
  bondingCurveAddress: string;
  logoUrl: string;
  tokenName: string;
  tokenSymbol: string;
  initialLpSolAmount: number;
  initialLpTokenAmount: number;
  initialMcap: number;
  description: string;
  telegram: string;
  twitter: string;
  website: string;
  createdAt: string;
  updatedAt: string;
  bondingCurveFillPercent: number;
  currentLiquidity: number;
  currentMarketcap: number;
  devHoldingsPercent: number;
  holderCount: number;
  totalVolumeUsd: number;
  objectId: string;
};
export const usePairs = () => {
  const [pairs, setPairs] = useState<PumpfunPairDB[]>([]);
  const [almostFilledPairs, setAlmostFilledPairs] = useState<PumpfunPairDB[]>([]);
  const [subscription, setSubscription] = useState<any>(null);
  const [currentLimit, setCurrentLimit] = useState(20); // Start with 20, can increase as needed

  const { Moralis, isInitialized } = useMoralis();

  const fetchPairs = async (limit = 20) => {
    if (!isInitialized) return;

    const query = new Moralis.Query("PumpfunPair");
    query.descending("createdAt");
    query.limit(limit);
    const results = await query.find();
    const resultsJson = results.map((result) => result.toJSON());
    setPairs(resultsJson as PumpfunPairDB[]);

    return results;
  };

  const fetchAlmostFilledPairs = async () => {
    if (!isInitialized) return;

    const query = new Moralis.Query("PumpfunPair");
    query.descending("bondingCurveFillPercent");
    query.lessThanOrEqualTo("bondingCurveFillPercent", 99.9);
    query.limit(10);
    const results = await query.find();
    const resultsJson = results.map((result) => result.toJSON());
    setAlmostFilledPairs(resultsJson as PumpfunPairDB[]);

    return results;
  };

  const fetchMorePairs = async () => {
    const newLimit = currentLimit + 20; // Fetch 20 more items
    setCurrentLimit(newLimit); // Update the limit state
    await fetchPairs(newLimit);
  };

  const startParseSubscription = async () => {
    if (!isInitialized) return;

    const query = new Moralis.Query("PumpfunPair");
    const subscription = await query.subscribe();

    subscription.on("create", (object: any) => {
      console.log("New pair created: ", object);
      const newPair: PumpfunPairDB = object.toJSON();
      setPairs((prevPairs) => [newPair, ...prevPairs]);
    });

    setSubscription(subscription);
  };

  const stopParseSubscription = () => {
    if (subscription) {
      subscription.unsubscribe();
    }
  };

  useEffect(() => {
    if (isInitialized) {
      fetchPairs(currentLimit); // Fetch initial pairs
      startParseSubscription();
    }

    return () => {
      stopParseSubscription();
    };
  }, [isInitialized]);

  // start a timer to fetch almost filled pairs every 15 seconds
  useEffect(() => {
    fetchAlmostFilledPairs();

    const interval = setInterval(() => {
      fetchAlmostFilledPairs();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [isInitialized]);

  return { fetchPairs, fetchMorePairs, pairs, almostFilledPairs };
};
