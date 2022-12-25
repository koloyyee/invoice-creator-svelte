<script lang="ts">

  
	import Router, { link } from "svelte-spa-router";
	import routes from "./routes";

  </script>

<main class="sm:grid lg:grid grid-cols-2 ">
  <Router {routes}/>
  <a href="/invoice/new" use:link>Create New Invoice</a>
</main>

<style>
	main {
		text-align: center;
		padding:0;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;

		}

	}
</style>