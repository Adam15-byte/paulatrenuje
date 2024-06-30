import { personalsConfigs } from '@/configs/personalsConfig';
import { HOME_PAGE_IDS } from '@/configs/sectionIDs';
import InfoCard from '../reusable-components/InfoCard';
const PersonalKrakow = () => {
  return (
    <section
      id={HOME_PAGE_IDS.personalne}
      className="flex mt-16 lg:mt-28 lg:min-h-0 w-full flex-col gap-4 lg:gap-12 lg:justify-between"
    >
      <div className="px-5 flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
            Treningi personalne Kraków
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-fit gap-10 px-5">
        {personalsConfigs.map((cardInfo) => (
          <InfoCard key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </section>
  );
};

export default PersonalKrakow;
