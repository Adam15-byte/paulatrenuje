'use client';

import { EbookConfigType } from '@/configs/ebooksConfig';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, useState } from 'react';

interface ContentsProps {
  ebookData: EbookConfigType;
}

const ANIMATION_DURATION = 0.2;

const Contents: FC<ContentsProps> = ({ ebookData }) => {
  const { contents } = ebookData;
  const [page, setPage] = useState<number>(1);
  const maxPage = Math.round(contents.length / 8);
  const handleNextPage = () => {
    if (page < maxPage) {
      setPage((prevState) => prevState + 1);
    } else {
      setPage(1);
    }
  };
  const handlePreviousPage = () => {
    if (page === 1) {
      setPage(maxPage);
    } else {
      setPage((prevState) => prevState - 1);
    }
  };
  const getMinAndMaxPosition = () => {
    return { minimum: page * 8 - 8, maximum: page * 8 - 1 };
  };
  const { minimum, maximum } = getMinAndMaxPosition();
  return (
    <section className="flex flex-col px-2 max-w-4xl self-center gap-8 mt-16 w-full">
      <div className="flex justify-between w-full items-center gap-6 md:gap-10">
        <div
          onClick={handlePreviousPage}
          className="p-3 group border-3 border-orange text-orange hover:text-white hover:bg-orange rounded-full flex items-center justify-center cursor-pointer transition-all"
        >
          <ChevronLeft
            size={32}
            strokeWidth={3}
            className="group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center tracking-wide">
            Spis treści
          </h2>
          <p className="text-lg md:text-xl font-semibold bg-gray px-4 py-2 rounded-md text-white">
            Strona {page}/{maxPage}
          </p>
        </div>
        <div
          onClick={handleNextPage}
          className="p-3 group border-3 border-orange text-orange hover:text-white hover:bg-orange rounded-full items-center justify-center cursor-pointer transition-all"
        >
          <ChevronRight size={32} strokeWidth={3} />
        </div>
      </div>
      <AnimatePresence>
        {contents.map((item, index) => {
          if (index >= minimum && index <= maximum) {
            const delay = index >= 8 ? index - minimum : index;
            return (
              <div key={item.label} className="flex flex-col gap-4 px-4">
                <div className="flex gap-4 items-center">
                  <motion.div
                    initial={{
                      rotateZ: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotateZ: 0,
                      opacity: 1,
                      transition: {
                        duration: ANIMATION_DURATION,
                        delay: delay * ANIMATION_DURATION,
                      },
                    }}
                    className="flex items-center w-12 h-12 text-6xl font-bold justify-center text-white bg-pink rounded-full overflow-hidden shadow-xl"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.p
                    initial={{
                      x: 50,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: ANIMATION_DURATION,
                        delay: delay * ANIMATION_DURATION,
                      },
                    }}
                    className="font-normal md:font-medium text-lg md:text-xl uppercase"
                  >
                    {item.label}
                  </motion.p>
                </div>
                {item.children ? (
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 px-8 md:px-16">
                    {item.children.map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <motion.div
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                            transition: {
                              duration: ANIMATION_DURATION,
                              delay: delay * ANIMATION_DURATION,
                            },
                          }}
                          className="w-6 h-6 bg-pink rounded-full"
                        />
                        <motion.p
                          initial={{
                            x: 50,
                            opacity: 0,
                          }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              duration: ANIMATION_DURATION,
                              delay: delay * ANIMATION_DURATION,
                            },
                          }}
                          className="font-light md:font-normal text-md md:text-lg uppercase"
                        >
                          {item.label}
                        </motion.p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          }
        })}
      </AnimatePresence>
    </section>
  );
};

export default Contents;
