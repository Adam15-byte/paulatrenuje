import { IPaymentMethodsReponse } from '@/lib/validators/paymentMethodsValidator';

export async function fetchPaymentMethods(url: string) {
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization:
          'Basic ' + btoa(150483 + ':' + '72db040f40245696baa45b44c5d84b3f'),
      },
    });
    const result = data.json();
    return result as Promise<IPaymentMethodsReponse>;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
