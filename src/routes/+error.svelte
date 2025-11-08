<script>
	import { page } from '$app/state';
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