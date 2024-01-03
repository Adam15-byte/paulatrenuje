'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  text: string;
  href?: string;
  type?: 'button' | 'submit';
  form?: string;
  onClick?: () => void;
  additionalStyle?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  href,
  type,
  form,
  onClick,
  additionalStyle = 'w-full md:mx-auto',
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
}) => {
  if (href && disabled !== true) {
    return (
      <Link
        href={href}
        scroll={false}
        className={cn(additionalStyle, 'relative group')}
      >
        <div
          className={cn(
            additionalStyle,
            'text-white flex justify-center text-lg py-3 px-6 font-semibold rounded-lg bg-orange z-10 absolute group-hover:animate-pulse group-hover:scale-[102%] gap-2 tracking-wider'
          )}
        >
          {leftIcon}
          {text}
          {rightIcon}
        </div>
        <div
          className={cn(
            additionalStyle,
            'text-white flex justify-center text-lg py-3 px-6 font-semibold rounded-lg bg-pink group-hover:scale-[102%] gap-2 tracking-wider'
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
          size="lg"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            disabled || isLoading ? 'bg-gray' : 'bg-orange',
            disabled || isLoading
              ? ''
              : 'hover:animate-pulse hover:scale-[102%]',
            'text-white z-20 absolute text-lg font-semibold tracking-wider'
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
          size="lg"
          radius="sm"
          onClick={onClick}
          className={cn(
            additionalStyle,
            disabled || isLoading ? '' : 'hover:scale-[102%]',
            'text-white bg-pink text-lg font-semibold tracking-wider'
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

export default PrimaryButton;
