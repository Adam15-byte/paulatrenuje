'use client';

import PromoCodesTable from '@/components/admin-components/PromoCodesTable';
import TransactionsTable from '@/components/admin-components/TransactionsTable';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

const page = () => {
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
  ];

  return (
    <div className="flex w-full flex-col p-4">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default page;
