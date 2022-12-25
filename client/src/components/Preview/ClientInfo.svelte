<script lang='ts'>
	import type { IClient } from "../../interfaces/client.interface";
	


export let client: IClient ={
    clientName: '',
    clientAddress: '',
}


export let invoiceId = "";
	export let invoiceDate = new Date().toLocaleDateString();
	export let 	invoiceDueDate = new Date().toLocaleDateString();

</script>
<article class='info-section grid grid-cols-2'>
    <div class='client-info'>
      <h3 class='font-bold text-2xl'> {client.clientName}</h3>
      <p class=' break-all w-2/3'>{client.clientAddress}</p>

    </div>
    <!-- Invoice info -->
    <div class='invoice-info justify-self-end'>
        <ul>
          <li>Invoice number: {invoiceId}</li>
          <li class='bg-gray-400'>Issue date: {invoiceDate}</li>
          <li>Due date: {invoiceDueDate}</li>
        </ul>
    </div>
  </article>