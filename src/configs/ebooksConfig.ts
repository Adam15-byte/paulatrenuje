export const ebooksConfig = [
  {
    picture: '/slim-legs.png',
    title: 'Slim legs',
    titleFirstPart: 'Slim',
    titleSecondPart: ' legs',
    tags: ['get thin', 'workout plan', 'cardio', 'sweat', 'TRX', 'abs'],
    shortDescription:
      'Wszystko na temat WYSMUKLANIA nóg - zbiór wiedzy na temat treningu nóg i pośladków.',
    price: 199,
    discountPrice: null,
  },
  {
    picture: '/sweat-at-home.png',
    title: 'Sweat at home',
    titleFirstPart: 'Sweat',
    titleSecondPart: ' at home',
    tags: [
      'at home',
      '12 weeks',
      'lose fat',
      'cardio',
      'sweat',
      'TRX',
      'abs',
      'love yourself',
    ],
    shortDescription:
      '8 tygodniowy plan treningowy dla osób chcących wyrzeźbić sylwetkę i poprawić kondycję.',
    price: 159,
    discountPrice: null,
  },
  {
    picture: '/fit-at-home.png',
    title: 'Fit at home',
    titleFirstPart: 'Fit',
    titleSecondPart: ' at home',
    tags: [
      'abs',
      '8 weeks',
      'cardio',
      'lose fat',
      'cardio',
      'abs',
      'love yourself',
    ],
    shortDescription: '12 tygodniowe wyzwanie treningowe i podstawy żywienia.',
    price: 189,
    discountPrice: null,
  },
];

export type EbookConfigType = (typeof ebooksConfig)[0];
