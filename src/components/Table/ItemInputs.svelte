<script lang='ts'>
    import {createEventDispatcher} from 'svelte';
    import {v4} from 'uuid';
    import ItemTable from './ItemTable.svelte';

    const dispatch = createEventDispatcher();

  

	export let item = {
        id: v4(),
		itemName: "",
		itemPrice: 0,
		itemQuantity: 0,
		itemSubtotal: 0,
	};
    $: subtotal = 0;
    export let items=[];
    export let totalAmount = 0;

    function setTotalAmount() {
        totalAmount = items.reduce((prev, current)=> prev + current.itemSubtotal, 0)
        
        dispatch('setTotalAmount', {
            totalAmount : totalAmount
        })

    }



    function appendItem(){
        if(item.itemName === '' || item.itemPrice === 0 || item.itemQuantity === 0) return;

        subtotal = item.itemPrice * item.itemQuantity;
        items = [...items, {
            ...item,
            itemSubtotal: subtotal
        }]

        setTotalAmount()

        item = {
            id:v4(),
            itemName: "",
            itemPrice: 0,
            itemQuantity: 0,
            itemSubtotal: 0, 
        }
        
    }


    function editRow(id:string){
            let editingRow = items.find(item => item.id === id)
            item = {
                ...item,
                itemName : editingRow.itemName,
		        itemPrice : editingRow.itemPrice,
		        itemQuantity : editingRow.itemQuantity,
            }
            let list = items.filter(item => item.id !== id)
            items = list
            console.log(items)

        }
    const deleteRow= ( id: string) =>{
            console.log(items, id)
            items = items.filter(item=> item.id !== id)
        }
</script>

<form class='md:grid grid-cols-4 mb-5 gap-5' on:submit|preventDefault={appendItem}>
    <div class="flex flex-col">
	    <label for="itemName">Item</label>
	    <input class='rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10' type="text" name="itemName" bind:value={item.itemName} />
    </div>

    <div class="flex flex-col">
        <label for="itemQuantity">Quantity</label>
        <input class='rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10'type="number" name="itemQuantity" bind:value={item.itemQuantity} />
    </div>

    <div class="flex flex-col">
        <label for="itemPrice">Price</label>
        <input class='rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10'type="number" name="itemPrice" bind:value={item.itemPrice} />
    </div>
    
    <button type='submit' class='bg-purple-800 hover:bg-transparent hover:text-purple-800 hover:border-purple-800 hover:border-2 transition-all duration-300 rounded-xl text-white h-10 self-end mx-2'>Add Item</button>
</form>
<ItemTable items={items} editRow={editRow} deleteRow={deleteRow} inPreview={true}/>