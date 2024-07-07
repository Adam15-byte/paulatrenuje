import {
  CreditCard,
  LeafyGreen,
  Ruler,
  User,
  Notebook,
  Dumbbell,
  TvMinimalPlay,
  LogOut,
  BrickWall,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

export const iconParams = {
  size: 20,
  strokeWidth: 1.75,
};

export const appNavigationConfig = [
  {
    name: 'Profil',
    icon: <User {...iconParams} />,
    path: '/aplikacja/profil',
    children: [
      {
        name: 'Moja subskrypcja',
        icon: <CreditCard {...iconParams} />,
        path: '/aplikacja/profil/zarzadzaj-subskrypcja',
      },
      {
        name: 'Wyloguj',
        icon: <LogOut {...iconParams} />,
        path: '/aplikacja/profil',
        onClick: () => {
          signOut();
        },
      },
      {
        name: 'Zaktualizuj pomiary',
        icon: <Ruler {...iconParams} />,
        path: '/aplikacja/profil/zaktualizuj-pomiary',
      },
    ],
  },
  {
    name: 'Dieta',
    icon: <LeafyGreen {...iconParams} />,
    path: '/aplikacja/dieta',
    children: [
      {
        name: 'Dziennik kaloryczny',
        icon: <Notebook {...iconParams} />,
        path: '/aplikacja/dieta/dziennik',
      },
    ],
  },
  {
    name: 'Trening',
    icon: <Dumbbell {...iconParams} />,
    path: '/aplikacja/trening',
    children: [
      {
        name: 'Treningi domowe',
        icon: <TvMinimalPlay {...iconParams} />,
        path: '/aplikacja/trening/treningi-domowe',
      },
      {
        name: 'Treningi na siłowni',
        icon: <BrickWall {...iconParams} />,
        path: '/aplikacja/trening/treningi-silownia',
      },
    ],
  },
];
