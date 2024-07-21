import { useShoppingBag } from '@/context/ShoppingBagContext';
import React from 'react';
import Image from 'next/image';

const CheckoutSummary = () => {
  const {
    shoppingBag,
    bagWorthValue,
    discountBasedOnNumberOfProducts,
    discountedValue,
    valueAfterDiscount,
  } = useShoppingBag();

  return (
    <div className="group border border-lightgray bg-white rounded-md flex flex-col p-4 gap-4 relative overflow-hidden shadow-lg w-full h-full">
      <h3 className="text-2xl font-semibold tracking-wider">Podsumowanie</h3>
      <div className="flex flex-col gap-4">
        {/* product images */}
        <div className="flex gap-4">
          {shoppingBag.map((item, index) => {
            return (
              <Image
                key={`${item.title}-${index}`}
                width={90}
                height={90}
                src={item.picture}
                alt={`${item.title} image`}
              />
            );
          })}
        </div>
        <p> Suma przed rabatami: {bagWorthValue} zł</p>
        {discountBasedOnNumberOfProducts ? (
          <p className="font-semibold text-orange">
            {shoppingBag.length} produkty w koszyku: -
            {discountBasedOnNumberOfProducts * 100}% na wszystkie produkty.{' '}
          </p>
        ) : null}
        <p className="font-semibold text-orange">
          {' '}
          Rabat: {discountedValue.toFixed(1)} zł
        </p>
        <p className="font-bold"> Płatność: {valueAfterDiscount} zł</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
