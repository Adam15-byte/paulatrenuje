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
        // to user
        await axios.post(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/email-send/user-confirmation`,
          dataFormatted
        );
        // // to owner
        await axios.post(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/email-send/owner-confirmation`,
          dataFormatted
        );
        // change transaction status
        await axios.post(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/transactions/change/email-sent`,
          {
            id: transactionData.id,
          }
        );
        await axios.post(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/transactions/change/paid`,
          {
            id: transactionData.id,
          }
        );
      }
    }
    return new Response('Transaction confirmed', {
      status: 200,
    });
  } catch (e) {
    return new Response('Could not verify transaction', { status: 500 });
  }
}
