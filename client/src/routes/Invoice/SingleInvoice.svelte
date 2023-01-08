
<script lang='ts'>
	import { onMount } from "svelte";
	import BlueBtn from "../../lib/components/Buttons/BlueBtn.svelte";
	import GreenBtn from "../../lib/components/Buttons/GreenBtn.svelte";
	import RedBtn from "../../lib/components/Buttons/RedBtn.svelte";
	import type { IInvoice } from "../../lib/interfaces/invoice.interface";
	import { additionalNote } from "../../lib/stores/invoice";

	import Form from "./Form.svelte";
	import PreviewInvoice from "./PreviewInvoice.svelte";

    let invoice: IInvoice;
    $: isEditing = false;
    export let params = { invoiceId: ''};

    onMount(async()=>{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices/${params.invoiceId}`);
        
        invoice = await res.json();

    })



    const printInvoice=()=>{
      window.print()
    }

    const editInvoice = () =>{
      isEditing = !isEditing;
    }
  
    const updateInvoice= async ()=> {
      if(
        invoice.issuer.username === '' ||  invoice.issuer.email === '' || 
        invoice.issuer.bankName === '' || invoice.issuer.bankHolder === '' || 
        invoice.issuer.bankAccount === '' || invoice.issuer.address === '' ||
        invoice.client.clientName === '' || invoice.client.clientAddress === '' ||
        invoice.items.length === 0 || invoice.totalAmount === 0
        ) return;
  
      additionalNote.set(invoice.note)
      
      try{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices/${invoice.invoiceId}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(invoice)
        })
        console.log(res.status)
      } catch(error) {
        console.log(error.message)
      } 
      isEditing = false;
    }


</script>
{#if invoice}
  {#if isEditing}
    <Form bind:invoice={invoice}/>
  {/if}

    <section class="invoice-preview rounded border-2 shadow-md p-5 m-5 
    flex flex-col 
    ">
      <div class='not-printable flex justify-center' >
          <GreenBtn func={printInvoice} text={'Print'}/>
          {#if isEditing}
            <BlueBtn func={updateInvoice} text={'Update'}/>
            <RedBtn func={editInvoice} text={'Cancel'}/>
            {:else }
            <BlueBtn func={editInvoice} text={'Edit'}/>
            {/if}
        </div>
        <PreviewInvoice invoice={invoice} />
        
    </section>
  
{/if}