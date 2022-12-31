<script lang='ts'>
    export let func:()=>void;
    export let text: string;
</script>

<button class= {`bg-red-600 rounded-xl text-white h-10 w-1/4 mx-2 hover:bg-transparent hover:text-red-600 hover:border-red-400 hover:border-2 transition-all`} on:click={func}>
        {text}
</button>

