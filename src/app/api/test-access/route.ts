import axios from 'axios';

export async function GET() {
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
    const jsonResult = JSON.stringify(result);
    return new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
