'use client';

import { ebooksConfig } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';

const PromoAvailable = () => {
  const { shoppingBag } = useShoppingBag();
  if (shoppingBag.length && shoppingBag.length !== ebooksConfig.length) {
    return (
      <div className="w-full group border border-gray bg-pink rounded-md flex flex-col p-4 gap-4 relative overflow-hidden shadow-lg">
        <h3 className="text-lg font-semibold tracking-wider text-orange">
          Promocja dostępna!
        </h3>
        <div className="flex flex-col gap-2">
          {shoppingBag.length < 2 ? (
            <p>
              Dodaj do koszyka jeden produkt. Kupując 2 produkty otrzymasz{' '}
              <span className="font-semibold">10%</span> zniżki na wszystkie
              kupowane produkty.{' '}
            </p>
          ) : null}
          {shoppingBag.length < 3 ? (
            <p>
              {' '}
              Dodaj do koszyka dwa produkty. Kupując 3 produkty otrzymasz{' '}
              <span className="font-semibold">20%</span> zniżki na wszystkie
              kupowane produkty.{' '}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
};

export default PromoAvailable;
