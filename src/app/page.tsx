import AboutMe from '@/components/sections/AboutMe';
import EbookHighlight from '@/components/sections/EbookHighlight';
import Ebooks from '@/components/sections/Ebooks';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import PersonalKrakow from '@/components/sections/PersonalKrakow';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden overflow-y-hidden relative">
      <Hero />
      <Ebooks />
      <PersonalKrakow />
      <AboutMe />
      <Partners />
      <EbookHighlight />
      <div className="absolute hidden md:block -rotate-12 w-[2000px] h-[300px] md:h-[600px] bottom-[600px] -right-[400px] bg-pink z-10" />
    </main>
  );
}
