'use client';

import { FC, ReactNode } from 'react';
import { ShoppingBagProvider } from './ShoppingBagContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: ReactNode;
}

export const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ShoppingBagProvider>{children}</ShoppingBagProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
