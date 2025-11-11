<script>
	import { page } from '$app/state';
	import { base } from "$app/paths";
	import { onMount } from "svelte";

	onMount(function() {
		setTimeout(() => {window.location.href = base + ""}, 2000);
	})
</script>
<style>
	* {
		text-align: center;
		font-family: Montserrat;
	}
</style>
<br>
<h2>Uh oh :(</h2>
<h1>{page.status}: {page.error.message}</h1> 
<h3>Redirecting to home in two seconds</h3>