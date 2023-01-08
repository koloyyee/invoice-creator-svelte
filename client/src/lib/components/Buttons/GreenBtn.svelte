<script lang='ts'>
    export let func:()=>void;
    export let text: string;
</script>

<button class= {`bg-green-600 rounded-xl text-white h-10 w-1/4 mx-2 hover:bg-transparent hover:text-green-600 hover:border-green-400 hover:border-2 transition-all`} on:click={func}>
        {text}
</button>

