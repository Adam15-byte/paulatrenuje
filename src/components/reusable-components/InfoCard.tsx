import { TPersonalConfigCardType } from '@/configs/personalsConfig';
import { FC } from 'react';

interface InfoCardProps {
  cardInfo: TPersonalConfigCardType;
}

const InfoCard: FC<InfoCardProps> = ({ cardInfo }) => {
  const { id, title, icon, description } = cardInfo;
  if (id < 7) {
    return (
      <div className="group border border-gray rounded-md flex flex-col p-4 gap-4 shadow-lg">
        <div className="flex gap-4">
          <div className="group-hover:text-orange transition-all">{icon}</div>
          <p className="text-lg font-semibold tracking-wide">{title}</p>
        </div>
        <p className="leading-8">{description}</p>
      </div>
    );
  }
};

export default InfoCard;
