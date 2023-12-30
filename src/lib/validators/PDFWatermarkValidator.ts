import z from 'zod';

export const PDFWatermarkValidator = z.object({
  userEmail: z.string(),
  productId: z.string(),
});

export type IPdfWatermarkValidator = z.infer<typeof PDFWatermarkValidator>;
