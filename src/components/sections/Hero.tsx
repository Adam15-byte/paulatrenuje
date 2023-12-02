'use client';

import { HOME_PAGE_IDS } from '@/configs/sectionIDs';
import { scrollToSection } from '@/utils/browseUtils';
import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Salad } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import PrimaryButton from '../PrimaryButton';
import AnimatedDialogIcon from '../AnimatedDialogIcon';

const Hero: FC = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const scrollY = isBrowser() ? window.scrollY : 0;
    setRotation(scrollY / 3);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener('scroll', handleScroll);
    return () => {
      isBrowser() && window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id={HOME_PAGE_IDS.hero}>
      <div className="flex flex-col md:flex-row relative md:min-h-[55vh] md:items-center">
        {/* Left */}
        <div className="w-full f-full  p-8 flex flex-col gap-4 z-10">
          <h2 className="text-xl md:text-2xl font-bold w-full">
            Trener personalny{' '}
            <Typewriter
              words={['Kraków', 'Online']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold uppercase">
            Paula Trenuje
          </h1>
          <div className="w-20 h-1 bg-orange" />
          <p className="mt-12 text-lg md:text-xl">
            Nazywam się Paula Dziubdziela i jestem trenerem personalnym. Moim
            celem jest być najsprawniejszą wersją siebie i do tego też
            chciałabym zachęcić Ciebie.
          </p>
          <div className="mt-4 flex flex-col md:flex-row w-full justify-center gap-6">
            <PrimaryButton
              text="Umów się na trening"
              onClick={() => {
                scrollToSection(HOME_PAGE_IDS.personalne);
              }}
              additionalStyle="w-full"
            />
            <PrimaryButton
              text="Trenuj z Ebookami"
              onClick={() => {
                scrollToSection(HOME_PAGE_IDS.ebooki);
              }}
              additionalStyle="w-full"
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scaleY: 1 },
            hidden: { opacity: 0, scaleY: 0 },
          }}
          className="inline-flex h-[400px] md:hidden w-full absolute left-0 top-[40%] -translate-y-1/4 bg-pink z-0"
        />
        {/* Right */}
        <div className="w-full h-max flex justify-center items-end relative">
          <Image
            src={'/new_hero.png'}
            width={450}
            height={450}
            alt={'hero-image'}
            className="z-20"
          />
          {/* Spinning circles */}
          <motion.div
            style={{ rotate: rotation }}
            className="absolute inset-0 z-10 opacity-30 flex justify-center items-center"
          >
            <Image src={'/hero-circle.png'} width={500} height={500} alt={''} />
          </motion.div>
          <motion.div
            style={{ rotate: rotation }}
            className="absolute inset-0 z-10 opacity-80 flex justify-center items-center"
          >
            <Image
              src={'/hero-inner__circles.png'}
              width={500}
              height={500}
              alt={''}
            />
          </motion.div>
          <div className="flex absolute inset-0">
            <div className="relative w-full h-full">
              {/* Block coming in from right */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 50 },
                }}
                className="hidden md:inline-flex w-[300px] h-full absolute right-0 top-0 bg-pink z-0"
              />

              {/* Animated icons */}
              <AnimatedDialogIcon
                icon={<Heart size={'28px'} color="white" />}
                additionalClassName="absolute right-20 md:right-32 top-32"
                arrowPlacement="bottomLeft"
                delay={4}
                repeatDelay={2}
              />
              <AnimatedDialogIcon
                icon={<Salad size={'28px'} color="white" />}
                additionalClassName="absolute left-20 md:left-40 top-20"
                arrowPlacement="bottomRight"
                delay={2}
                repeatDelay={2}
              />
              <AnimatedDialogIcon
                icon={<Dumbbell size={'28px'} color="white" />}
                additionalClassName="absolute left-28 top-48"
                arrowPlacement="topRight"
                delay={0}
                repeatDelay={2}
              />
            </div>
          </div>
        </div>

        {/* <div className="w-40"></div> */}
      </div>
    </section>
  );
};

export default Hero;
