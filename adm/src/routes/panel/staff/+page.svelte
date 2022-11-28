<script>
    import { Table, TableRow } from '$lib/components';
    import { loading } from '$lib/store';
	import { onMount } from 'svelte';

    onMount(() => loading.off());
</script>

<Table>
    <TableRow />
</Table>
