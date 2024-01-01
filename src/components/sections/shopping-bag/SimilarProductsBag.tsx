'use client';

import BigEbookTile from '@/components/BigEbookTile';
import { ebooksConfig } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import React from 'react';

const SimilarProductsBag = () => {
  const { shoppingBag } = useShoppingBag();
  const productsInBagIDS = shoppingBag.map((item) => item.id);
  const productsToShow = ebooksConfig.filter(
    (ebook) => !productsInBagIDS.includes(ebook.id)
  );
  if (shoppingBag.length && productsToShow.length) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="w-1 bg-orange h-[100]" />
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
              Podobne produkty
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-fit gap-10">
          {productsToShow.map((item, index) => (
            <BigEbookTile
              key={`${item.id}-${index}`}
              ebook={item}
              ebooksList={productsToShow}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default SimilarProductsBag;
