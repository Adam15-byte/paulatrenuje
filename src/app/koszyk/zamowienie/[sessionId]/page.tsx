import AboutEbook from '@/components/sections/ebooks/AboutEbook';
import CenteredBuyButton from '@/components/sections/ebooks/CenteredBuyButton';
import Contents from '@/components/sections/ebooks/Contents';
import Mobile from '@/components/sections/ebooks/Mobile';
import SimilarProducts from '@/components/sections/ebooks/SimilarProducts';
import StoriesForWhom from '@/components/sections/ebooks/StoriesForWhom';
import { ebooksConfig } from '@/configs/ebooksConfig';

export default function FinishedPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const { sessionId } = params;

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      Zakończono. Id sesji: {sessionId}
    </div>
  );
}
