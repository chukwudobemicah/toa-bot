import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

export type TradingStrategyDB = {
  buyMinMaxDevWallet: [number, number];
  buyMinMaxHolderCount: [number, number];
  buyMinMaxMarketCap: [number, number];
  buyMinMaxBondingCurve: [number, number];
  buyMinMaxKoth: [number, number];
  buyAmountSol: number;
  buyDevNoPreviousLaunch: boolean | undefined;
  buyHasTwitter: boolean | undefined;
  buyHasTelegram: boolean | undefined;
  buyHasWebsite: boolean | undefined;
  buyHasImage: boolean | undefined;
  user: {
    username: string;
    telegramUserId: number;
    createdAt: string;
    updatedAt: string;
    signerPrivateKey: string;
    ACL: {
      "*": {
        read: boolean;
      };
      [key: string]: {
        read: boolean;
        write?: boolean;
      };
    };
    objectId: string;
    __type: string;
    className: string;
  };
  sellTakeProfitPercent: number;
  sellStopLossPercent: number;
  sellMarketCapThreshold: number;
  sellBondingCurveThreshold: number;
  sellWhenDevSells: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  objectId: string;
  strategyName: string;
};

export const useStrategies = () => {
  const { Moralis, isInitialized, user } = useMoralis();
  const queryClient = useQueryClient();

  // Function to manually fetch strategies
  const fetchStrategies = async () => {
    if (!isInitialized || !user) return [];

    const query = new Moralis.Query("TradingStrategy");
    query.equalTo("user", user);

    const results = await query.find();
    return results.map((result) => result.toJSON()) as TradingStrategyDB[];
  };

  // React-query to fetch strategies automatically
  const {
    data: strategies,
    isLoading,
    isError,
    refetch,
  } = useQuery(["strategies", user?.id], fetchStrategies, {
    enabled: isInitialized && !!user, // Only run query when Moralis is initialized and user exists
  });

  // Mutation to toggle strategy
  const toggleStrategyMutation = useMutation(
    async (strategyId: string) => {
      await Moralis.Cloud.run("toggleStrategyActive", { strategyId });
    },
    {
      onSuccess: () => {
        toast.success("Strategy toggled successfully");
        queryClient.invalidateQueries("strategies"); // Refetch after toggle
      },
      onError: (error) => {
        console.error(error);
        toast.error("Error toggling strategy");
      },
    }
  );

  // Mutation to delete strategy
  const deleteStrategyMutation = useMutation(
    async (strategyId: string) => {
      await Moralis.Cloud.run("deleteStrategy", { strategyId });
    },
    {
      onSuccess: () => {
        toast.success("Strategy deleted successfully");
        queryClient.invalidateQueries("strategies"); // Refetch after deletion
      },
      onError: (error) => {
        console.error(error);
        toast.error("Error deleting strategy");
      },
    }
  );

  // Mutation to update strategy
  const updateStrategyMutation = useMutation(
    async (updatedStrategy: TradingStrategyDB) => {
      const { objectId, ...rest } = updatedStrategy;
      await Moralis.Cloud.run("updateStrategy", {
        strategyId: objectId,
        ...rest,
      });
    },
    {
      onSuccess: () => {
        toast.success("Strategy updated successfully");
        queryClient.invalidateQueries("strategies"); // Refetch strategies after update
      },
      onError: (error) => {
        console.error("Failed to update strategy:", error);
        toast.error("Failed to update strategy");
      },
    }
  );

  return {
    strategies,
    isLoading,
    isError,
    fetchStrategies, // Expose fetchStrategies for manual refetching
    refetchStrategies: refetch, // React-query's refetch method
    toggleStrategy: (strategyId: string) => toggleStrategyMutation.mutate(strategyId),
    deleteStrategy: (strategyId: string) => deleteStrategyMutation.mutate(strategyId),
    updateStrategy: (updatedStrategy: TradingStrategyDB) => updateStrategyMutation.mutate(updatedStrategy),
  };
};
