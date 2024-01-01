'use client';

import { EbookForShoppingBag } from '@/configs/ebooksConfig';
import { ReactNode, createContext, useContext, useState } from 'react';

interface IShoppingBagContext {
  shoppingBag: EbookForShoppingBag[];
  addItem: (_: EbookForShoppingBag) => void;
  removeItem: (_: EbookForShoppingBag) => void;
  isItemIncludedInBag: (_: string) => boolean;
  bagWorthValue: number;
  discountedValue: number;
  discountBasedOnNumberOfProducts: number;
  valueAfterDiscount: number;
}

// Create the context
const ShoppingBagContext = createContext<IShoppingBagContext | undefined>(
  undefined
);

interface ChildrenProps {
  children: ReactNode;
}
// Context provider component
export const ShoppingBagProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [shoppingBag, setShoppingBag] = useState<EbookForShoppingBag[]>([]);
  console.log('shoppingBag:', shoppingBag);
  const addItem = (item: EbookForShoppingBag) => {
    setShoppingBag((prevState) => [...prevState, item]);
  };

  const calculateDiscountBasedOnNumberOfProducts = (): number => {
    switch (shoppingBag.length) {
      case 1:
        return 0;
      case 2:
        return 0.1;
      case 3:
        return 0.2;
      default:
        return 0;
    }
  };
  const discountBasedOnNumberOfProducts =
    calculateDiscountBasedOnNumberOfProducts();

  const removeItem = (item: EbookForShoppingBag) => {
    setShoppingBag((prevState) =>
      prevState.filter((bagItem) => bagItem.id !== item.id)
    );
  };

  const isItemIncludedInBag = (id: string) => {
    return !!shoppingBag.find((bagItem) => bagItem.id === id);
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
  const discountedValue = discountBasedOnNumberOfProducts * bagWorthValue;

  const valueAfterDiscount =
    bagWorthValue - bagWorthValue * discountBasedOnNumberOfProducts;
  return (
    <ShoppingBagContext.Provider
      value={{
        shoppingBag,
        addItem,
        removeItem,
        isItemIncludedInBag,
        bagWorthValue,
        discountedValue,
        discountBasedOnNumberOfProducts,
        valueAfterDiscount,
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
