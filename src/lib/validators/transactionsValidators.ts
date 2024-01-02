import { Currency } from '@ingameltd/node-przelewy24';
import { z } from 'zod';
export const TransactionValidator = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  userEmail: z.string(),
  productIds: z.array(z.string()),
  moneyCharged: z.number(),
  isPaid: z.boolean(),
  isEmailSent: z.boolean(),
  createdAt: z.string(),
});

export const TransactionIDValidator = z.object({
  id: z.string(),
});
export const TransactionsArrayValidator = z.array(TransactionValidator);

export type ITransactionValidator = z.infer<typeof TransactionValidator>;
export type ITransactionArrayValidator = z.infer<
  typeof TransactionsArrayValidator
>;
export type ITransactionIDValidator = z.infer<typeof TransactionIDValidator>;

export const P24OrderValidator = z.object({
  sessionId: z.string(),
  amount: z.number(),
  currency: z.string(),
  description: z.string(),
  email: z.string(),
  country: z.string(),
  language: z.string(),
  urlReturn: z.string(),
  urlStatus: z.string(),
  method: z.number(),
  timeLimit: z.number(),
  encoding: z.string(),
  regulationAccept: z.boolean(),
  waitForResult: z.boolean(),
});
