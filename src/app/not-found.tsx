import { NotFoundParallax } from '@/components/ui/not-found-paralax';
import React from 'react';

export const products = [
  {
    title: 'Strona główna',
    link: '/',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/MainPage.png',
  },
  {
    title: 'Ebok Slim Legs',
    link: '/ebooki/slim_legs',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/SlimLegs.png',
  },
  {
    title: 'Ebook Fit at Gym',
    link: '/ebooki/fit-at-gym',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/FitAtGym.png',
  },
  {
    title: 'Ebook Sweat at Home',
    link: '/ebooki/sweat_at_home',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/SweatAtHome.png',
  },
  {
    title: 'Ebook Fit at Home',
    link: '/ebooki/fit_at_home',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/FitAtGym.png',
  },
  {
    title: 'Strona główna',
    link: '/',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/MainPage.png',
  },
  {
    title: 'Ebok Slim Legs',
    link: '/ebooki/slim_legs',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/SlimLegs.png',
  },
  {
    title: 'Ebook Fit at Gym',
    link: '/ebooki/fit-at-gym',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/FitAtGym.png',
  },
  {
    title: 'Ebook Sweat at Home',
    link: '/ebooki/sweat_at_home',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/SweatAtHome.png',
  },
  {
    title: 'Ebook Fit at Home',
    link: '/ebooki/fit_at_home',
    thumbnail: 'https://paulatrenuje.s3.amazonaws.com/FitAtGym.png',
  },
];

const notFound = () => {
  return <NotFoundParallax products={[...products, ...products]} />;
};

export default notFound;
