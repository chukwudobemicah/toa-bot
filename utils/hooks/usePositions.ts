import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { PumpfunPairDB } from "./usePairs";

export type ActivePositionDB = {
  mintAddress: string;
  user: {
    username: string;
    telegramUserId: number;
    createdAt: string;
    updatedAt: string;
    ACL: {
      "*": {
        read: boolean;
      };
      f8ngg27WHP: {
        read: boolean;
        write: boolean;
      };
    };
    sessionToken: string;
    objectId: string;
    __type: string;
    className: string;
  };
  amountIn: number;
  amountOut: number;
  amountOutRaw: number;
  strategy: {
    __type: string;
    className: string;
    objectId: string;
  };
  status: string;
  withdrawnSol: number;
  profitPercentage: number;
  currentTokenWorth: number;
  createdAt: string;
  updatedAt: string;
  objectId: string;
  pumpfunPair: PumpfunPairDB;
};

export const usePositions = () => {
  const [positions, setPositions] = useState<ActivePositionDB[]>([]);
  const [subscription, setSubscription] = useState<any>(null);

  const { Moralis, isInitialized, user } = useMoralis();

  const fetchPositions = async () => {
    if (!isInitialized) return;

    const query = new Moralis.Query("ActivePosition");
    query.descending("createdAt");
    query.equalTo("user", user);

    const results = await query.find();
    const resultsJson = results.map((result) => result.toJSON());

    // For all of the positions, populate the PumpfunPair associated with the position
    for (const position of resultsJson) {
      const pumpfunPairQuery = new Moralis.Query("PumpfunPair");
      pumpfunPairQuery.equalTo("mintAddress", position.mintAddress);
      const pumpfunPair = await pumpfunPairQuery.first({ useMasterKey: true });

      if (pumpfunPair) {
        position.pumpfunPair = pumpfunPair.toJSON();
      }
    }

    setPositions(resultsJson as ActivePositionDB[]);

    return results;
  };

  const startParseSubscription = async () => {
    if (!isInitialized) return;

    const query = new Moralis.Query("ActivePosition");
    const subscription = await query.subscribe();

    subscription.on("create", (object: any) => {
      const newPosition: ActivePositionDB = object.toJSON();

      // Populate the PumpfunPair associated with the position
      const pumpfunPairQuery = new Moralis.Query("PumpfunPair");
      pumpfunPairQuery.equalTo("mintAddress", newPosition.mintAddress);
      pumpfunPairQuery.first({ useMasterKey: true }).then((pumpfunPair) => {
        if (pumpfunPair) {
          // @ts-ignore
          newPosition.pumpfunPair = pumpfunPair.toJSON();
        }
      });

      setPositions((prevPositions) => [newPosition, ...prevPositions]);
    });

    subscription.on("update", (object: any) => {
      // Updated position
      setPositions((prevPositions) => {
        const updatedIndex = prevPositions.findIndex((position) => position.objectId === object.objectId);
        const newPositions = [...prevPositions];
        newPositions[updatedIndex] = object.toJSON();
        return newPositions;
      });
    });

    setSubscription(subscription);
  };

  const stopParseSubscription = () => {
    if (subscription) {
      subscription.unsubscribe();
    }
  };

  useEffect(() => {
    if (isInitialized && user) {
      fetchPositions();
      startParseSubscription();
    }

    return () => {
      stopParseSubscription();
    };
  }, [isInitialized, user]);

  return { fetchPositions, positions };
};
