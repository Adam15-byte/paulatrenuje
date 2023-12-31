import { db } from '@/lib/db';
import { IEmailValidator } from '@/lib/validators/emailValidator';
import {
  NotificationRequest,
  P24,
  Verification,
} from '@ingameltd/node-przelewy24';
import axios from 'axios';
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
  // IF TRANSACTION IS CONFIRMED
  if (verifyResponse && notificationResponse) {
    // get transaction data
    const transactionData = await db.transaction.findUnique({
      where: { id: verify.sessionId },
    });
    if (transactionData) {
      // send email
      const dataFormatted: IEmailValidator = {
        firstName: transactionData?.firstName,
        userEmail: transactionData?.userEmail,
        productIds: transactionData?.productIds,
      };
      await axios.post('/api/email-send/user-confirmation', dataFormatted);
      // change transaction status
      await axios.post('/api/transactions/change/email-sent', {
        id: transactionData.id,
      });
      await axios.post('/api/transactions/change/paid', {
        id: transactionData.id,
      });
    }
  }
  return new Response('Test Api Route', {
    status: 200,
  });
}
