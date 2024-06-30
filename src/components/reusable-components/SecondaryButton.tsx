'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps {
  text: string;
  href?: string;
  type?: 'button' | 'submit';
  form?: string;
  onClick?: () => void;
  additionalStyle?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  text,
  href,
  type,
  form,
  onClick,
  additionalStyle = 'w-full md:mx-auto',
  leftIcon,
  rightIcon,
  disabled,
}) => {
  if (href && disabled !== true) {
    return (
      <Link
        href={href}
        scroll={true}
        className={cn(additionalStyle, 'relative group')}
      >
        <div
          className={cn(
            additionalStyle,
            'text-orange border shadow-md border-gray justify-center text-base py-3 px-6 font-medium rounded-md bg-orange z-10 absolute group-hover:animate-pulse group-hover:scale-[101%] gap-2 tracking-wide'
          )}
        >
          {leftIcon}
          {text}
          {rightIcon}
        </div>
        <div
          className={cn(
            additionalStyle,
            'text-white flex justify-center text-base py-3 px-6 font-medium rounded-md bg-pink group-hover:scale-[101%] gap-2 tracking-wide'
          )}
        >
          {leftIcon}
          {text}
          {rightIcon}
        </div>
      </Link>
    );
  }
  if (onClick) {
    return (
      <div className={cn(additionalStyle, 'relative cursor-pointer')}>
        <Button
          type={type}
          form={form}
          disabled={disabled}
          size="md"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            disabled ? 'bg-gray' : 'bg-white',
            disabled ? '' : 'hover:animate-pulse hover:scale-[101%]',
            'text-orange border shadow-md border-gray z-20 absolute text-base font-medium tracking-wide'
          )}
        >
          {leftIcon}
          {text}
          {rightIcon}
        </Button>
        <Button
          type={type}
          form={form}
          disabled={disabled}
          size="md"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            disabled ? '' : 'hover:scale-[101%]',
            'text-white bg-pink text-base font-medium tracking-wide'
          )}
        >
          {leftIcon}
          {text}
          {rightIcon}
        </Button>
      </div>
    );
  }
};

export default SecondaryButton;
