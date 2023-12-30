import { ebooksConfig } from '@/configs/ebooksConfig';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';

export async function GET(req: NextRequest, res: any) {
  // get the last element from path
  const ebookId = req.nextUrl.searchParams.get('ebookId');
  const email = req.nextUrl.searchParams.get('email');
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
      res.status(200);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=' + ebookId);
      res.send(pdfBytes);
    }
  } catch (e) {
    return new Response(`Could not send the confirmation email, reason: ${e}`, {
      status: 500,
    });
  }
}
