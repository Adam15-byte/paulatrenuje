'use client';

import CustomEbookGenerator from '@/components/admin-components/CustomEbookGenerator';
import PromoCodesTable from '@/components/admin-components/PromoCodesTable';
import TransactionsTable from '@/components/admin-components/TransactionsTable';
import DefaultButton from '@/components/reusable-components/DefaultButton';
import { IAdminLoginValidator } from '@/lib/validators/adminLoginValidator';
import { Card, CardBody, Input, Tab, Tabs } from '@nextui-org/react';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Page: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const tabs = [
    {
      id: 'transactions',
      label: 'Zamowienia',
      content: <TransactionsTable />,
    },
    {
      id: 'promoCodes',
      label: 'Kody Promocyjne',
      content: <PromoCodesTable />,
    },
    {
      id: 'generateEbook',
      label: 'Wygeneruj ebook z watermarkiem',
      content: <CustomEbookGenerator />,
    },
    // {
    //   id: 'settings',
    //   label: 'Ustawienia',
    //   content: <Settings />,
    // },
  ];

  const { register, handleSubmit } = useForm<IAdminLoginValidator>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IAdminLoginValidator> = (formData) => {
    if (
      formData.login === process.env.NEXT_PUBLIC_ADMIN_LOGIN &&
      formData.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      setIsAuthenticated(true);
    } else {
      toast.error('Niepoprawne dane logowania');
    }
  };

  return (
    <div className="flex w-full flex-col p-4">
      {!isAuthenticated ? (
        <Card className="w-[500px] mx-auto">
          <CardBody>
            <form
              id="admin-login-form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 "
            >
              <Input
                {...register('login')}
                label="Login"
                placeholder="Login"
                labelPlacement={'outside'}
                variant="bordered"
                isRequired
              />
              <Input
                type="password"
                {...register('password')}
                label="Hasło"
                placeholder="Hasło"
                labelPlacement={'outside'}
                variant="bordered"
                isRequired
              />
              <DefaultButton
                variant={'default'}
                type="submit"
                className="w-full mt-auto"
                form="admin-login-form"
                onClick={() => {
                  handleSubmit(onSubmit);
                }}
              >
                Zaloguj
              </DefaultButton>
            </form>
          </CardBody>
        </Card>
      ) : (
        <Tabs aria-label="Dynamic tabs" items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card>
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      )}
    </div>
  );
};

export default Page;
