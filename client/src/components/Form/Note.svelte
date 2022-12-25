<script>
	import { additionalNote } from "../../store";

    export let note = ''
    additionalNote.update(value => note = value)

</script>
<div class='flex flex-col'>
<label for="note">Additional Note</label>
<textarea class='border-dotted border-2 border-purple-300' name="note" id="note"  rows="10" bind:value={note}></textarea></div>