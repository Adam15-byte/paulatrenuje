import { FC } from 'react';

interface SmallInfoCardProps {
  title: string;
  icon: JSX.Element;
  iconHover: JSX.Element;
}

const SmallInfoCard: FC<SmallInfoCardProps> = ({ title, icon, iconHover }) => {
  return (
    <div className="group border border-gray border-opacity-20 rounded-md flex items-center p-2 gap-4 hover:scale-[101%] relative overflow-hidden shadow-lg">
      <div className="flex items-center gap-4">
        <div className="group-hover:text-orange transition-all">{icon}</div>
        <p className=" text-xs tracking-wide">{title}</p>
      </div>
      <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-5 transition-all -rotate-12">
        {iconHover}
      </div>
    </div>
  );
};

export default SmallInfoCard;
