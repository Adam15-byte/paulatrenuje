import AboutEbook from '@/components/sections/ebooks/AboutEbook';
import CenteredBuyButton from '@/components/sections/ebooks/CenteredBuyButton';
import Contents from '@/components/sections/ebooks/Contents';
import Mobile from '@/components/sections/ebooks/Mobile';
import SimilarProducts from '@/components/sections/ebooks/SimilarProducts';
import Opinions from '@/components/sections/ebooks/StoriesForWhom';
import { ebooksConfig } from '@/configs/ebooksConfig';

export default function EbookPage({ params }: { params: { ebookId: string } }) {
  const { ebookId } = params;
  const ebookData = ebooksConfig.find((ebook) => ebook.id === ebookId);
  if (ebookData) {
    return (
      <div className="flex flex-col gap-8 overflow-hidden">
        <AboutEbook ebookData={ebookData} />
        <Contents ebookData={ebookData} />
        <Mobile ebookData={ebookData} />
        <Opinions ebookData={ebookData} />
        <CenteredBuyButton ebookData={ebookData} />
        <SimilarProducts ebookData={ebookData} />
      </div>
    );
  } else {
    return <div>Page not found</div>;
  }
}
