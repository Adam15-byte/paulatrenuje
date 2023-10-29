'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  additionalStyle?: string;
}

const ActionButton: FC<ActionButtonProps> = ({
  text,
  href,
  onClick,
  additionalStyle,
}) => {
  if (href) {
    return (
      <Link href={href} className={cn(additionalStyle, 'relative group')}>
        <Button
          size="lg"
          radius="sm"
          className={cn(
            additionalStyle,
            'text-white bg-orange z-20 absolute group-hover:animate-pulse group-hover:scale-[102%]'
          )}
        >
          {text}
        </Button>
        <Button
          size="lg"
          radius="sm"
          className={cn(
            additionalStyle,
            'text-white bg-pink group-hover:scale-[102%]'
          )}
        >
          {text}
        </Button>
      </Link>
    );
  }
  if (onClick) {
    return (
      <div className={cn(additionalStyle, 'relative group cursor-pointer')}>
        <Button
          size="lg"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            'text-white bg-orange z-20 absolute group-hover:animate-pulse group-hover:scale-[102%]'
          )}
        >
          {text}
        </Button>
        <Button
          size="lg"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            'text-white bg-pink group-hover:scale-[102%]'
          )}
        >
          {text}
        </Button>
      </div>
    );
  }
};

export default ActionButton;
