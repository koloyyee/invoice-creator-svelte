<script lang='ts'>
import type { IClient } from '../../interfaces/client.interface';

export let client: IClient ={
    clientName: '',
    clientAddress: '',
}
</script>

<div class='flex flex-col mt-3'>

    <label for="clientName">Client's name</label>
    <input class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10" type="text" name="clientName" id="clientName" bind:value={client.clientName} required>
    <label for="clientAddress">Client's address</label>
    <input class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10" type="text" name="clientAddress" id="clientAddress" bind:value={client.clientAddress} required>
</div>
