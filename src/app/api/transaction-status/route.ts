import {
  NotificationRequest,
  P24,
  Verification,
} from '@ingameltd/node-przelewy24';
import { NextRequest } from 'next/server';

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
  const notificationResponse = await p24.verifyNotification(verify);
  const verifyRequest: Verification = {
    sessionId: verify.sessionId,
    orderId: verify.orderId,
    currency: verify.currency,
    amount: verify.amount,
  };
  const verifyResponse = await p24.verifyTransaction(verifyRequest);
  if (verifyResponse && notificationResponse) {
    console.log('log');
  }
  return new Response('Test Api Route', {
    status: 200,
  });
}
