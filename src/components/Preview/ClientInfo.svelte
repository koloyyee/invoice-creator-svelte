<script lang='ts'>
	import type {IClient} from "../../interfaces/client.interface";
	import type {IInvoice} from "../../interfaces/invoice.interface";



export let client: IClient ={
    clientName: '',
    clientAddress: '',
}

export let invoice: IInvoice = {
		invoiceNumber: "",
		invoiceDate: new Date().toLocaleDateString(),
		invoiceDueDate: new Date().toLocaleDateString(),
	};

</script>
<article class='info-section grid grid-cols-2'>
    <div class='client-info'>
      <h3 class='font-bold text-2xl'> {client.clientName}</h3>
      <p class=' break-all w-2/3'>{client.clientAddress}</p>

    </div>
    <!-- Invoice info -->
    <div class='invoice-info justify-self-end'>
        <ul>
          <li>Invoice number: {invoice.invoiceNumber}</li>
          <li class='bg-gray-400'>Issue date: {invoice.invoiceDate}</li>
          <li>Due date: {invoice.invoiceDueDate}</li>
        </ul>
    </div>
  </article>