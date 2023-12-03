import { FC } from 'react';
import { transactions } from '../api/actions';
import { EbookConfigType, ebooksConfig } from '@/configs/ebooksConfig';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import { cn } from '@/lib/utils';

const page: FC = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {!transactions.length ? <p>Brak zamówień do wyświetlenia</p> : null}
      {transactions.map((transaction) => {
        const fullProductsData = transaction.productIds.map((productId) => {
          return ebooksConfig.find((ebook) => ebook.id === productId);
        });
        return (
          <div
            key={transaction.id}
            className={cn(
              transaction.isPaid
                ? 'bg-emerald-200 border-green'
                : 'border-red-200	border-red',
              'p-8 flex gap-8'
            )}
          >
            <div className="flex gap-4">
              {fullProductsData.map((item, index) => (
                <Image
                  key={index}
                  src={`${item?.picture}`}
                  alt={`${item?.title} image`}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Kupujący: {transaction.firstName} {transaction.lastName}
              </p>
              <p>Email: {transaction.userEmail}</p>
              <p>Wartość koszyka: {transaction.moneyCharged}</p>
              <p className={transaction.isPaid ? 'text-green' : 'text-red'}>
                Opłacono: {transaction.isPaid}
              </p>
              <p>Data transakcji: {transaction.date.toISOString()}</p>
            </div>
            <div className="ml-auto">
              <PrimaryButton
                text="wyślij ponownie"
                onClick={() => {
                  console.log('click');
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
