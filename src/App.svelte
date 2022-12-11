<script lang="ts">
	import ClientInfo from "./components/Form/ClientInfo.svelte";
	import Dates from "./components/Form/Dates.svelte";
	import IssuerInfo from "./components/Form/IssuerInfo.svelte";
	import Note from "./components/Form/Note.svelte";
	import ClientInfoPreview from "./components/Preview/ClientInfo.svelte";
	import Footer from "./components/Preview/Footer.svelte";
	import NotePreview from "./components/Preview/Note.svelte";
	import TotalAmount from "./components/Preview/TotalAmount.svelte";
	import ItemInputs from "./components/Table/ItemInputs.svelte";
	import ItemTable from "./components/Table/ItemTable.svelte";
	import type {IClient} from "./interfaces/client.interface";
	import type {IInvoice} from "./interfaces/invoice.interface";
	import type {IIssuer} from "./interfaces/issuer.interface";
	import type {IItem} from "./interfaces/item.interface";


  // Issuer's info value

  // let issuer: IIssuer = {
  //   username :'',
  //   address :'',
  //   email :'',
  //   website :'',
  //   bankName : '',  
  //   bankAccount :'',
  //   bankHolder :'',
  // };

  // mock for dev
  let issuer: IIssuer = {
    username :'Chan Die Man',
    address :'Address is here',
    email :'email@that.com',
    website :'www.example.com',
    bankName : 'Bank of Bank',  
    bankAccount :'2203112992293',
    bankHolder :'CHAN DIE MAN',
  };

  // Client's info
  // let client:IClient ={
  //   clientName: '',
  //   clientAddress: '', 
  // }

  //mock for dev
  let client:IClient ={
    clientName: 'Lee Ka Shing',
    clientAddress: 'His Addressccc cccccccc ccccccccc ccccccccccc cccccccc', 
  }

  // let invoice = {
  //   invoiceNumber: '',
  //   invoiceDate: '',
  //   invoiceDueDate: '',
  // }
// Mock for dev
  let invoice: IInvoice = {
    invoiceNumber: '2203991184492',
    invoiceDate: new Date().toLocaleDateString(),
    invoiceDueDate: new Date().toLocaleDateString(), 
  }

  let items:IItem[] = [];

  let note: string ='';

  let totalAmount = 0;
  function setTotalAmount(event){
    totalAmount = event.detail.totalAmount
  }

  </script>

<main class="lg:grid grid-cols-2">
<section class="md:grid grdi-cols-3 p-5 m-5 border-2 rounded shadow-md">
<h1 class='text-center text-4xl font-extrabold mb-2'>Create your next invoice</h1>

  <div class='invoice-create-form md:grid grid-col-3'>
    <IssuerInfo bind:issuer={issuer}/> 

    <div class='md:grid grid-cols-2 gap-2 my-5 border-t-2 border-t-gray-600'>
      <ClientInfo bind:client={client}/>
      <Dates bind:invoice={invoice} />
    </div>
    
    <ItemInputs bind:items={items} on:setTotalAmount={setTotalAmount}/>
    <Note bind:note={note}/>
  </div>

</section>
<section class="invoice-preview rounded border-2 shadow-md p-5 m-5 grid grid-cols-1 grid-rows-6">
    <h1 class='text-center text-4xl font-extrabold '> Invoice </h1>
    
    <!-- Print Button -->
      <!-- Client's info -->
    <ClientInfoPreview bind:invoice={invoice} bind:client={client} />
    <!-- Item list -->

      <ItemTable items={items}/>

    <!-- Total Amount -->
    <TotalAmount bind:totalAmount={totalAmount} />

    <NotePreview bind:note={note}/>
    <!-- Footer: Issuer's info -->
    <Footer bind:issuer={issuer} />
</section>

</main>

<style>

</style>