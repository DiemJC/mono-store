import { io } from 'socket.io-client';
import { get } from 'svelte/store';
//import { browser } from '$app/environment';
import { ws } from '$lib/store';

const ENDPOINT = 'http://localhost:3000';

export const socket = io(ENDPOINT,{
    autoConnect:false
});

socket.on("users",users => {
    console.log('users received',{users});
    const prevUsers = get(ws);
    users = users.map(user => (user = {...user,self:user.userId === socket.id}))
    users.sort((a,b) => a.self ? -1 : b.self ? 1 : a.username < b.username ? -1 : b.username > a.username ? 1 : 0);
    ws.setUsers(...users);
    const newwestUsers = get(ws);
    console.log({prevUsers,newwestUsers})
}) 

socket.onAny((event,...args) => {
    console.log('----- socket action ------')
    console.log({event,args});
    console.log('----- end socket action ------')
});