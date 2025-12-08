<script>
	let { children } = $props();
    import SelectMode from "$lib/selectMode.svelte";
</script>
<SelectMode />
{@render children()}