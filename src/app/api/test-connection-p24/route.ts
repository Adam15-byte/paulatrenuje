import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const username = Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID);
    const password = String(process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY);
    const encodedCredentials = btoa(`${username}:${password}`);
    const result = await axios.get(
      'https://secure.przelewy24.pl/api/v1/testAccess',
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );
    const jsonResult = JSON.stringify(result.data);
    return new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
