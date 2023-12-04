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
export const TransactionsArrayValidator = z.array(TransactionValidator);

export type ITransactionValidator = z.infer<typeof TransactionValidator>;
export type ITransactionArrayValidator = z.infer<
  typeof TransactionsArrayValidator
>;
