<script lang="ts">

  
	import Router from "svelte-spa-router";
	import Menu from "./components/Nav/Menu.svelte";
	import routes from "./routes";
	import { isLoggedIn } from "./store";

	let isIn:boolean;
	isLoggedIn.subscribe( auth => isIn = auth )

  </script>

<body class="flex">
	<!-- {#if isIn} -->
		<Menu />
	<!-- {/if} -->
		<main class="sm:grid lg:grid grid-cols-2 ">
			<Router {routes}/>
		</main>
</body>

<style>
	main {
		padding:0;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;

		}

	}
</style>