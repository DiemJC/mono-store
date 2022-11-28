import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth , loading } from '$lib/store';

export const load = async ({ fetch }) => {
    loading.on();

    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const { success , docs , message } = await fetch('http://localhost:3000/apiv1/private/user/list');

    return {
        success,
        docs,
        message
    }
}