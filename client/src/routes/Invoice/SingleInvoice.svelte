<script lang='ts'>
	import { onMount } from "svelte";
	import type { IInvoice } from "../../interfaces/invoice.interface";

    let invoice: IInvoice;

    export let params = { invoiceId: ''};

    onMount(async()=>{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices/${params.invoiceId}`);
        
        invoice = await res.json();

    })

</script>

<section class='h-screen'>
<pre>
    {JSON.stringify(invoice, null, 4)}
</pre>


</section>