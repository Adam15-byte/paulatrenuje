'use client';

import { useShoppingBag } from '@/context/ShoppingBagContext';
import { Divider } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DefaultButton from '@/components/reusable-components/DefaultButton';

const ProductsList = () => {
  const { shoppingBag, removeItem, discountBasedOnNumberOfProducts } =
    useShoppingBag();
  return (
    <div className="w-full h-full">
      {shoppingBag?.length ? (
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {shoppingBag.map((item, index) => {
              const { discountPrice, price } = item;
              const finalPriceToDisplay = discountPrice
                ? discountPrice -
                  discountPrice * discountBasedOnNumberOfProducts
                : price - price * discountBasedOnNumberOfProducts;
              const isFinalPriceDifferentThanPrice =
                finalPriceToDisplay !== price;
              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex gap-4 w-full px-2 md:px-4">
                    <div className="h-full my-auto flex">
                      <div
                        onClick={() => removeItem(item)}
                        className="p-2 cursor-pointer rounded-full hover:bg-orange hover:text-white transition-all"
                      >
                        <Trash2 size={22} strokeWidth={2.5} />
                      </div>
                    </div>
                    <Image
                      width={70}
                      height={70}
                      src={item.picture}
                      alt={`${item.title} image`}
                    />
                    <div className="flex flex-col justify-center gap-2 w-full">
                      <p className="font-semibold">Ebook - {item.title}</p>
                      {discountBasedOnNumberOfProducts ? (
                        <p className="text-gray text-xs">
                          {shoppingBag.length} produkty w koszyku. -
                          {discountBasedOnNumberOfProducts * 100}% na wszystkie
                          produkty.{' '}
                        </p>
                      ) : null}
                      <p className="text-gray">
                        {finalPriceToDisplay.toFixed(1)} zł{' '}
                        {!!isFinalPriceDifferentThanPrice && (
                          <span className="line-through text-gray text-xs">
                            {price} zł
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  {shoppingBag.length > 1 && index < shoppingBag.length - 1 ? (
                    <Divider className="mt-4" />
                  ) : null}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <p>Brak produktów w koszyku</p>
          <DefaultButton href="/">Wróc do przeglądania</DefaultButton>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
