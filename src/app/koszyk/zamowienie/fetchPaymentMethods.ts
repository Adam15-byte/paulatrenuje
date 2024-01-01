import axios from 'axios';
let base64 = require('base-64');

export interface IPaymentMethod {
  availabilityHours: {
    mondayToFriday: string;
    saturday: string;
    sunday: string;
  };
  group: string;
  id: number;
  imgUrl: string;
  mobile: boolean;
  mobileImgUrl: string;
  name: string;
  status: boolean;
  subgroup: string;
}

interface IPaymentMethodsReponse {
  agreements: any[];
  data: IPaymentMethod[];
  responseCode: number;
}

export async function fetchPaymentMethods(url: string) {
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization:
          'Basic ' + btoa('150483' + ':' + '8c8d1d6e7ec8d81730caa78e4140e929'),
        // btoa(
        //   process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID?.toString() +
        //     ':' +
        //     process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY?.toString()
        // ),
      },
    });
    const result = data.json();
    return result as Promise<IPaymentMethodsReponse>;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
