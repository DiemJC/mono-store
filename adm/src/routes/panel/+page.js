import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth , loading } from '$lib/store';

export const load = () => {
    loading.on();

    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/')
}