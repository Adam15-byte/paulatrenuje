import { ebooksConfig } from '@/configs/ebooksConfig';
import { HOME_PAGE_IDS } from '@/configs/sectionIDs';
import { ChevronRight } from 'lucide-react';
import BigEbookTile from '../BigEbookTile';

const Ebooks = () => {
  return (
    <section
      id={HOME_PAGE_IDS.ebooki}
      className="flex mt-16 lg:mt-0 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between"
    >
      <div className="px-5 flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Ebooki
          </h2>
          <div className="uppercase flex items-center cursor-pointer group">
            Zobacz wszystkie
            <ChevronRight
              size={20}
              strokeWidth={2}
              className="group-hover:translate-x-2 transition-all"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-fit gap-10 px-5">
        {ebooksConfig.map((ebook) => (
          <BigEbookTile
            key={ebook.title}
            ebook={ebook}
            ebooksList={ebooksConfig}
          />
        ))}
      </div>
    </section>
  );
};

export default Ebooks;
