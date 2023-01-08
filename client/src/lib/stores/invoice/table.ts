import { writable } from "svelte/store";
import type { IInvoice } from "../../interfaces/invoice.interface";


export const invoices = writable<IInvoice[]>([]);
