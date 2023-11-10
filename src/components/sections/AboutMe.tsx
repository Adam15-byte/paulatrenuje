import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="flex mt-16 z-20 lg:mt-28 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between">
      <div className="px-5 flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            O mnie
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-5 items-center">
        <p className="leading-8 tracking-wide">
          Hej, tu Paula! Witam Cię serdecznie na mojej stronie. Nazywam się
          Paula Dziubdziela i jestem trenerem personalnym. Ponadto jestem
          ambasadorką portalu Fabryka Siły i prowadzę konto na instagramie, na
          którym dzielę się swoją wiedzą, motywuję do zdrowego i aktywnego trybu
          życia, oraz systematycznie wstawiam zestawy treningowe. <br />
          <br />
          Jestem ogromną fanką treningu ogólnorozwojowego. Moim celem jest być
          najsprawniejszą wersją siebie i do tego też chciałabym zachęcić
          Ciebie.{' '}
          <span className="font-semibold">
            W swoich programach kładę nacisk na 4 filary: sprawność, kondycję,
            siłę oraz mobilność, a smukła, wysportowana sylwetka to ich skutek
            uboczny 🙂
          </span>{' '}
          <br />
          <br />W związku z tym staram się być otwarta na różne aktywności i
          mimo tego, że różnią się one od siebie znacznie - to każda wnosi coś
          pozytywnego i pozwala rozwijać ciało na każdej płaszczyźnie. <br />
          <br /> Sport i zdrowy tryb życia są moją ogromną pasją.{' '}
          <span className="font-semibold">
            Chciałabym pokazać, że da się być fit, bez mnóstwa godzin spędzonych
            na siłowni i katorżniczych diet, w których wszystkiego trzeba sobie
            odmawiać.
          </span>
        </p>
        <Image
          src="/AboutMe.png"
          width={400}
          height={400}
          alt={'about me image'}
        />
      </div>
    </section>
  );
};

export default AboutMe;
