<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
    import { auth } from '$lib/store';
    import { socket } from '$lib/client/socket';

    $: hasSession = $auth.isAuth;

    const endSession = () => {
        socket.disconnect();
        browser && localStorage.clear()
        auth.logout();
        goto('/')
    }
</script>

<header>
    <div class="navbar bg-primary text-white">
        <div class="flex-1">
            <a href="/panel" class="btn btn-ghost normal-case text-xl">SELL</a>
        </div>
        <div class="flex-none gap-2">
            <!-- <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered" />
            </div> -->
            
            <!-- ELIMINAR VISIBILIDAD EN MOVILES Y AGREGAR MENU PARA MOVILES -->
            {#if hasSession}
            <label for="my-drawer-2" class="btn btn-ghost text-white btn-xs drawer-button lg:hidden">Menu</label>
            <div class="dropdown dropdown-end ">
                <label for="" tabindex="-1" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="profile" src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="-1" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
                    <li>
                        <a href={null} class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a href={null}>Settings</a></li>
                    <li><a href={null} on:click|preventDefault={endSession}>Cerrar sessión</a></li>
                </ul>
            </div>
            {/if}
        </div>
    </div>
</header>