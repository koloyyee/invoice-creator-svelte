export interface IInvoice {
  invoiceId?: string;
  invoiceDate: string;
  invoiceDueDate: string;
  issuer: IIssuer;
  client: IClient;
  items: IItem[];
  note?: string;
  totalAmount: number;
  status: string;
}

export interface IIssuer {
  username: string;
  address: string;
  email: string;
  website: string;
  bankName: string;
  bankAccount: string;
  bankHolder: string;
}

export interface IClient {
  clientName: string;
  clientAddress: string;
}

export interface IItem {
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
  itemSubtotal: number;
}
