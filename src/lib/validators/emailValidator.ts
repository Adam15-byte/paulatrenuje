import z from 'zod';

export const EmailValidator = z.object({
  userEmail: z.string(),
  productIds: z.array(z.string()),
  moneyCharged: z.number(),
  firstName: z.string(),
});

export type IEmailValidator = z.infer<typeof EmailValidator>;
