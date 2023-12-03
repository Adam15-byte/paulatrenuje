'use server';
import crypto from 'crypto';

interface ITransaction {
  id: string;
  firstName: string;
  lastName: string;
  userEmail: string;
  productIds: string[];
  moneyCharged: number;
  isPaid: boolean;
  date: Date;
}

export const transactions: ITransaction[] = [];

export const generateTransactionId = async ({
  userEmail,
  firstName,
  lastName,
  productIds,
  moneyCharged,
}: {
  userEmail: string;
  firstName: string;
  lastName: string;
  productIds: string[];
  moneyCharged: number;
}) => {
  const uuid = crypto.randomUUID();
  transactions.push({
    id: uuid,
    userEmail,
    firstName,
    lastName,
    productIds,
    moneyCharged,
    isPaid: false,
    date: new Date(),
  });
  return uuid;
};

let someRandomInt = 0;
export const addToRandomInt = async () => {
  someRandomInt = someRandomInt + 1;
};

export const checkAsyncItems = async () => {
  console.log('transactions:', transactions);
};
