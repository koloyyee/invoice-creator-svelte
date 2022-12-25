<script lang='ts'>

    export let saveInvoice:()=>void;
</script>

<button  class='bg-blue-400 rounded-xl text-white h-10 w-1/3 mx-2 hover:bg-transparent hover:text-blue-400 hover:border-blue-400 hover:border-2 transition-all' on:click={saveInvoice}>
Save
</button>