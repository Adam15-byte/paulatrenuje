import { TPersonalConfigCardType } from '@/configs/personalsConfig';
import { FC } from 'react';

interface InfoCardProps {
  cardInfo: TPersonalConfigCardType;
}

const InfoCard: FC<InfoCardProps> = ({ cardInfo }) => {
  return <div>InfoCars</div>;
};

export default InfoCard;
