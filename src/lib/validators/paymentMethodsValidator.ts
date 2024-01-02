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

export interface IPaymentMethodsReponse {
  agreements: any[];
  data: IPaymentMethod[];
  responseCode: number;
}
