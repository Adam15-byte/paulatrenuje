import { z } from 'zod';
export const PromoCodeValidator = z.object({
  name: z.string(),
  value: z.number(),
  promoType: z.string(),
  usedNumber: z.number(),
});
export const PromoArrayValidator = z.array(PromoCodeValidator);

export const PromoDeleteValidator = z.object({
  name: z.string(),
});

export type IPromoCodeValidator = z.infer<typeof PromoCodeValidator>;
export type IPromoArrayValidator = z.infer<typeof PromoArrayValidator>;
