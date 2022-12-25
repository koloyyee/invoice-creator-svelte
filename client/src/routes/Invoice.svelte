<script lang="ts">

    import Print from "../components/Buttons/Print.svelte";
    import Save from "../components/Buttons/Save.svelte";
      
      import ClientInfo from "../components/Form/ClientInfo.svelte";
      import Dates from "../components/Form/Dates.svelte";
      import IssuerInfo from "../components/Form/IssuerInfo.svelte";
      import Note from "../components/Form/Note.svelte";
      import ClientInfoPreview from "../components/Preview/ClientInfo.svelte";
      import Footer from "../components/Preview/Footer.svelte";
      import NotePreview from "../components/Preview/Note.svelte";
      import TotalAmount from "../components/Preview/TotalAmount.svelte";
      import ItemInputs from "../components/Table/ItemInputs.svelte";
      import ItemTable from "../components/Table/ItemTable.svelte";
      import { invoice } from "../emptyState";
      import { additionalNote } from "../store";
  
  
  
    
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
        invoice.note= ''
        invoice.totalAmount= 0
      
    }
    </script>
  
  <section class="not-printable md:grid grdi-cols-3 p-5 m-5 border-2 rounded shadow-md w-50">
  <h1 class='text-center text-4xl font-extrabold mb-2'>Create your next invoice</h1>
  
    <div class='invoice-create-form lg:grid grid-col-3'>
      <IssuerInfo bind:issuer={issuer}/> 
  
      <div class='lg:grid grid-cols-2 gap-2 my-5 border-t-2 border-t-gray-600'>
        <ClientInfo bind:client={client}/>
        <Dates bind:invoiceId={invoiceId} bind:invoiceDate={invoiceDate} bind:invoiceDueDate={invoiceDueDate}/>
      </div>
      
      <ItemInputs bind:items={items} on:setTotalAmount={setTotalAmount}/>
      
      <Note bind:note={note} />
    </div>
  
  </section>
  <section class="invoice-preview rounded border-2 shadow-md p-5 m-5 grid grid-cols-1 grid-rows-6 ">
    <div class='not-printable' >
      <Print {printInvoice}/>
      <Save {saveInvoice}/>
    </div>
      
      <h1 class='text-center text-4xl font-extrabold '> Invoice </h1>
      
      <!-- Print Button -->
        <!-- Client's info -->
      <ClientInfoPreview bind:invoiceId={invoiceId} bind:invoiceDate={invoiceDate} bind:invoiceDueDate={invoiceDueDate} bind:client={client} />
      <!-- Item list -->
      
        <ItemTable bind:items={items}/>
  
      <!-- Total Amount -->
      <TotalAmount bind:totalAmount={totalAmount} />
  
      <NotePreview bind:note={note} />
      <!-- Footer: Issuer's info -->
      <Footer bind:issuer={issuer} />
  </section>
  
  