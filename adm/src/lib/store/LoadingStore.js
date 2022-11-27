import { writable } from 'svelte/store';

const LoadingStore = () => {
    const { subscribe , set } = writable(false);

    return {
        subscribe,
        on:() => set(true),
        off:() => set(false)
    }
}

export const loading = LoadingStore();