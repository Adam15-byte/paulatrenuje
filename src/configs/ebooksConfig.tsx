import { FileText, Smartphone, Sun, Truck } from 'lucide-react';

const iconProps = {
  strokeWidth: 1,
  size: 16,
  className: 'z-10',
};

const iconPropsHover = {
  strokeWidth: 2,
  size: 50,
};

export const paymentMethodsIcons = [
  '/applepay.svg',
  '/blik.svg',
  '/ma_symbol.svg',
  '/p24now-square.svg',
];

export const commonFeatures = [
  {
    title: 'Produkt elektroniczny',
    icon: <FileText {...iconProps} />,
    iconHover: <FileText {...iconPropsHover} />,
  },
  {
    title: 'Dozywotni dostęp',
    icon: <Sun {...iconProps} />,
    iconHover: <Sun {...iconPropsHover} />,
  },
  {
    title: 'Natychmiastowa wysyłka',
    icon: <Truck {...iconProps} />,
    iconHover: <Truck {...iconPropsHover} />,
  },
  {
    title: 'Zawsze pod ręką',
    icon: <Smartphone {...iconProps} />,
    iconHover: <Smartphone {...iconPropsHover} />,
  },
];

export const ebooksConfig = [
  {
    id: 'slim_legs',
    picture: '/slim-legs.png',
    title: 'Slim legs',
    titleFirstPart: 'Slim',
    titleSecondPart: ' legs',
    tags: ['get thin', 'workout plan', 'cardio', 'sweat', 'TRX', 'abs'],
    shortDescription:
      'Wszystko na temat WYSMUKLANIA nóg - zbiór wiedzy na temat treningu nóg i pośladków.',
    price: 199,
    discountPrice: 159,
    pointsDescription: [
      'Wszystko na temat WYSMUKLANIA nóg',
      'Zbiór wiedzy na temat treningu nóg i pośladków',
      'Wskazówki jakie błędy są najczęściej popełniane na treningu, które wpływają na rozbudowę ud',
      'Praktyczne porady, które pomogą Ci świadomie planować treningi i poprawnie wykonywać ćwiczenia',
      'Podstawy żywienia dzięki którym zaplanujesz swoją dietę, aby odpowiadała twoim celom sylwetkowym',
      'Podstawowe i zaawansowane zasady treningowe',
      'Wideo instruktażowe do wszystkich ćwiczeń',
      'Propozycja 32 treningów ułożone w przykładowy 8 tygodniowy plan treningowy oparty na zasadach teoretycznych opisanych w ebooku',
      'Treningi do wykonania w domu lub na siłowni',
    ],
    contents: [
      { label: 'MÓJ PRZYPADEK' },
      {
        label: 'TYPY SYLWETEK - CZY MAJĄ ZNACZENIE PRZY DOBIERANIU ĆWICZEŃ?',
      },
      {
        label: 'TRENING SIŁOWY - DLACZEGO WARTO GO WYKONYWAĆ',
      },
      {
        label: 'JAK ĆWICZYĆ NOGI I POŚLADKI NIE ROZBUDOWUJĄC UD',
      },
      {
        label: 'WPŁYW GENETYKI NA ROZWÓJ SYLWETKI',
      },
      {
        label: 'DLACZEGO NOGI PUCHNĄ PO TRENINGU?',
      },
      {
        label: 'KTÓRE MIĘŚNIE ODPOWIADAJĄ ZA WYGLĄD POŚLADKÓW',
      },
      {
        label: 'HIP DIPS. WGŁĘBIENIA W BIODRACH',
      },
      {
        label: 'ĆWICZENIA, W KTÓRYCH DOMINUJĄ MIĘŚNIE POŚLADKOWE',
      },
      {
        label: 'KTÓRE MIĘŚNIE ODPOWIADAJĄ ZA WYGLĄD NÓG',
      },
      {
        label: 'JAK WYSZCZUPLIĆ ŁYDKI?',
      },
      {
        label: 'ĆWICZENIA, W KTÓRYCH DOMINUJĄ MIĘŚNIE CZWOROGŁOWE UD',
      },
      {
        label: 'ĆWICZENIA, W KTÓRYCH DOMINUJĄ MIĘŚNIE KULSZOWO-GOLENIOWE',
      },
      {
        label: 'RUCH WYPROSTU BIODRA I ZGIĘCIA W KOLANIE',
      },
      {
        label:
          'PRZYSIAD ZE SZTANGĄ, CZY PRZYSIAD NA SUWNICY - KTÓRY LEPSZY DLA POŚLADKÓW?',
      },
      {
        label: 'CZUCIE MIĘŚNIOWE PODCZAS TRENINGU',
      },
      {
        label:
          'JAK WYSZCZUPLIĆ UDA, KTÓRE SĄ MOCNO UMIĘŚNIONE PRZEZ NADMIERNE I CIĘŻKIE TRENINGI SIŁOWE?',
      },
      {
        label: 'NAJWIĘKSZY BŁĄD, KTÓRY POPEŁNIAJĄ DZIEWCZYNY W TRENINGU NÓG',
      },
      {
        label: 'METODY PROGRESJI NA TRENINGACH.',
      },
      {
        label: 'ILE RAZY TRENOWAĆ?',
      },
      {
        label: 'ZAKWASY I SPALONE KALORIE',
      },
      {
        label: 'MASA CZY REDUKCJA? OD CZEGO ZACZĄĆ?',
      },
      {
        label: 'WSZYSTKO NA TEMAT CARDIO',
      },
      {
        label: 'PRAWIDŁOWA POSTAWA PODCZAS ĆWICZEŃ',
      },
      {
        label: 'STRETCHING. PO CO SIĘ ROZCIĄGAĆ?',
      },
      {
        label: 'WPŁYW DIETY NA EFEKTY SYLWETKOWE',
      },
      {
        label: 'JAK POLICZYĆ SWOJE ZAPOTRZEBOWANIE KALORYCZNE?',
      },
      {
        label: 'ILE JEŚĆ BIAŁKA, TŁUSZCZY I WĘGLOWODANÓW?',
      },
      {
        label: '8 TYGODNIOWY PLAN TRENINGOWY',
        children: [
          { label: 'OPIS TRENINGÓW' },
          { label: 'FORMUŁY TRENINGOWE' },
          { label: 'SKALOWANIE' },
          { label: 'SPRZĘT' },
          { label: '1 TYDZIEŃ' },
          { label: '2 TYDZIEŃ' },
          { label: '3 TYDZIEŃ' },
          { label: '4 TYDZIEŃ' },
          { label: '5 TYDZIEŃ' },
          { label: '6 TYDZIEŃ' },
          { label: '7 TYDZIEŃ' },
          { label: '8 TYDZIEŃ' },
        ],
      },
    ],
    commonFeatures,
    pagesLookup: [
      '/slim_legs_page1.png',
      '/slim_legs_page2.png',
      '/slim_legs_page3.png',
      '/slim_legs_page4.png',
    ],
  },
  {
    id: 'sweat_at_home',
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
    pointsDescription: [
      'Program nastawiony na spalanie tkanki tłuszczowej',
      '32 intensywne treningi',
      'Treningi do wykonania w domu lub na siłowni',
      '8 tygodniowy kompletny plan treningowy zarówno dla osób początkujących jak i zaawansowanych',
      'Instrukcje wykonania rozgrzewek oraz schładzania potreningowego',
      'Wideo instruktażowe do wszystkich ćwiczeń',
      'Oprócz kształtowania sylwetki, skupiamy się również na polepszeniu naszej sprawności, wytrzymałości, siły i kondycji',
    ],
    contents: [
      { label: 'WSTĘP' },
      { label: 'ROZKŁAD TRENINGÓW' },
      { label: 'FORMUŁY TRENINGOWE' },
      { label: 'SKALOWANIE ĆWICZEŃ' },
      { label: 'PROGRESS' },
      { label: 'POTRZEBNY SPRZĘT' },
      {
        label: 'PLAN TRENINGOWY',
        children: [
          { label: '1 TYDZIEŃ' },
          { label: '2 TYDZIEŃ' },
          { label: '3 TYDZIEŃ' },
          { label: '4 TYDZIEŃ' },
          { label: '5 TYDZIEŃ' },
          { label: '6 TYDZIEŃ' },
          { label: '7 TYDZIEŃ' },
          { label: '8 TYDZIEŃ' },
        ],
      },
    ],
    commonFeatures,
    pagesLookup: [
      '/sweat_at_home_page1.png',
      '/sweat_at_home_page2.png',
      '/sweat_at_home_page3.png',
      '/sweat_at_home_page4.png',
    ],
  },
  {
    id: 'fit_at_home',
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
    pointsDescription: [
      'Program nastawiony  na wyrzeźbienie sylwetki, poprawę kondycję i spalanie zbędnej tkankę tłuszczowej',
      '48 zestawów treningowych',
      'Treningi do wykonania w domu lub na siłowni',
      'Kompleksowy plan treningowy na 12 tygodni',
      'Wideo instruktażowe do wszystkich ćwiczeń',
      'Podstawy żywienia dzięki którym zaplanujesz swoją dietę',
    ],
    contents: [
      { label: 'Cele programu' },
      { label: 'Opis treningów' },
      {
        label: 'Formy treningowe',
      },
      {
        label: 'Warm up, cool down',
      },
      {
        label: 'Mobility, rolowanie',
      },
      {
        label: 'Mind muscle connection',
      },
      {
        label: 'Prawidłowa postawa podczas ćwiczeń',
      },
      {
        label: 'Zgrabne nogi, smukłe uda',
      },
      {
        label: 'Potrzebny sprzęt',
      },
      {
        label: 'Zapotrzebowanie kaloryczne - jak je obliczyć',
      },
      {
        label: 'Jak schudnąć, a jak przytyć',
      },
      {
        label: 'Makroskładniki - jak je obliczyć',
      },
      {
        label: 'Białko, tłuszcze, węglowodany',
      },
      {
        label: 'Najlepsze źródła poszczególnych makroskładników',
      },
      {
        label: 'Odżywka białkowa - po co i kiedy ją stosować',
      },
      {
        label: 'Liczenie kalorii',
      },
      {
        label: 'Posiłek przed i po treningu',
      },
      {
        label: 'Nawodnienie',
      },
      {
        label: '12 TYGODNIOWY PLAN TRENINGOWY',
        children: [
          { label: '1 TYDZIEŃ' },
          { label: '2 TYDZIEŃ' },
          { label: '3 TYDZIEŃ' },
          { label: '4 TYDZIEŃ' },
          { label: '5 TYDZIEŃ' },
          { label: '6 TYDZIEŃ' },
          { label: '7 TYDZIEŃ' },
          { label: '8 TYDZIEŃ' },
          { label: '9 TYDZIEŃ' },
          { label: '10 TYDZIEŃ' },
          { label: '11 TYDZIEŃ' },
          { label: '12 TYDZIEŃ' },
        ],
      },
    ],
    commonFeatures,
    pagesLookup: [
      '/fit_at_home_page1.png',
      '/fit_at_home_page2.png',
      '/fit_at_home_page3.png',
      '/fit_at_home_page4.png',
    ],
  },
];

export type EbookConfigType = (typeof ebooksConfig)[0];
