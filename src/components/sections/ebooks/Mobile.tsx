import AnimatedDialogWindow from '@/components/AnimatedDialogWindow';
import { EbookConfigType } from '@/configs/ebooksConfig';
import { Dumbbell, Repeat, Timer } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface MobileProps {
  ebookData: EbookConfigType;
}

const Mobile: FC<MobileProps> = ({ ebookData }) => {
  const { trainingsInfo, longDescription } = ebookData;
  return (
    <section className="bg-pink flex mt-16 z-20 lg:mt-28 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between px-5 pt-10">
      <div className="flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-gray">
            {trainingsInfo.weeks}
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-orange">
            {trainingsInfo.workouts}
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Zawsze pod ręką
          </h2>
        </div>
      </div>
      <div className="mt-2 leading-7">
        <p>
          {longDescription}
          <br />
          <br /> Ebook oraz wszystkie jego treści są zoptymalizowane pod kątem
          czytania na smartfonie, co umożliwia korzystanie z niego nawet w
          trakcie ćwiczeń.
        </p>
      </div>
      <div className="w-full">
        <div className="mx-auto w-full md:w-fit h-full ">
          <div
            className="h-[450px] w-full flex flex-col gap-8 items-center justify-center z-50 -mb-[100px] md:-mb-[140px] relative"
            style={{
              backgroundImage: 'url(/blob.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '130%',
              zIndex: 30,
            }}
          >
            <div className="flex gap-4 text-white items-center text-xl font-semibold tracking-widest">
              <Timer size={28} strokeWidth={2.5} /> <p>45 sekund przerwy</p>
            </div>
            <div className="flex gap-4 text-white items-center text-xl font-semibold tracking-widest">
              <Dumbbell size={28} strokeWidth={2.5} /> <p>12 powtórzeń</p>
            </div>
            <div className="flex gap-4 text-white items-center text-xl font-semibold tracking-widest">
              <Repeat size={28} strokeWidth={2.5} /> <p>3 serie</p>
            </div>
          </div>
          <div className=" bg-white w-fit h-full  mx-auto px-2 pt-2 md:px-12 md:pt-12  rounded-t-full relative z-10">
            <AnimatedDialogWindow
              text="Ściągnij łopatki"
              additionalClassName="absolute -right-20 md:-right-16 top-12 md:top-32 uppercase font-semibold tracking-widest text-white"
              arrowPlacement="bottomLeft"
              delay={0}
              repeatDelay={2}
            />
            <AnimatedDialogWindow
              text="Napnij brzuch"
              additionalClassName="absolute -left-4 md:left-0 top-48 md:top-60 uppercase font-semibold tracking-widest text-white"
              arrowPlacement="topRight"
              delay={2}
              repeatDelay={2}
            />
            <AnimatedDialogWindow
              text="Pochyl się lekko"
              additionalClassName="absolute -right-20 md:-right-8 bottom-24 uppercase font-semibold tracking-widest text-white"
              arrowPlacement="topLeft"
              delay={4}
              repeatDelay={2}
            />
            <Image
              src={'/phone_exercise.png'}
              height={300}
              width={300}
              alt="exercise on the phone"
              className="mx-auto z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
