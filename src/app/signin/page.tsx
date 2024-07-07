import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ProviderButtons from './ProviderButtons';

const Page = async () => {
  const session = await getServerSession(authConfig);
  if (session && session) {
    redirect('/');
  }
  const providers = await getProviders();
  return <ProviderButtons providers={providers} />;
};

export default Page;
