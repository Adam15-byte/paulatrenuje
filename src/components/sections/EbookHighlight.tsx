import Image from 'next/image';
import PrimaryButton from '../PrimaryButton';

const EbookHighlight = () => {
  return (
    <section className="flex flex-col md:flex-row mt-16 lg:mt-28 lg:min-h-0 w-full gap-8 lg:gap-12 px-5 lg:justify-between relative z-20">
      <div className="flex flex-col gap-4 justify-center">
        <div className="h-1 bg-orange w-20" />
        <div className=" flex gap-2">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
              <span className="text-gray">8 TYGODNIOWY</span>
              <br /> <span className="text-orange">PROGRAM </span>
              <br /> TRENINGOWY
            </h2>
            <p className="tracking-wide leading-8">
              Kompletny poradnik dotyczący metod treningowych pomagających
              kształtowac kobiecą sylwetkę i zadbac o szczupłe nogi. Zawiera
              porady merytoryczne i gotową propozycję planu treningowego na 8
              tygodni.
            </p>
          </div>
        </div>
        <PrimaryButton
          text="zobacz więcej"
          href="/"
          additionalStyle="w-full md:w-[200px] md:mx-auto"
        />
      </div>
      <div className="relative pr-12 pb-12 group overflow-visible">
        <Image
          src={'/slim-legs.png'}
          width={900}
          height={900}
          alt={'slim legs program'}
          className="z-10 drop-shadow-xl mb-6 group-hover:-rotate-3 transition-all group-hover:-translate-x-3"
        />
        <Image
          src={'/iphone-slim-legs.png'}
          width={200}
          height={200}
          alt={'slim legs program'}
          className="absolute bottom-12 right-0 z-20 drop-shadow-xl group-hover:rotate-3 group-hover:translate-x-3 transition-all"
        />
      </div>
    </section>
  );
};

export default EbookHighlight;
