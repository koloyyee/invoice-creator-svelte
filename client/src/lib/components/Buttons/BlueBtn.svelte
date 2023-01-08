<script lang='ts'>

    export let func:()=>void;
    export let text: string;
</script>

<button  class='bg-blue-400 rounded-xl text-white h-10 w-1/4 mx-2 hover:bg-transparent hover:text-blue-400 hover:border-blue-400 hover:border-2 transition-all' on:click={func}>
{text}
</button>