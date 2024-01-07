import { db } from '@/lib/db';
import { PromoDeleteValidator } from '@/lib/validators/promoCodeValidator';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = PromoDeleteValidator.parse(body);
    await db.promoCode.delete({
      where: {
        name: name,
      },
    });
    return new Response('Ok');
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response('Could not delete a promo code', { status: 500 });
  }
}
