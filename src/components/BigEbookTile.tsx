'use client';

import { EbookConfigType } from '@/configs/ebooksConfig';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface BigEbookTileProps {
  ebook: EbookConfigType;
}

const BigEbookTile: FC<BigEbookTileProps> = ({ ebook }) => {
  const { titleFirstPart, titleSecondPart, title, picture, tags } = ebook;
  return (
    <div
      className={cn(
        title === 'Slim legs' ? 'col-span-1 md:col-span-2' : 'col-span-1',
        'min-h-[300px] group transition-all w-full relative p-5 cursor-pointer'
      )}
    >
      <div className="flex flex-col justify-between gap-2 relative px-4 md:px-0">
        <div className="text-3xl font-bold z-20 tracking-wider">
          <span className="text-gray">{titleFirstPart}</span>
          <span className="text-orange">{titleSecondPart}</span>
        </div>
        <div className="text-lg font-thin z-20 tracking-widest text-gray uppercase">
          {tags.filter((item, index) => index < 2).join(' / ')}
        </div>
        <div className="text-md group/seeall text-black flex font-bold z-20 tracking-wide uppercase">
          Zobacz produkt
          <ChevronRight
            size={22}
            strokeWidth={3}
            className="group-hover/seeall:translate-x-2 transition-all"
          />
        </div>
      </div>
      <div className="z-10 absolute top-2 right-0">
        <Image
          className="group-hover:rotate-6 transition-all"
          src={picture}
          width={200}
          height={200}
          alt={`${title} image`}
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
        className="absolute top-0 bottom-0 right-0 w-[70%] group-hover:w-[90%] md:w-full md:group-hover:w-[70%] transition-all bg-pink z-0"
      />
    </div>
  );
};

export default BigEbookTile;
