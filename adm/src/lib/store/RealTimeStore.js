import { writable } from 'svelte/store';

const init = {
    users:[]
}

const RealTimeStore = () => {
    const { subscribe , set , update } = writable(init);
    
    return {
        subscribe,
        setUsers:(users) => update(store => (store = {...store,users})),
        reset:() => set(init)
    }
}

export const ws = RealTimeStore();