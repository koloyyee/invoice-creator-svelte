<script lang='ts'>
    import {createEventDispatcher} from 'svelte';
        const dispatch = createEventDispatcher();

    const deleteRow = () => dispatch('deleteRow')

</script>

<button on:click={deleteRow}>Delete</button>