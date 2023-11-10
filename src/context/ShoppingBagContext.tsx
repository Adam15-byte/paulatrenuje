'use client';

import { EbookForShoppingBag } from '@/configs/ebooksConfig';
import { ReactNode, createContext, useContext, useState } from 'react';

interface IShoppingBagContext {
  shoppingBag: EbookForShoppingBag[];
  addItem: (_: EbookForShoppingBag) => void;
  removeItem: (_: EbookForShoppingBag) => void;
  itemIncludedInBag: (_: EbookForShoppingBag) => boolean;
  bagWorthValue: number;
}

// Create the context
const ShoppingBagContext = createContext<IShoppingBagContext>({
  shoppingBag: [],
  addItem: (_: EbookForShoppingBag) => {},
  removeItem: (_: EbookForShoppingBag) => {},
  itemIncludedInBag: (_: EbookForShoppingBag) => {
    return true;
  },
  bagWorthValue: 0,
});

interface ChildrenProps {
  children: ReactNode;
}
// Context provider component
export const ShoppingBagProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [shoppingBag, setShoppingBag] = useState<EbookForShoppingBag[]>([]);

  const addItem = (item: EbookForShoppingBag) => {
    setShoppingBag((prevState) => [...prevState, item]);
  };

  const removeItem = (item: EbookForShoppingBag) => {
    setShoppingBag((prevState) =>
      prevState.filter((bagItem) => bagItem.id !== item.id)
    );
  };

  const itemIncludedInBag = (item: EbookForShoppingBag) => {
    return !!shoppingBag.find((bagItem) => bagItem.id === item.id);
  };

  const bagWorthValue = shoppingBag
    .map((item) => {
      if (item.discountPrice) {
        return item.discountPrice;
      } else {
        return item.price;
      }
    })
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <ShoppingBagContext.Provider
      value={{
        shoppingBag,
        addItem,
        removeItem,
        itemIncludedInBag,
        bagWorthValue,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
};

// Hook to use the shopping bag context in components
export const useShoppingBag = () => {
  const context = useContext(ShoppingBagContext);
  if (context === undefined) {
    throw new Error('useShoppingBag must be used within a ShoppingBagProvider');
  }
  return context;
};
