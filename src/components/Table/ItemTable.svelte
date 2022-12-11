<script lang='ts'>
    import type {IItem} from "../../interfaces/item.interface";
    
    export let items:IItem[];
    export let deleteRow = (id)=>{}
    export let editRow= (id)=>{}
    export let inPreview = false

</script>

<table class='  border-2 '>
    <thead class="bg-slate-900 text-slate-100 border-2 border-slate-900">
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