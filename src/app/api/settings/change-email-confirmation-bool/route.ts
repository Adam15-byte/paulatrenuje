import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function PUT(req: NextRequest, res: Response) {
  try {
    const currentState = await db.settings.findFirst({
      where: {
        id: 'admin_settings',
      },
    });
    const result = await db.settings.update({
      where: {
        id: 'admin_settings',
      },
      data: {
        isEmailSentToOwner: !currentState?.isEmailSentToOwner,
      },
    });
    const jsonResult = JSON.stringify(result);
    return new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Could not get email sending settings' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}
