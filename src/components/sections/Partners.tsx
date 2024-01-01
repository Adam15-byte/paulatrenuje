import { FSPartner } from '@/configs/partnersConfig';
import Image from 'next/image';
import ListItem from '../ListItem';
const Partners = () => {
  return (
    <section className="flex mt-16 lg:mt-28 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between z-20">
      <div className="px-5 flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Partnerzy
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/fs.png"
          height={400}
          width={400}
          alt="fabryka siły logo"
          className="mx-auto md:mx-0"
        />
        <div className="flex flex-col gap-4 px-4 md:px-0">
          {FSPartner.map((text: string, index) => (
            <ListItem key={index} text={text} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
