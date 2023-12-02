interface ITransaction {
  id: string;
  userEmail: string;
  isPaid: boolean;
  requestBody?: any;
}

export const transactions: ITransaction[] = [];
