import { db } from '@/lib/db';

export async function GET() {
  try {
    const result = await db.settings.findFirst({
      where: { id: 'admin_settings' },
    });
    const jsonResult = JSON.stringify(result?.isEmailSentToOwner);
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
