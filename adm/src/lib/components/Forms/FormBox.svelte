<script>
    import { Form } from '$lib/components';
    export let btn;
    export let title;
    export let noDivider = false;
    export let loading;
    export let cb = () => console.log('');
</script>

<div class="form text-center" style="width: min(40rem,100%);">
    <h2 class="text-3xl text-primary">{title}</h2>
    {#if !noDivider}
        <div class="divider"></div>
    {/if}
    <Form {btn} {cb} {loading}>
        <slot></slot>
    </Form>
</div>