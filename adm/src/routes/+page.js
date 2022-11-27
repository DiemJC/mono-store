import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = () => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    const sessionStored = get(auth);

    if(sessionStored.isAuth) goto('/panel');
}