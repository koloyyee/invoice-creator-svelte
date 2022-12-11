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

<footer class='footer mt-10 border-t-2 border-t-gray-800 '>
    <ul class='flex gap-3 flex-wrap place-content-center mt-5'>
        <li class=''>Name: {issuer.username}</li>
        <li><span>Address: </span>  {issuer.address}</li>
        <li><span>Email: </span> {issuer.email}</li>
        <li><span>Website:</span> {issuer.website}</li>
        <li><span>Bank:</span> {issuer.bankName}</li>
        <li><span>Account:</span>: {issuer.bankAccount}</li>
    </ul>

</footer>