<script lang="ts">

  
	import Router from "svelte-spa-router";
	import Menu from "./lib/components/Nav/Menu.svelte";
	import { isLoggedIn } from "./lib/stores/auth";
	import routes from "./routes";
	import Auth from "./routes/Auth/Auth.svelte";



  </script>

<body class="flex">
	{#if $isLoggedIn}
	<Menu />
	<main class="sm:grid lg:grid grid-cols-2 ">
		<Router {routes}/>
	</main>
	{:else}
		<Auth />
	{/if}
</body>

<style>
	*{
		height:100%;
	}
	main {
		padding:0;
		margin: 0 auto;

	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		height: 100%;

		}

	}
</style>