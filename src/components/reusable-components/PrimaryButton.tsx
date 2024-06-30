'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { cn } from '@/lib/utils';
import { capitalizeFirstLetter } from '@/utils/stringUtils';

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
        scroll={true}
        className={cn(additionalStyle, 'relative group')}
      >
        <div
          className={cn(
            additionalStyle,
            'text-white flex justify-center text-base py-3 px-6 font-medium rounded-md bg-orange z-10 absolute group-hover:animate-pulse group-hover:scale-[101%] gap-2 tracking-wide'
          )}
        >
          {leftIcon}
          {capitalizeFirstLetter(text)}
          {rightIcon}
        </div>
        <div
          className={cn(
            additionalStyle,
            'text-white flex justify-center text-base py-3 px-6 font-medium rounded-md bg-pink group-hover:scale-[101%] gap-2 tracking-wide'
          )}
        >
          {leftIcon}
          {capitalizeFirstLetter(text)}
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
              : 'hover:animate-pulse hover:scale-[101%]',
            'text-white z-20 absolute text-base font-medium tracking-wide'
          )}
        >
          {leftIcon}
          {capitalizeFirstLetter(text)}
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
            disabled || isLoading ? '' : 'hover:scale-[101%]',
            'text-white bg-pink text-base font-medium tracking-wide'
          )}
        >
          {leftIcon}
          {capitalizeFirstLetter(text)}
          {rightIcon}
        </Button>
      </div>
    );
  }
};

export default PrimaryButton;
