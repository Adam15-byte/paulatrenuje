import { db } from '@/lib/db';
import { PromoCodeValidator } from '@/lib/validators/promoCodeValidator';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = PromoCodeValidator.parse(body);
    await db.promoCode.create({
      data: {
        ...validatedData,
      },
    });
    return new Response('Ok');
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response('Could not create a promo code', { status: 500 });
  }
}
