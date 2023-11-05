'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FC } from 'react';

interface ListItemProps {
  text: string;
  index: number;
}

const ListItem: FC<ListItemProps> = ({ text, index }) => {
  return (
    <div className="flex items-center gap-4 group">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        variants={{
          visible: { opacity: 1, rotate: 0 },
          hidden: { opacity: 0, rotate: 45 },
        }}
        className="text-white bg-gray group-hover:bg-orange transition-all p-1 rounded-full flex items-center justify-center"
      >
        <Check size={12} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 },
        }}
        className="tracking-wide leading-6"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default ListItem;
