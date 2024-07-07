'use client';

import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import { getProviders, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Modal, useDisclosure } from '@nextui-org/react';
import ProviderButtons from '@/app/signin/ProviderButtons';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';

const Page = () => {
  const session = useSession();
  if (session && session.data) {
    redirect('/');
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ['providers'],
    queryFn: getProviders,
  });
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="lg:w-[700px] bg-white border-0">
        <h1 className="mx-auto text-lg">Wybierz metodę logowania</h1>
        {isLoading && (
          <div>
            <Skeleton width={'100%'} height={150} />
          </div>
        )}
        {!isLoading && data && <ProviderButtons providers={data} />}
      </DialogContent>
    </Dialog>
  );
};

export default Page;
