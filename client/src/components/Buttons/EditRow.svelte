<script lang='ts'>
    import {createEventDispatcher} from 'svelte';
        const dispatch = createEventDispatcher();

    const editRow =()=> dispatch('editRow')

</script>

<button on:click={editRow}>Edit</button>