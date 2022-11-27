<script>
    import { Pulse } from 'svelte-loading-spinners';
    import { enhance } from '$app/forms';

    export let btn = 'Button';
    export let cb = () => console.log('Without enhance');
    export let loading = false;
</script>

<form method="POST" use:enhance={cb}>
    <slot></slot>
    <br>
    {#if $$slots.button}
    <slot name="button"></slot>
    {:else}
        <div class="w-full flex justify-start">
            {#if loading}
                <Pulse size="60" color="#88A0A8" unit="px" />
            {:else}
                <button class="btn btn-primary text-white">{btn}</button>
            {/if}
        </div>
    {/if}
</form>
