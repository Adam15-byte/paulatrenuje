import { db } from '@/lib/db';
import { TransactionValidator } from '@/lib/validators/transactionsValidators';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = TransactionValidator.parse(body);
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    console.log(
      'NEXT_PUBLIC_DATABASE_URL:',
      process.env.NEXT_PUBLIC_DATABASE_URL
    );
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
