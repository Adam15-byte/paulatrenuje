import { ebooksConfig } from '@/configs/ebooksConfig';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb } from 'pdf-lib';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { email, ebookId } = req.query;
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
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${ebookId}-ebook.pdf`,
      });
      res.end(Buffer.from(pdfBytes));
    }
  } catch (e) {
    return new Response(`Could not send the confirmation email, reason: ${e}`, {
      status: 500,
    });
  }
}
