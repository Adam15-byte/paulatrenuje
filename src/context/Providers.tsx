'use client';

import { FC, ReactNode } from 'react';
import { ShoppingBagProvider } from './ShoppingBagContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingBagProvider>{children}</ShoppingBagProvider>
    </QueryClientProvider>
  );
};

export default Providers;
