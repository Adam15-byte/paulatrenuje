'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedDialogWindowProps {
  text: string;
  additionalClassName: string;
  arrowPlacement: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
  delay: number;
  repeatDelay: number;
}

const AnimatedDialogWindow: FC<AnimatedDialogWindowProps> = ({
  text,
  additionalClassName,
  arrowPlacement,
  delay,
  repeatDelay,
}) => {
  const rounding = () => {
    switch (arrowPlacement) {
      case 'bottomLeft':
        return 'rounded-tl-full rounded-tr-full rounded-br-full';
      case 'bottomRight':
        return 'rounded-tl-full rounded-tr-full rounded-bl-full';
      case 'topLeft':
        return 'rounded-br-full rounded-tr-full rounded-bl-full';
      case 'topRight':
        return 'rounded-tl-full rounded-br-full rounded-bl-full';
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
        repeatDelay,
      }}
      className={cn(
        'flex p-4 items-center text-white justify-center bg-orange z-20',
        additionalClassName,
        rounding()
      )}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedDialogWindow;
