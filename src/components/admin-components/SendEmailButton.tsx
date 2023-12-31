import { Button } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';

interface SendEmailButtonProps {
  onEmailClick: () => Promise<void>;
}

const SendEmailButton: FC<SendEmailButtonProps> = ({ onEmailClick }) => {
  const { mutate, isPending } = useMutation({ mutationFn: onEmailClick });
  return (
    <Button
      size="sm"
      radius="sm"
      color={isPending ? 'secondary' : 'primary'}
      onClick={() => mutate()}
    >
      {isPending ? 'Wysyłanie' : 'Wyślij email'}
    </Button>
  );
};

export default SendEmailButton;
