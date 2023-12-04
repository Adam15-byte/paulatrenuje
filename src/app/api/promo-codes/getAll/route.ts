import { db } from '@/lib/db';

export async function GET() {
  try {
    const result = await db.promoCode.findMany();
    const jsonResult = JSON.stringify(result);
    return new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Could not get promo codes' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}
