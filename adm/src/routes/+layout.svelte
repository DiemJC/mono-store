
<script>
    import '../app.postcss';
    import { Shadow } from 'svelte-loading-spinners';
    import { ToastContainer , FlatToast }  from "svelte-toasts";
    import { Header , Drawer , SideMenu , BrandModal } from '$lib/components';
    import { loading } from '$lib/store';

    export let data;
    const { route } = data;

    $: path = route.id;
</script>

{#if $loading}
<div class="loading bg-base-100">
    <Shadow size="60" color="#88A0A8" unit="px"/>
</div>
{:else}
<div class="app">
    <Header/>
    <Drawer>
        <div>
            <slot/>
        </div>
        <SideMenu slot="menu" />
    </Drawer>
</div>
{/if}
<ToastContainer let:data={data}>
    <FlatToast {data} />
</ToastContainer>
<BrandModal route={path}/>


<style>
    .loading {
        height:100vh;
        display:grid;
        place-content:center;
    }
</style>