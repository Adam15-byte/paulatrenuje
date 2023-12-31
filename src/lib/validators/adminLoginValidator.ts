import { z } from 'zod';
export const AdminLoginValidator = z.object({
  login: z.string(),
  password: z.string(),
});

export type IAdminLoginValidator = z.infer<typeof AdminLoginValidator>;
