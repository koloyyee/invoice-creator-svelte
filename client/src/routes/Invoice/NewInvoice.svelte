<script lang="ts">
	import BlueBtn from "../../lib/components/Buttons/BlueBtn.svelte";
	import GreenBtn from "../../lib/components/Buttons/GreenBtn.svelte";
      
      import ClientInfo from "../../lib/components/Invoice/ClientInfo.svelte";
      import Dates from "../../lib/components/Invoice/Dates.svelte";
      import IssuerInfo from "../../lib/components/Invoice/IssuerInfo.svelte";
      import Note from "../../lib/components/Invoice/Note.svelte";
      import ClientInfoPreview from "../../lib/components/Preview/ClientInfo.svelte";
      import Issuer from "../../lib/components/Preview/Issuer.svelte";
      import NotePreview from "../../lib/components/Preview/Note.svelte";
      import TotalAmount from "../../lib/components/Preview/TotalAmount.svelte";
      import ItemInputs from "../../lib/components/Table/ItemInputs.svelte";
      import ItemTable from "../../lib/components/Table/ItemTable.svelte";
      import { additionalNote } from "../../lib/stores/invoice/additionalNote";
      import { invoice } from "../../lib/util/emptyState";
    
    // Issuer's info value
    let {
      invoiceId,
      invoiceDate,
      invoiceDueDate,
      issuer,
      client,
      items,
      note,
      totalAmount,
      status
    } = invoice;
  
    additionalNote.subscribe(value => {
      invoice.note = value;
    });


    function setTotalAmount(event){
      totalAmount = event.detail.totalAmount
      invoice.items = items;
      // invoice.note = note;
      invoice.totalAmount = Number(totalAmount.toFixed(2));
    }
  
    const printInvoice=()=>{
      window.print()
    }
  
    const saveInvoice= async ()=> {
      if(
        issuer.username === '' ||  issuer.email === '' || 
        issuer.bankName === '' || issuer.bankHolder === '' || 
        issuer.bankAccount === '' || issuer.address === '' ||
        client.clientName === '' || client.clientAddress === '' ||
        items.length === 0 || totalAmount === 0
        ) return;
  
      additionalNote.set(note)
  
      try{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/invoices`, {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(invoice)
        })
        console.log(res.status)
      } catch(error) {
        console.log(error.message)
      } 
  
      
        invoiceId= new Date().valueOf().toString()
        invoiceDate = new Date().toLocaleDateString()
        invoiceDueDate = new Date().toLocaleDateString()
        issuer.username = ''
        issuer.address =''
        issuer. email =''
        issuer.website =''
        issuer.bankName = '' 
        issuer.bankAccount =''
        issuer.bankHolder =''
        client.clientName= ''
        client.clientAddress= ''
        items = []
        note= ''
        totalAmount= 0
      
    }
    </script>
  
  <section class="not-printable md:grid grdi-cols-3 p-5 m-5 border-2 rounded shadow-md w-50">
  <h1 class='text-center text-4xl font-extrabold mb-2'>Create your next invoice</h1>
  
  <div class='invoice-create-form lg:grid grid-col-3'>
      <section class="issuer-section border-b-2 border-b-gray-600 pb-5">
          <h3 class='font-extrabold'>Issue Company Info.</h3>

          <IssuerInfo bind:issuer={issuer}/> 
      </section>
      <section class="issuer-section border-b-2 border-b-gray-600  pb-5">  
        <h3 class='font-extrabold'>Client Company & Invoice Info.</h3>
        <div class='lg:grid grid-cols-2 gap-2  '>
          <ClientInfo bind:client={client}/>
          <Dates bind:invoiceId={invoiceId} bind:invoiceDate={invoiceDate} bind:invoiceDueDate={invoiceDueDate} bind:status={status} />
        </div>
    </section>
      <ItemInputs bind:items={items} on:setTotalAmount={setTotalAmount}/>
      
      <Note bind:note={note} />
    </div>
  
  </section>
  <section class="invoice-preview rounded border-2 shadow-md p-5 m-5 
  flex flex-col
  gap-5
  ">
    <div class='not-printable' >
      <GreenBtn func={printInvoice} text={'Print'}/>
      <BlueBtn func={saveInvoice} text={'Save'}/>
    </div>
  <section class="flex justify-between">
      <Issuer bind:issuer={issuer} />

      <h1 class='text-right text-4xl font-extrabold '> Invoice </h1>
    </section>
      
      <ClientInfoPreview 
      bind:invoiceId={invoiceId} 
      bind:invoiceDate={invoiceDate} 
      bind:invoiceDueDate={invoiceDueDate} 
      bind:client={client}
      bind:status={status}
       />
      
        <ItemTable bind:items={items}/>

      <div class='mt-auto'  >
      <TotalAmount bind:totalAmount={totalAmount} />
  
      <NotePreview bind:note={note} />
    </div>
  </section>
  
  