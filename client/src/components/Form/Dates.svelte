<script lang="ts">
	

	export let invoiceId = "";
	export let invoiceDate = new Date().toLocaleDateString();
	export let 	invoiceDueDate = new Date().toLocaleDateString();
	
</script>

<div class="flex flex-col mt-3 ">
	<label for="invoiceId">Invoice's number</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10 text-gray-500"
		type="text"
		name="invoiceId"
		id="invoiceId"
		bind:value={invoiceId}
		disabled = {true}
		required
	/>

	<label for="invoiceDate">Invoice issue date</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
		type="date"
		name="invoiceDate"
		id="invoiceDate"
		bind:value={invoiceDate}
		required
	/>

	<label for="invoiceDueDate">Invoice due date</label>
	<input
		class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
		type="date"
		name="invoiceDueDate"
		id="invoiceDueDate"
		bind:value={invoiceDueDate}
		required
	/>
</div>
