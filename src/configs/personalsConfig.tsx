import { Goal, MapPin, MonitorCheck, SmilePlus } from 'lucide-react';

const iconProps = {
  strokeWidth: 2.5,
  size: 24,
  className: 'z-10',
};

const iconPropsHover = {
  strokeWidth: 2.5,
  size: 150,
};

export const personalsConfigs = [
  {
    id: 1,
    title: 'Lokalizacja',
    icon: <MapPin {...iconProps} />,
    iconHover: <MapPin {...iconPropsHover} />,
    description:
      'Treningi realizuję na siłowni "Fabryka Ciao" w Krakowskiej dzielnicy Grzegórzki . Możemy także spotkać się u Ciebie w domu.',
  },
  {
    id: 2,
    title: 'Motywacja',
    icon: <SmilePlus {...iconProps} />,
    iconHover: <SmilePlus {...iconPropsHover} />,
    description:
      'Razem nie damy Ci się poddać! Będę przy Tobie na każdym kroku Twojej fitnessowej podróży, motywując Cię do działania.',
  },
  {
    id: 3,
    title: 'Indywidualne podejście',
    icon: <Goal {...iconProps} />,
    iconHover: <Goal {...iconPropsHover} />,
    description:
      'Każdy jest inny i każdy potrzebuje czegoś innego - dlatego moje treningi są dostosowane specjalnie do Ciebie i Twoich potrzeb.',
  },
  {
    id: 4,
    title: 'Monitorowanie',
    icon: <MonitorCheck {...iconProps} />,
    iconHover: <MonitorCheck {...iconPropsHover} />,
    description:
      'Śledzę Twój postęp i dostosowuję treningi, abyś zawsze miała wyzwanie i nigdy się nie nudziła.',
  },
];

export type TPersonalConfigCardType = (typeof personalsConfigs)[0];
