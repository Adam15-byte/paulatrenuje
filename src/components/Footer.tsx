import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full max-w-7xl px-8 mt-16 py-6 border-t items-center border-gray">
      <div className="flex flex-row justify-between w-full">
        <p className="mr-6">@2023 PaulaTrenuje. All Rights Reserved</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/regulamin" className="text-gray-500">
            Regulamin
          </Link>
          <Link href="/polityka-prywatnosci" className="text-gray-500">
            Polityka prywatności
          </Link>
        </div>
      </div>
      <div className="h-fit w-fit block md:hidden">
        <Image
          src={'/GymEQ.png'}
          height={500}
          width={500}
          alt="gym equipment ilustration"
        />
      </div>
    </footer>
  );
};

export default Footer;
