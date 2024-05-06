'use client';

import { EbookConfigType } from '@/configs/ebooksConfig';
import React, { FC } from 'react';
import Image from 'next/image';
import { useDisclosure } from '@nextui-org/react';
import StoriesModal from '@/components/StoriesModal';
import { opinionsStories } from '@/configs/ebooksConfig';
interface StoriesForWhomProps {
  ebookData: EbookConfigType;
}

const StoriesForWhom: FC<StoriesForWhomProps> = ({ ebookData }) => {
  const { title, stories, dedicatedStoryTitle, forWhom, id } = ebookData;
  const {
    isOpen: isOpinionsOpen,
    onOpen: onOpinionsOpen,
    onOpenChange: onOpinionsOpenChange,
  } = useDisclosure();

  const {
    isOpen: isPersonalizedOpen,
    onOpen: onPersonalizedOpen,
    onOpenChange: onPersonalizedOpenChange,
  } = useDisclosure();
  return (
    <section className="flex flex-col md:flex-row z-20 md:mt-20 md:min-h-0 w-full gap-16 md:gap-4 lg:gap-12 lg:justify-between px-5">
      <StoriesModal
        title={`${title} highlights`}
        stories={stories}
        isOpen={isPersonalizedOpen}
        onOpenChange={onPersonalizedOpenChange}
      />
      <StoriesModal
        title="opinie workbook"
        stories={opinionsStories}
        isOpen={isOpinionsOpen}
        onOpenChange={onOpinionsOpenChange}
      />
      <div className="w-full flex flex-col">
        <div className="flex gap-2">
          <div className="w-1 bg-orange h-[100]" />
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
              Dla kogo?
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mt-2 leading-7">{forWhom}</p>
          {title === 'Slim legs' ? (
            <Image
              src={'/metamorfoza.png'}
              height={500}
              width={500}
              alt="moja metamorfoza"
              className="block md:hidden"
            />
          ) : null}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex gap-2">
          <div className="w-1 bg-orange h-[100]" />
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
              Insta stories
            </h2>
          </div>
        </div>
        <div className="w-full flex gap-8 mt-2 justify-center">
          <div className="flex flex-col gap-2">
            <div className="story-icon" onClick={onPersonalizedOpen}>
              <Image
                width={150}
                height={150}
                src={ebookData.pagesLookup[0]}
                alt={`${title} insta stories`}
                className="rounded-full object-cover h-full w-full"
              />
            </div>
            <p className="uppercase text-lg tracking-wider">
              {dedicatedStoryTitle}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="story-icon" onClick={onOpinionsOpen}>
              <Image
                width={150}
                height={150}
                src={'/stories_content/opinion_story_1.jpg'}
                alt="insta stories with opinions"
                className="rounded-full object-cover h-full w-full"
              />
            </div>
            <p className="uppercase text-lg tracking-wider">OPINIE WORKBOOK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesForWhom;
