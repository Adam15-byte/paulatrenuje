import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import {
  NotificationRequest,
  P24,
  Verification,
} from '@ingameltd/node-przelewy24';
import { transactions } from '../serverData';

interface P24Res {
  merchantId: string;
}

export async function POST(req: NextRequest, res: Response) {
  const p24 = new P24(
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID),
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID),
    process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY ?? '',
    process.env.NEXT_PUBLIC_PRZELEWY24_CRC ?? '',
    {
      sandbox: true,
    }
  );
  const verify: NotificationRequest = await req.json();
  console.log('verify:', verify);
  const notificationRes = p24.verifyNotification(verify);
  console.log('notificationRes:', notificationRes);
  const verifyRequest: Verification = {
    sessionId: verify.sessionId,
    orderId: verify.orderId,
    currency: verify.currency,
    amount: verify.amount,
  };
  const verifyRes = await p24.verifyTransaction(verifyRequest);
  console.log('verifyRes:', verifyRes);
  return new Response('Test Api Route', {
    status: 200,
  });
}
