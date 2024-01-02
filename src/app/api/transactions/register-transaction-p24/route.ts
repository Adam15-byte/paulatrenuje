import { P24OrderValidator } from '@/lib/validators/transactionsValidators';
import { Order, P24 } from '@ingameltd/node-przelewy24';
import { NextRequest } from 'next/server';
import z from 'zod';

export async function POST(req: NextRequest) {
  try {
    const p24 = new P24(
      Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID),
      Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID),
      String(process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY),
      String(process.env.NEXT_PUBLIC_PRZELEWY24_CRC),
      {
        sandbox: false,
      }
    );
    const body = await req.json();
    const validatedData: any = P24OrderValidator.parse(body);
    const result = await p24.createTransaction(validatedData);
    const jsonResult = JSON.stringify(result);
    return new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response('Could not create a promo code', { status: 500 });
  }
}
