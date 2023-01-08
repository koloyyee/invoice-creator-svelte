<script>
    import { createForm } from 'felte';
    import { z } from 'zod';
    import AuthBtn from '../Buttons/AuthBtn.svelte';
    import HasAccount from './HasAccount.svelte';

    const registerSchema = z.object({
        username: z.string(),
        email: z.string().email({ message: 'Invalid email address.' }),
        password: z.string().min(8, { message: 'Must be 8 or more characters long.' }),
        confirmPassword: z.string().min(8),
    })
    

    // const warnSchema = z.object({
    //    password: z.string()
    //     .refine((value)=> (value? value.length > 8 : true), {
    //         message: "Password not secure"
    //     }),
        
    //     confirmPassword: z.string()
    //     .refine((value)=> (value? value.length > 8 : true), {
    //         message: "Password not secure"
    //     })
    // }).superRefine( ({confirmPassword, password}, ctx )=> {
    //     if (confirmPassword !== password) {
    //         ctx.addIssue({
    //             code: 'custom',
    //             message: 'The passwords did not match.'
    //         })
    //     }
    // })

    const {form } = createForm({
        // validate: validateSchema( registerSchema),
        initialValues: {
            id: self.crypto.randomUUID(),
            name: '',
            password: '',
            confirmPassword: '',
            email: ''
        },
        onSubmit: (values) =>{ 
            if(values.password !== values.confirmPassword) return;
        console.log(values)
        }
    })

  
</script>


<form use:form 
class="shadow-md border-2 
flex flex-col 
justify-center items-center
w-72 p-10 rounded"
>

<label for="name">
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
        min='8'
        required
    />
</label>
<label for="comfirmPassword">
    Confirm Password:
    <input
        class= {`error rounded`}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        min='8'
        required
    />
</label>
<label for="email">
    Email:
    <input
        class="error rounded"
        type="email"
        name="email"
        id="email"
        required
    />
</label>

<AuthBtn action={"Register"} />
</form>
<HasAccount />