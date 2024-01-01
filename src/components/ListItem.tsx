'use client';

import { Check } from 'lucide-react';
import { FC } from 'react';

interface ListItemProps {
  text: string;
  index: number;
}

const ListItem: FC<ListItemProps> = ({ text, index }) => {
  return (
    <div className="flex items-center gap-4 group">
      <div className="text-white bg-gray group-hover:bg-orange transition-all p-1 rounded-full flex items-center justify-center">
        <Check size={12} />
      </div>
      <div className="tracking-wide leading-6">{text}</div>
    </div>
  );
};

export default ListItem;
