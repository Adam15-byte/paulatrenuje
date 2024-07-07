'use client';

import { Button } from '@nextui-org/button';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import Image from 'next/image';
import { FC } from 'react';

interface ProviderButtonsProps {
  providers: Record<string, ClientSafeProvider> | null;
}

const ProviderButtons: FC<ProviderButtonsProps> = ({ providers }) => {
  if (providers) {
    return (
      <div className="w-full flex flex-col gap-4 items-center">
        {Object.values(providers).map((provider) => {
          return (
            <Button
              onClick={() => signIn(provider.id)}
              className="text-lg min-w-[300px] flex items-center gap-4 py-6 px-4 bg-white border border-gray shadow-md"
              key={provider.name}
            >
              <Image
                src={`/training_app/${provider.name}_logo.svg`}
                width={30}
                height={30}
                alt={`${provider.name} logo`}
              />
              Zaloguj się z {provider.name}
            </Button>
          );
        })}
      </div>
    );
  }
};

export default ProviderButtons;
