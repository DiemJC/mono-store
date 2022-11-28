<script>
    import { loading , ws } from '$lib/store';
	import { onMount } from 'svelte';

    onMount(() => loading.off())
</script>

<h1>Title</h1>