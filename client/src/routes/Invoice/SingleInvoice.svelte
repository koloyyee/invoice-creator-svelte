
<script lang='ts'>
	import { onMount } from "svelte";
	import type { IInvoice } from "../../interfaces/invoice.interface";
	import PreviewInvoice from "./PreviewInvoice.svelte";

          
        

    let invoice: IInvoice;

    export let params = { invoiceId: ''};

    onMount(async()=>{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices/${params.invoiceId}`);
        
        invoice = await res.json();

    })



    // const printInvoice=()=>{
    //   window.print()
    // }
  
    // const saveInvoice= async ()=> {
    //   if(
    //     issuer.username === '' ||  issuer.email === '' || 
    //     issuer.bankName === '' || issuer.bankHolder === '' || 
    //     issuer.bankAccount === '' || issuer.address === '' ||
    //     client.clientName === '' || client.clientAddress === '' ||
    //     items.length === 0 || totalAmount === 0
    //     ) return;
  
    // //   additionalNote.set(note)
  
    //   try{
    //     const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices`, {
    //     method: "POST",
    //     headers: {'Content-type': 'application/json'},
    //     body: JSON.stringify(invoice)
    //     })
    //     console.log(res.status)
    //   } catch(error) {
    //     console.log(error.message)
    //   } 
  
      
    //     invoiceId= new Date().valueOf().toString()
    //     invoiceDate = new Date().toLocaleDateString()
    //     invoiceDueDate = new Date().toLocaleDateString()
    //     issuer.username = ''
    //     issuer.address =''
    //     issuer. email =''
    //     issuer.website =''
    //     issuer.bankName = '' 
    //     issuer.bankAccount =''
    //     issuer.bankHolder =''
    //     client.clientName= ''
    //     client.clientAddress= ''
    //     items = []
    //     note= ''
    //     totalAmount= 0
      
    // }


</script>

<section class="invoice-preview rounded border-2 shadow-md p-5 m-5 
flex flex-col
gap-5 h-screen
">
{#if invoice}
    <PreviewInvoice invoice={invoice} />
{/if}

</section>