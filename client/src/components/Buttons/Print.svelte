<script lang='ts'>
    export let printInvoice:()=>void;

</script>

<button class=' bg-green-800 rounded-xl text-white h-10 w-1/3 mx-2 hover:bg-transparent hover:text-green-800 hover:border-green-800 hover:border-2 transition-all' on:click={printInvoice}>
    Print
</button>