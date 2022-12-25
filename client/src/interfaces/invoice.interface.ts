import type { IClient } from "./client.interface";
import type { IIssuer } from "./issuer.interface";
import type { IItem } from "./item.interface";

export interface IInvoice {
    invoiceId?: string;
    invoiceDate: string;
    invoiceDueDate: string;
    issuer: IIssuer;
    client: IClient;
    items: IItem[];
    note?: string;
    totalAmount: number;
}