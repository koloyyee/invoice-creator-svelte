import { wrap } from 'svelte-spa-router/wrap';

export default { 
    '/invoice/new': wrap({
        asyncComponent: ()=> import('./routes/Invoice.svelte')
    })
}