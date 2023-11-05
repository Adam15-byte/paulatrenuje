import AboutEbook from '@/components/sections/ebooks/AboutEbook';
import Contents from '@/components/sections/ebooks/Contents';
import { ebooksConfig } from '@/configs/ebooksConfig';

export default function EbookPage({ params }: { params: { ebookId: string } }) {
  const { ebookId } = params;
  const ebookData = ebooksConfig.find((ebook) => ebook.id === ebookId);
  if (ebookData) {
    return (
      <div className="flex flex-col gap-8">
        <AboutEbook ebookData={ebookData} />
        <Contents ebookData={ebookData} />
      </div>
    );
  } else {
    return <div>Page not found</div>;
  }
}
