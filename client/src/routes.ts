import { wrap } from 'svelte-spa-router/wrap';

export default { 
    '/auth': wrap({
        asyncComponent:()=> import('./routes/Auth/Auth.svelte')
    }),
    '/invoice/': wrap({
        asyncComponent: ()=> import('./routes/Invoice/Invoices.svelte')
    }),
    '/invoice/new': wrap({
        asyncComponent: ()=> import('./routes/Invoice/NewInvoice.svelte')
    }),
    '/invoice/:invoiceId': wrap({
        asyncComponent: ()=> import('./routes/Invoice/SingleInvoice.svelte')
    })
}