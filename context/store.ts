import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type StoreContextType = {
  wishlist: null | never[] | undefined
  updateWishlist: () => Promise<void>;
}

const StoreContext = createContext({} as StoreContextType);

export const useStore = () => useContext(StoreContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: ProviderProps) => {
  const [wishlist, setWishlist] = useState(null);

  const updateWishlist = async (updatedWishlist) => {
    try {
      setWishlist(updatedWishlist);

      await AsyncStorage.setItem('@wishlist', JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchWishlist () {
      try {
        const storedWishlist = await AsyncStorage.getItem('@wishlist');
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <StoreContext.Provider
      value={{ wishlist, updateWishlist }}
    >
      {children}
    </StoreContext.Provider>
  )
}
