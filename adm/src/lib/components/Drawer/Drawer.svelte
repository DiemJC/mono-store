<script>
    import { auth } from '$lib/store';
</script>

<div class="drawer drawer-mobile min-h-screen">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle hidden" />
    <div class="drawer-content">
        <slot></slot>
    </div> 
    {#if $auth.isAuth}
    <div class="drawer-side shadow-xl">
        <label for="my-drawer-2" class="drawer-overlay"></label> 
        <slot name="menu"></slot>
    </div>
    {/if}
</div>