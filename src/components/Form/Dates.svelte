<script lang="ts">
	import type {IInvoice} from "../../interfaces/invoice.interface";


	export let invoice: IInvoice = {
		invoiceNumber: "",
		invoiceDate: new Date().toLocaleDateString(),
		invoiceDueDate: new Date().toLocaleDateString(),
	};
</script>

<div class="flex flex-col mt-3 ">
	<label for="invoiceNumber">Invoice's number</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
		type="text"
		name="invoiceNumber"
		id="invoiceNumber"
		bind:value={invoice.invoiceNumber}
	/>

	<label for="invoiceDate">Invoice issue date</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
		type="date"
		name="invoiceDate"
		id="invoiceDate"
		bind:value={invoice.invoiceDate}
	/>

	<label for="invoiceDueDate">Invoice due date</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
		type="date"
		name="invoiceDueDate"
		id="invoiceDueDate"
		bind:value={invoice.invoiceDueDate}
	/>
</div>
