import OwnerConfirmation from '@/components/email-templates/OwnerConfirmationEmail';
import { db } from '@/lib/db';
import { EmailValidator } from '@/lib/validators/emailValidator';
import axios from 'axios';
import { Resend } from 'resend';
import { z } from 'zod';

export async function POST(req: Request) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);
  try {
    // check If email is sent to owner from admin settings
    const result = await db.settings.findFirst({
      where: { id: 'admin_settings' },
    });
    const isEmailSentToOwner = result?.isEmailSentToOwner;
    if (isEmailSentToOwner) {
      const body = await req.json();
      const { userEmail, productIds, firstName } = EmailValidator.parse(body);
      const data = await resend.emails.send({
        from: 'Paula <Paula@paulatreningi.pl>',
        to: 'PaulaDziubdziela.fitness@gmail.com',
        subject: 'Zakup ebooka',
        text: 'Zakup ebooka',
        react: OwnerConfirmation({ userEmail, productIds, firstName }),
      });
      return Response.json(data);
    }
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response(`Could not send the confirmation email, reason: ${e}`, {
      status: 500,
    });
  }
}
