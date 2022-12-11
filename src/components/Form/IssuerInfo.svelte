<script>
	export let issuer = {
		username: "",
		address: "",
		email: "",
		website: "",
		bankName: "",
		bankAccount: "",
		bankHolder: "",
	};
</script>

<div class="md:grid grid-cols-2 gap-2">
	<div class="md:grid grid-cols-2 gap-2">
		<div class="flex flex-col">
			<label for="username">Name:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="username"
				id="username"
				bind:value={issuer.username}
			/>
		</div>
		<div class="flex flex-col">
			<label for="address"> Address:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="address"
				id="address"
				bind:value={issuer.address}
			/>
		</div>
		<div class="flex flex-col">
			<label for="email "> Email:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="email "
				name="email "
				id="email "
				bind:value={issuer.email}
			/>
		</div>
		<div class="flex flex-col">
			<label for="website"> Website:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="website"
				id="website"
				bind:value={issuer.website}
			/>
		</div>
	</div>
	<div class="md:grid grid-cols-2 gap-2">
		<div class="flex flex-col">
			<label for="bankName"> Bank name:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="bankName"
				id="bankName"
				bind:value={issuer.bankName}
			/>
		</div>

		<div class="flex flex-col">
			<label for="bankAccount"> Bank account:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="bankAccount"
				id="bankAccount"
				bind:value={issuer.bankAccount}
			/>
		</div>

		<div class="flex flex-col">
			<label for="bankHolder"> Bank holder name:</label>
			<input
				class="rounded-xl outline-0 focus:border-purple-800 focus:border-3 px-1 h-10"
				type="text"
				name="bankHolder"
				id="bankHolder"
				bind:value={issuer.bankHolder}
			/>
		</div>
	</div>
</div>
