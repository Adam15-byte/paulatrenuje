import {
  Goal,
  HeartHandshake,
  MapPin,
  Medal,
  MonitorCheck,
  ShieldCheck,
  SmilePlus,
} from 'lucide-react';

export const personalsConfigs = [
  {
    id: 1,
    title: 'Lokalizacja',
    icon: <MapPin />,
    description:
      'Treningi realizuję na siłowni "Fabryka Ciao" w Krakowskiej dzielnicy Grzegórzki . Możemy także spotkać się u Ciebie w domu.',
  },
  {
    id: 2,
    title: 'Motywacja',
    icon: <SmilePlus />,
    description:
      'Razem nie damy Ci się poddać! Będę przy Tobie na każdym kroku Twojej fitnessowej podróży, motywując Cię do działania.',
  },
  {
    id: 3,
    title: 'Indywidualne podejście',
    icon: <Goal />,
    description:
      'Każdy jest inny i każdy potrzebuje czegoś innego - dlatego moje treningi są dostosowane specjalnie do Ciebie i Twoich potrzeb.',
  },
  {
    id: 4,
    title: 'Monitorowanie',
    icon: <MonitorCheck />,
    description:
      'Śledzę Twój postęp i dostosowuję treningi, abyś zawsze miała wyzwanie i nigdy się nie nudziła.',
  },
  {
    id: 5,
    title: 'Profesjonalizm',
    icon: <HeartHandshake />,
    description:
      'Mam wieloletnie doświadczenie w trenowaniu innych osób i jestem szeroko wykwalifikowana w prowadzeniu różnych form treningu, takich jak pilates, trening siłowy, trening funkcjonalny i wiele innych.',
  },

  {
    id: 6,
    title: 'Bezpieczeństwo',
    icon: <ShieldCheck />,
    description:
      'Twoje zdrowie jest najważniejsze. Zwracam uwagę na prawidłową technikę i bezpieczeństwo podczas każdego treningu.',
  },
  {
    id: 7,
    title: 'Gotowa? Start!',
    icon: <Medal />,
    description:
      'Nie czekaj, zacznij swoją przygodę z fitnessem już dziś! Jestem tutaj, aby Ci pomóc i wesprzeć na każdym etapie.',
  },
];

export type TPersonalConfigCardType = (typeof personalsConfigs)[0];
