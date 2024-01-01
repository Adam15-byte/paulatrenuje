'use client';

import { TPersonalConfigCardType } from '@/configs/personalsConfig';
import { Button } from '@nextui-org/react';
import { FC } from 'react';

interface InfoCardProps {
  cardInfo: TPersonalConfigCardType;
}

const InfoCard: FC<InfoCardProps> = ({ cardInfo }) => {
  const { id, title, icon, iconHover, description } = cardInfo;
  if (id < 7) {
    return (
      <div className="group border border-gray rounded-md flex flex-col p-4 gap-4 relative overflow-hidden shadow-lg">
        <div className="flex gap-4">
          <div className="group-hover:text-orange transition-all">{icon}</div>
          <p className="text-lg font-semibold tracking-wide">{title}</p>
        </div>
        <p className="leading-8">{description}</p>
        <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-5 transition-all -rotate-12">
          {iconHover}
        </div>
      </div>
    );
  }
  return (
    <div className="group h-full col-span-1 md:col-span-2 border border-gray rounded-md flex flex-col md:flex-row p-4 gap-4 items-center justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="group-hover:text-orange transition-all">{icon}</div>
          <p className="text-lg font-semibold tracking-wide">{title}</p>
        </div>
        <p className="leading-8">{description}</p>
      </div>
      <a
        href="mailto:PaulaDziubdziela.fitness@gmail.com?subject=Treningi personalne&body=Cześć Paula, chciałabym umówić się na trening personalny. Poniżej podaję kilka informacji o sobie:"
        className="relative mx-auto"
      >
        <Button
          size="lg"
          radius="sm"
          className="text-white bg-orange z-20 absolute group-hover:animate-pulse"
        >
          Napisz do mnie
        </Button>
        <Button size="lg" radius="sm" className="text-white bg-pink">
          Napisz do mnie
        </Button>
      </a>
    </div>
  );
};

export default InfoCard;
