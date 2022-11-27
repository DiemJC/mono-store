import { writable } from 'svelte/store';

const focusStore = () => {
    const { subscribe , set } = writable('');

    return {
        subscribe,
        focus:v => set(v),
        clear:() => set('')
    }
}

export const focus = focusStore();