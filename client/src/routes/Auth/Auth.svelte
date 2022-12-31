<script>
	import AuthBtn from "../../components/Buttons/AuthBtn.svelte";

	let username = "";
	let password = "";
	let confirmPassword = "";
	let email = "";
	let hasAccount = false;

    function setHasAccount(){
        hasAccount = !hasAccount
        console.log(hasAccount)
    }

	function register() {
		if (
			!username.trim() ||
			!password.trim() ||
			confirmPassword !== password ||
			!email.trim()
		)
			return;
	}
</script>

<section class="card w-screen h-screen flex items-center justify-center ">
	{#if !hasAccount}
		<form
			class="shadow-md border-2 
            flex flex-col 
            justify-center items-center
            w-72 p-10 rounded "
			on:submit|preventDefault={register}
		>
			<label for="username">
				Username:
				<input
					class="error rounded"
					type="text"
					name="username"
					id="username"
                    bind:value={username}
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
                    bind:value={password}
					required
				/>
			</label>
			<label for="password">
				Confirm Password:
				<input
					class="error rounded"
					type="password"
					name="confirm-password"
					id="confirm-password"
                    bind:value={confirmPassword}
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
                    bind:value={email}
					required
				/>
			</label>

			<AuthBtn action={"Register"} />
            <p>No account? <button on:click={setHasAccount}>Login</button></p>
		</form>
        {:else}
        <form
        class="shadow-md border-2 
        flex flex-col
        justify-center items-center
        w-72 p-10 rounded"
        on:submit|preventDefault={register}
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
        <p>No account? <button on:click={setHasAccount}>Register</button></p>
        <button>Demo Account</button>
    </form> 
	{/if}
    

</section>
