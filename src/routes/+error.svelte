<script>
	import { page } from '$app/state';
</script>
<style>
	* {
		text-align: center;
	}
</style>
<h2>Uh oh :(</h2>
<h1>{page.status}: {page.error.message}</h1>