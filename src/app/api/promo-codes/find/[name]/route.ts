import { db } from '@/lib/db';
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.href.split('/').slice(-1)[0];
    const foundPromoCode = await db.promoCode.findFirst({
      where: { name },
    });
    if (!foundPromoCode) {
      return new Response('Code not found', { status: 404 });
    }
    return new Response(JSON.stringify(foundPromoCode));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
