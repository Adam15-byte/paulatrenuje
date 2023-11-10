import { FC, ReactNode } from 'react';
import { ShoppingBagProvider } from './ShoppingBagContext';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ShoppingBagProvider>{children}</ShoppingBagProvider>;
};

export default Providers;
