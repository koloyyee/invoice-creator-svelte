<script>
    import { createForm } from 'felte';
    import { push } from 'svelte-spa-router';
    import { isAuthenticated } from '../../stores/auth';
    import AuthBtn from '../Buttons/AuthBtn.svelte';
    import HasAccount from './HasAccount.svelte';


    const {form, errors, data} = createForm ({
        onSubmit: async (values) =>{

            const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(values)

            })
            const tokenObj = await res.json();
            if (tokenObj) {

                isAuthenticated.set(true)
                push('/')
            }


            // const profile = await fetch (`${BACKEND}/profile`, {
            //     method: "POST",
            //     headers : {
            //         "Authorization" : `Bearer ${tokenObj.access_token}`
            //     }
            // })
            // console.log(values, profile, tokenObj)
            // if(profile) return 
            
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