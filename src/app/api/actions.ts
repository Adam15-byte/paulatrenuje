'use server';
import crypto from 'crypto';
import { transactions } from './serverData';

export const generateTransactionId = async (userEmail: string) => {
  const uuid = crypto.randomUUID();
  transactions.push({ id: uuid, userEmail: userEmail, isPaid: false });
  return uuid;
};

let someRandomInt = 0;
export const addToRandomInt = async () => {
  someRandomInt = someRandomInt + 1;
};

export const checkAsyncItems = async () => {
  console.log('transactions:', transactions);
};
