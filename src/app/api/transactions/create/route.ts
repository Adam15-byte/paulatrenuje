import { db } from '@/lib/db';
import { TransactionValidator } from '@/lib/validators/transactionsValidators';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = TransactionValidator.parse(body);
    console.log('validatedData', validatedData);
    await db.transaction.create({
      data: {
        ...validatedData,
      },
    });
    console.log('created in database');
    return new Response('Ok');
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response('Could not createa a new transaction', { status: 500 });
  }
}
