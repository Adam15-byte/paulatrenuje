import { FC } from 'react';
import * as React from 'react';
import { Button, ButtonProps } from '../ui/button';
import Link from 'next/link';

interface DefaultButtonProps extends ButtonProps {
  href?: string;
}

const DefaultButton: FC<DefaultButtonProps> = (props) => {
  if (props.href) {
    return (
      <Link href={props.href}>
        <Button {...props}>{props.children}</Button>
      </Link>
    );
  }
  return <Button {...props}>{props.children}</Button>;
};

export default DefaultButton;
