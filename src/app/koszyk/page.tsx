import ProductsList from '@/components/sections/shopping-bag/ProductsList';
import PromoAvailable from '@/components/sections/shopping-bag/PromoAvailable';
import ShoppingBagSummary from '@/components/sections/shopping-bag/ShoppingBagSummary';
import SimilarProductsBag from '@/components/sections/shopping-bag/SimilarProductsBag';

const page = () => {
  return (
    <section className="flex mt-16 z-20 lg:mt-28 lg:min-h-0 w-full px-5 flex-col gap-4 lg:gap-12 lg:justify-between">
      <div className="flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Koszyk
          </h2>
        </div>
      </div>
      {/* <PromoAvailable /> */}
      <div>
        <div className="flex flex-col md:flex-row gap-4 w-full h-full">
          <div className="w-full group border border-gray rounded-md flex flex-col p-4 gap-4 relative overflow-hidden h-full shadow-lg">
            <h3 className="text-2xl font-semibold tracking-wider">
              Produkty w koszyku
            </h3>
            <ProductsList />
          </div>
          <div className="group border border-gray rounded-md flex flex-col p-4 gap-4 relative overflow-hidden shadow-lg w-full h-full">
            <h3 className="text-2xl font-semibold tracking-wider">
              Podsumowanie
            </h3>
            <ShoppingBagSummary />
          </div>
        </div>
      </div>
      <SimilarProductsBag />
    </section>
  );
};

export default page;
