import { FileText, Smartphone, Sun, Truck } from 'lucide-react';
import { Story } from 'react-insta-stories/dist/interfaces';

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
  '/zabka.svg',
  '/blik.svg',
  '/ma_symbol.svg',
  '/mbank.svg',
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
    enabled: true,
    id: 'fit-at-gym',
    picture: '/fit_at_gym.png',
    file: '/ebooks/FIT_AT_GYM.pdf',
    title: 'Fit at Gym',
    titleFirstPart: 'Fit at',
    titleSecondPart: ' Gym',
    trainingsInfo: {
      weeks: '8 tygodni',
      workouts: '32 treningi',
    },
    tags: ['get stronger', 'shape up', 'gym', 'abs'],
    shortDescription:
      'Trening siłowy, który pozwoli Ci stać się silniejszą i poprawić swoją kondycję.',
    longDescription:
      'Plan treningowy skupiający się na wzmocnieniu mięśni, kształtowaniu sylwetki i poprawie ogólnej sprawności, by być zwinną i wytrzymałą. Skutkiem ubocznym całego planu jest smukła i wysportowana sylwetka.',
    price: 159,
    discountPrice: null,
    pointsDescription: [
      'Wideo instruktażowe do wszystkich ćwiczeń',
      '4 treningi w tygodniu siłowo-kondycyjne',
      'Treningi do wykonania na siłowni',
      'Praktyczne porady jak skutecznie trenować siłowo',
      'Czas treningów wzmacniających od 60 do 70 minut',
      'Czas treningów cross od 45 do 60 minut',
    ],
    forWhom:
      'Dla osób zaawansowanych i średniozaawansowanych które miały już styczność z treningiem siłowym. Dla osób które chcą nie tylko wzmocnić mięśni i poprawić proporcje sylwetki, ale również pracować nad sprawnym ciałem. Plan treningowy jest w pełni do realizacji na siłowni.',
    contents: [
      { label: 'TRENINGI' },
      {
        label: 'PROGRESOWANIE',
      },
      {
        label: 'TRENINGI BLISKO UPADKU MIĘŚNIOWEGO',
      },
      {
        label: 'TEMPO',
      },
      {
        label: 'ODDYCHANIE',
      },
      {
        label: 'ZAMIENNIKI ĆWICZEŃ',
      },
      {
        label: 'POWTARZALNOŚĆ ĆWICZEŃ',
      },
      {
        label: 'FORMUŁY TRENINGOWE',
      },
      {
        label: 'SKALOWANIE',
      },
      {
        label: 'CO DALEJ PO UKOŃCZENIU PLANU',
      },
      {
        label: 'ROZGRZEWKA',
      },
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
    pagesLookup: ['/fit_at_gym_page1.png'],
    dedicatedStoryTitle: 'FIT AT GYM💪🏼',
    stories: [
      {
        type: 'image',
        url: '/stories_content/fit_at_gym1.jpg',
        duration: 3000,
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym2.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym3.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym4.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym5.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym6.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym7.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym8.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym9.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_gym10.mp4',
      },
    ],
  },
  {
    enabled: true,
    id: 'slim_legs',
    picture: '/slim-legs.png',
    file: '/ebooks/SLIM_LEG_PROGRAM.pdf',
    title: 'Slim legs',
    titleFirstPart: 'Slim',
    titleSecondPart: ' legs',
    trainingsInfo: {
      weeks: '8 tygodni',
      workouts: '32 treningi',
    },
    tags: ['get thin', 'workout plan', 'cardio', 'sweat', 'TRX', 'abs'],
    shortDescription:
      'Wszystko na temat WYSMUKLANIA nóg - zbiór wiedzy na temat treningu nóg i pośladków.',
    longDescription:
      'Informacje zawarte w ebooku pozwolą Ci zmodyfikować i poprawić własne treningi tak, aby sprzyjały celowi kształtowaniu pośladków. Wewnątrz znajdziesz jednak również konkretną propozycję planu treningowego, stworzonego w oparciu o opisane wcześniej koncepcje programowania treningowego.',
    price: 199,
    discountPrice: null,
    pointsDescription: [
      'Ebook treningowy nastawiony na wzmocnienie pośladków, jak i poprawę ogólnej sprawności',
      'Zbiór wiedzy na temat treningu nóg i pośladków',
      'Wskazówki treningowe, jak ćwiczyć mięśnie pośladkow, nie rozbudowując przy tym znacznie ud',
      'Praktyczne porady, które pomogą Ci świadomie planować treningi i poprawnie wykonywać ćwiczenia',
      'Podstawy żywienia dzięki którym zaplanujesz swoją dietę, aby odpowiadała twoim celom sylwetkowym',
      'Podstawowe i zaawansowane zasady treningowe',
      'Wideo instruktażowe do wszystkich ćwiczeń',
      'Propozycja 32 treningów ułożone w przykładowy 8 tygodniowy plan treningowy oparty na zasadach teoretycznych opisanych w ebooku',
      'Treningi do wykonania w domu lub na siłowni',
    ],
    forWhom:
      'Dla osób, które chcą skupić się na kształtowaniu pośladków, minimalizując przy tym rozbudowę ud. W tym ebooku opisuję od A do Z jak to zrobić. Niezależnie od tego jaki masz staż treningowy, wiedza zawarta w tym ebooku pomoże Ci wdrożyć poznane wskazówki w swój plan treningowy.',
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
    dedicatedStoryTitle: 'SMUKŁE UDA🦵🏼🍑',
    stories: [
      {
        type: 'video',
        url: '/stories_content/slim_legs_story_1.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/slim_legs_story_2.mp4',
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_3.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_4.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_5.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_6.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_7.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/slim_legs_story_8.jpg',
        duration: 3000,
      },
      {
        type: 'video',
        url: '/stories_content/slim_legs_story_9.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/slim_legs_story_10.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/slim_legs_story_11.mp4',
      },
    ],
  },
  {
    enabled: true,
    id: 'sweat_at_home',
    picture: '/sweat-at-home.png',
    file: '/ebooks/SWEAT_AT_HOME.pdf',
    title: 'Sweat at home',
    titleFirstPart: 'Sweat',
    titleSecondPart: ' at home',
    trainingsInfo: {
      weeks: '8 tygodni',
      workouts: '32 treningi',
    },
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
    longDescription:
      'W planie są 4 treningi w tygodniu, w którym mamy 2 treningi siłowo-wytrzymałościowe, trening wzmacniający z obciążeniem oraz trening cardio. W każdym angażujemy wszystkie partie mięśniowe, co przekłada się na szybszą utratę tkanki tłuszczowej oraz większe spalanie kalorii.',
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
    forWhom:
      'Z moim programem Sweat At Home, nie tylko schudniesz, ale i wyrzeźbisz mięśnie. Poprawisz ogólną sprawność, która w życiu codziennym jest bardzo potrzebna. Nie ma tu miejsca na nudę. Każdy trening to nowe wyzwanie.',
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
    dedicatedStoryTitle: 'SWEAT AT HOME💦',
    stories: [
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_1.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_2.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_3.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_4.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_5.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_6.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_7.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_8.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_9.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_10.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_11.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_12.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_13.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_14.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_15.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_16.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/sweat_at_home_story_17.mp4',
      },
    ],
  },
  {
    enabled: true,
    id: 'fit_at_home',
    picture: '/fit-at-home.png',
    file: '/ebooks/FIT_AT_HOME.pdf',
    title: 'Fit at home',
    titleFirstPart: 'Fit',
    titleSecondPart: ' at home',
    trainingsInfo: {
      weeks: '12 tygodni',
      workouts: '48 treningi',
    },
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
    longDescription:
      'Treningi są zróżnicowane, dzięki czemu każdy będzie stanowił wyzwanie. Jest to kompleksowy plan, więc znajdziesz w nim treningi na pośladki, brzuch, oraz treningi kondycyjne pozwalające zaangażować każdą partię ciała do pracy. Dodatkowo jako bonus przygotowałam dla Ciebie pełny trening z zakresu mobility oraz video ze wskazówkami, jak poprawnie ustawiać się podczas ćwiczeń.',
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
    forWhom:
      'Z programem Fit At Home wzmocnisz i wymodelujesz swoje ciało, poprawisz kondycję oraz spalisz zbędną tkankę tłuszczową. Przez 12 tygodni zrealizujesz kompleksowy plan treningowy na całe ciało. Przez ten czas wyrobisz sobie dobre nawyki, a dzięki po treningowym endorfinom pokochasz aktywność fizyczną.',
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
    dedicatedStoryTitle: 'EBOOK/wyzwanie',
    stories: [
      {
        type: 'video',
        url: '/stories_content/fit_at_home_1.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_2.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_3.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_4.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_5.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_6.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_7.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_8.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_9.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_10.mp4',
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_11.jpg',
        duration: 3000,
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_12.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_13.mp4',
      },
      {
        type: 'video',
        url: '/stories_content/fit_at_home_14.mp4',
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_15.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_16.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_17.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_18.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_19.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_20.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_21.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_22.jpg',
        duration: 3000,
      },
      {
        type: 'image',
        url: '/stories_content/fit_at_home_23.jpg',
        duration: 3000,
      },
    ],
  },
];

export type EbookConfigType = (typeof ebooksConfig)[0];

export type EbookForShoppingBag = Pick<
  EbookConfigType,
  'id' | 'title' | 'price' | 'discountPrice' | 'picture'
>;

export const opinionsStories: Story[] = [
  {
    type: 'image',
    url: '/stories_content/opinion_story_1.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_2.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_3.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_4.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_5.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_6.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_7.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_8.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_9.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_10.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_11.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_12.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_13.jpg',
    duration: 3000,
  },
  {
    type: 'image',
    url: '/stories_content/opinion_story_14.jpg',
    duration: 3000,
  },
];
