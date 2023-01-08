<script>
    import { createForm } from 'felte';
    import AuthBtn from '../Buttons/AuthBtn.svelte';
    import HasAccount from './HasAccount.svelte';

    

    const {form, errors, data} = createForm ({
        onSubmit: (values) =>{
            // post to backend auth
        }
    })

</script>
<form use:form
class="shadow-md border-2 
flex flex-col 
justify-center items-center
w-72 p-10 rounded"
>
    <label for="username">
        Username:
        <input
            class="error rounded"
            type="text"
            name="username"
            id="username"
            required
        />
    </label>
    <label for="password">
        Password:
        <input
            class="error rounded"
            type="password"
            name="password"
            id="password"
            required
        />
    </label>
    <AuthBtn action={"Login"} />
</form>
<HasAccount />