'use client';

import { EbookForShoppingBag } from '@/configs/ebooksConfig';
import { IPromoCodeValidator } from '@/lib/validators/promoCodeValidator';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface IShoppingBagContext {
  shoppingBag: EbookForShoppingBag[];
  addItem: (_: EbookForShoppingBag) => void;
  removeItem: (_: EbookForShoppingBag) => void;
  isItemIncludedInBag: (_: string) => boolean;
  bagWorthValue: number;
  discountedValue: number;
  discountBasedOnNumberOfProducts: number;
  valueAfterDiscount: number;
  appliedPromoCode: IPromoCodeValidator | null;
  setAppliedPromoCode: (_: IPromoCodeValidator | null) => void;
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
  const addItem = (item: EbookForShoppingBag) => {
    setShoppingBag((prevState) => [...prevState, item]);
  };
  const [appliedPromoCode, setAppliedPromoCode] =
    useState<IPromoCodeValidator | null>(null);

  const calculateDiscountBasedOnNumberOfProducts = (): number => {
    switch (shoppingBag.length) {
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 0;
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

  const valueDiscountedWithPromoCode = useMemo(() => {
    if (!appliedPromoCode) return bagWorthValue;
    switch (appliedPromoCode.promoType) {
      case '%':
        return bagWorthValue - bagWorthValue * (appliedPromoCode.value / 100);
      case 'PLN':
        return bagWorthValue - appliedPromoCode.value;
      default:
        return bagWorthValue;
    }
  }, [appliedPromoCode, bagWorthValue]);

  const valueAfterDiscount =
    valueDiscountedWithPromoCode -
    valueDiscountedWithPromoCode * discountBasedOnNumberOfProducts;

  const discountedValue = bagWorthValue - valueAfterDiscount;
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
        appliedPromoCode,
        setAppliedPromoCode,
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
