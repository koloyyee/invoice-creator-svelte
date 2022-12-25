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

<footer class='footer border-t-2 border-t-gray-800 mt-auto'>
    <ul class='flex gap-3 flex-wrap place-content-center mt-5'>
        <li>Name: <span class="footer-info">{issuer.username}</span></li>
        <li>Address: <span class="footer-info"> {issuer.address}</span></li>
        <li>Email: <span class="footer-info"> {issuer.email}</span></li>
        <li>Website: <span class="footer-info"> {issuer.website}</span></li>
        <li><span>Bank:<span class="footer-info"> {issuer.bankName}</span></li>
        <li>Account: <span class="footer-info"> {issuer.bankAccount}</span></li>
    </ul>

</footer>