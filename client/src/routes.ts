import { wrap } from 'svelte-spa-router/wrap';
import SingleInvoice from './routes/Invoice/SingleInvoice.svelte';

export default { 
    '/auth': wrap({
        asyncComponent:()=> import('./routes/Auth/Auth.svelte')
    }),
    '/': wrap({
        asyncComponent: ()=> import('./routes/Invoice/Invoices.svelte')
    }),
    '/invoice/new': wrap({
        asyncComponent: ()=> import('./routes/Invoice/NewInvoice.svelte')
    }),
    // '/invoice/:invoiceId': wrap({
    //     asyncComponent: ()=> import('./routes/Invoice/SingleInvoice.svelte')
    // })
    '/invoice/:invoiceId': SingleInvoice,
}