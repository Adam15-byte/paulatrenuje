import ReceiptEmail from '@/email-templates/ReceiptEmail';
import { EmailValidator } from '@/lib/validators/emailValidator';
import { Resend } from 'resend';
import { z } from 'zod';

export async function POST(req: Request) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);
  try {
    const body = await req.json();
    const { userEmail, productIds, firstName } = EmailValidator.parse(body);
    const data = await resend.emails.send({
      from: 'Paula <Paula@paulatreningi.pl>',
      to: userEmail,
      subject: 'Potwierdzenie zakupu',
      text: 'Potwierdzenie zakupu',
      react: ReceiptEmail({ userEmail, productIds, firstName }),
    });
    return Response.json(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      return new Response(e.message, { status: 422 });
    }
    return new Response(`Could not send the confirmation email, reason: ${e}`, {
      status: 500,
    });
  }
}
