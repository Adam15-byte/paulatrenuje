import { db } from '@/lib/db';
import { TransactionIDValidator } from '@/lib/validators/transactionsValidators';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = TransactionIDValidator.parse(body);
    await db.transaction.update({
      where: {
        id: validatedData.id,
      },
      data: {
        isEmailSent: true,
      },
    });
    return new Response('Ok');
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response('Could not find or edit transaction', { status: 500 });
  }
}
