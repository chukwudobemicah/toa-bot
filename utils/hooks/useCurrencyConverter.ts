import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

export const useCurrencyConverter = () => {
  const [solUnitPrice, setSolUnitPrice] = useState<number>(0);

  const { Moralis, isInitialized } = useMoralis();

  async function fetchGlobalSetting(value: string, key: string) {
    try {
      const query = new Moralis.Query("Global");
      query.equalTo("key", key);
      const result = await query.first();
      return result?.get(value);
    } catch (error) {
      console.error(`Error fetching global setting for ${key}:`, error);
      // Find the value from local storage
      switch (key) {
        case "sol-unit-price":
          return localStorage.getItem("sol-unit-price");

        default:
          return null;
      }
    }
  }

  async function updateAllPrices() {
    const now = new Date().getTime();
    const valueExpirationDate = 120_000;

    // Update each price independently if it's expired
    await Promise.all([updatePrice("sol-unit-price", setSolUnitPrice, now, valueExpirationDate)]);
  }

  async function updatePrice(key: string, setter: (value: number) => void, now: number, expiration: number) {
    const updatedAt = localStorage.getItem(`${key}-updated-at`);

    if (updatedAt && now - Number(updatedAt) < expiration) {
      const price = localStorage.getItem(key);
      if (price) {
        setter(Number(price));
        return;
      }
    }

    const price = await fetchGlobalSetting("value", key);
    if (price) {
      setter(Number(price));
      localStorage.setItem(key, price.toString());
      localStorage.setItem(`${key}-updated-at`, now.toString());
    }
  }

  useEffect(() => {
    if (isInitialized) {
      updateAllPrices();

      const clock = setInterval(() => {
        updateAllPrices();
      }, 120_000);

      return () => {
        clearInterval(clock);
      };
    }
  }, [isInitialized]);

  return {
    solUnitPrice,
  };
};
