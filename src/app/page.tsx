import Ebooks from '@/components/sections/Ebooks';
import Hero from '@/components/sections/Hero';
import PersonalKrakow from '@/components/sections/PersonalKrakow';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <Ebooks />
      <PersonalKrakow />
    </main>
  );
}
