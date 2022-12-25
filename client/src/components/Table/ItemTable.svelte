<script lang='ts'>
    import type { IItem } from "../../interfaces/item.interface";
    
    export let items:IItem[];
    export let deleteRow = (id)=>{}
    export let editRow= (id)=>{}
    export let inPreview = false

</script>

<table class='table-auto py-2 mx-0 text-sm
 lg:text-base w-full'>
    <thead class=" text-slate-900  h-1  border-b-slate-600 border-b-2">
        <tr>
            <th>Item Name </th>
            <th> Quantity </th>
            <th> Price </th>
            <th> Subtotal Amount </th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
            {#each items as item}
                <tr>
                    <td>{item.itemName}</td> 
                    <td class=''>{item.itemQuantity}</td> 
                    <td>${item.itemPrice}</td> 
                    <td class=''>${item.itemSubtotal}</td>
                    {#if inPreview }
                    <td><button on:click={()=>editRow(item.id)}>Edit</button></td>
                    <td><button on:click={()=>deleteRow(item.id)}>Delete</button></td>
                    {/if}
                </tr>
            {/each}
    </tbody>
</table>
<style>

</style>
