import { ebooksConfig } from '@/configs/ebooksConfig';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';

export async function GET(req: NextRequest, res: NextResponse) {
  const ebookId = req.nextUrl.href.split('/').slice(-1)[0];
  const email = req.nextUrl.href.split('/').slice(-2)[0];
  console.log('logged email:', email);
  console.log('logged ebookId:', ebookId);
  const filePath = ebooksConfig.find((ebook) => ebook.id === ebookId)?.file;
  try {
    if (filePath && typeof email === 'string') {
      const fullFilePath = 'https://paulatreningi.pl' + filePath;
      const existingPdfBytes = fs.readFileSync(fullFilePath);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();

      pages.forEach((page) => {
        const { width, height } = page.getSize();
        page.drawText(email, {
          x: 50,
          y: 50, // Adjust position as needed
          size: 12,
          color: rgb(0, 0, 0),
        });
      });

      const pdfBytes = await pdfDoc.save();
      const res = new NextResponse(pdfBytes, {
        status: 200,
        headers: new Headers({
          'content-disposition': `attachment; filename=${ebookId}-ebook.pdf`,
          'content-type': 'application/pdf',
        }),
      });
      return res;
    }
  } catch (e) {
    return new Response(`Could not send the confirmation email, reason: ${e}`, {
      status: 500,
    });
  }
}
