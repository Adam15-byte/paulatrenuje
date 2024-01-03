'use client';

import ListItem from '@/components/ListItem';
import PrimaryButton from '@/components/PrimaryButton';
import SmallInfoCard from '@/components/SmallInfoCard';
import { EbookConfigType, paymentMethodsIcons } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import useWindowDimensions from '@/hooks/useWindowDimension';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface AboutEbookProps {
  ebookData: EbookConfigType;
}

const AboutEbook: FC<AboutEbookProps> = ({ ebookData }) => {
  const {
    title,
    pointsDescription,
    pagesLookup,
    price,
    discountPrice,
    commonFeatures,
  } = ebookData;
  const { addItem, isItemIncludedInBag } = useShoppingBag();
  const { width: screenWidth } = useWindowDimensions();
  const isScreenSmall = screenWidth < 700;
  const rotationBasedScreen = isScreenSmall
    ? 'rotate3d(1, -2, -1, 4deg) perspective(100px)'
    : 'rotate3d(1, -3, -1, 8deg) perspective(500px)';
  const scaleBasedOnScreen = isScreenSmall ? 'scale(1.2)' : 'scale(1.4)';

  const [array, setArray] = useState<(string | undefined)[] | undefined>(
    ebookData?.pagesLookup
  );
  const [isHoveringImages, setIsHoveringImages] = useState(false);
  const [imagesTransform, setImagesTransform] = useState<string>(
    `perspective(500px) rotate3d(0, 0, 0, 0deg) ${scaleBasedOnScreen}`
  );
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoad(false);
      setImagesTransform(`perspective(500px) ${rotationBasedScreen}`);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [rotationBasedScreen]);

  const handleMouseEnter = () => {
    if (!isInitialLoad) {
      setIsHoveringImages(true);
      setImagesTransform(
        `perspective(500px) rotate3d(0, 0, 0, 0deg) ${scaleBasedOnScreen}`
      );
    }
  };
  const handleMouseLeave = () => {
    if (!isInitialLoad) {
      setIsHoveringImages(false);
      setImagesTransform(`perspective(500px) ${rotationBasedScreen}`);
    }
  };
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isHoveringImages && !isInitialLoad) {
      intervalId = setInterval(() => {
        if (array && array.length > 0) {
          const newArray = [...array];
          const firstElement = newArray.shift();
          newArray.push(firstElement);
          setArray(newArray);
        }
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [array, isHoveringImages, isInitialLoad]);
  const router = useRouter();

  if (array) {
    return (
      <section className="flex flex-col px-5 md:flex-row">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full relative min-h-[600px] md:min-h-[800px] transition-all"
          >
            <AnimatePresence>
              {array
                .filter((_, index) => {
                  return isInitialLoad ? index < 1 : index < 3;
                })
                .map((item, index) => {
                  const initialPagePosition = isScreenSmall
                    ? index * 40 + 10
                    : index * 60 + 60;
                  const isFirstCentered =
                    (index === 0 && isHoveringImages) ||
                    (index === 0 && isInitialLoad);
                  const leftOffset = isScreenSmall ? '30px' : '200px';
                  return (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                        },
                      }}
                      style={{
                        zIndex: `${40 - index * 10}`,
                      }}
                    >
                      <Image
                        className="custom-ebook-image"
                        src={item ?? pagesLookup[index]}
                        width={isScreenSmall ? 310 : 400}
                        height={isScreenSmall ? 310 : 400}
                        alt={`${title} image ${index}`}
                        style={{
                          zIndex: `${40 - index * 10}`,
                          bottom: isFirstCentered
                            ? '80px'
                            : `${initialPagePosition}px`,
                          left: isFirstCentered
                            ? leftOffset
                            : `${initialPagePosition}px`,
                          transform: isFirstCentered
                            ? `${imagesTransform}`
                            : `perspective(500px) ${rotationBasedScreen} scale(1)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col md:max-w-[500px] w-full h-full">
          <h1 className="text-4xl md:text-6xl font-bold my-4 tracking-wider uppercase">
            {title}
          </h1>
          <div className="flex flex-col gap-2 md:gap-4">
            {pointsDescription.map((item, index) => (
              <ListItem key={index} text={item} index={index} />
            ))}
          </div>
          <p className="my-4">
            Cena:{' '}
            <span className="text-3xl font-bold">
              {discountPrice ? `${discountPrice} zł` : `${price} zł`}
            </span>{' '}
            <span className="text-red line-through text-xl font-semibold">
              {discountPrice ? `${price} zł` : null}
            </span>
          </p>
          <PrimaryButton
            leftIcon={<ShoppingBag size={24} strokeWidth={2.5} />}
            additionalStyle="w-full mx-auto mb-2 text-lg font-semibold"
            text={
              isItemIncludedInBag(ebookData.id)
                ? 'Produkt znajduje się w koszyku'
                : 'Dodaj do koszyka'
            }
            onClick={() => {
              addItem(ebookData);
              router.push('/koszyk', { scroll: true });
            }}
            disabled={isItemIncludedInBag(ebookData.id)}
          />
          
          {/* Payment methods */}
          <div className="flex gap-2 justify-center mb-4">
            {paymentMethodsIcons.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center rounded-md py-1 px-6 border border-gray border-opacity-20"
              >
                <Image src={item} width={30} height={30} alt={`${item}`} />
              </div>
            ))}
          </div>

          {/* Common features icons */}
          <div className="grid grid-cols-2 gap-4">
            {commonFeatures.map((item, index) => (
              <SmallInfoCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default AboutEbook;
