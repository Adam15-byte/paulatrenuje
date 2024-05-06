import { ebooksConfig, ebooksConfigAll } from '@/configs/ebooksConfig';
import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';

export async function GET(req: NextRequest, res: NextResponse) {
  const ebookId = req.nextUrl.href.split('/').slice(-1)[0];
  const email = req.nextUrl.href.split('/').slice(-2)[0];
  const filePath = ebooksConfigAll.find((ebook) => ebook.id === ebookId)?.file;
  try {
    if (filePath && typeof email === 'string') {
      const fullFilePath = 'https://paulatrenuje.pl' + filePath;
      const response = await fetch(fullFilePath);
      if (!response.ok)
        throw new Error(`Failed to fetch the PDF: ${response.statusText}`);
      const existingPdfBytes = await response.arrayBuffer();

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();

      pages.forEach((page) => {
        page.drawText(email, {
          x: 30,
          y: 20,
          size: 8,
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
