import BigEbookTile from '@/components/BigEbookTile';
import { EbookConfigType, ebooksConfig } from '@/configs/ebooksConfig';
import { FC } from 'react';

interface SimilarProductsProps {
  ebookData: EbookConfigType;
}

const SimilarProducts: FC<SimilarProductsProps> = ({ ebookData }) => {
  const TwoEbooks = ebooksConfig
    .filter((item) => item.id !== ebookData.id)
    // random sort;
    .sort(() => Math.random() - 0.5)
    .filter((_, index) => index < 2);
  return (
    <section className="flex mt-16 md:mt-28 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between">
      <div className="px-5 flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Podobne produkty
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        {TwoEbooks.map((ebook) => (
          <BigEbookTile
            key={ebook.title}
            ebook={ebook}
            ebooksList={TwoEbooks}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
