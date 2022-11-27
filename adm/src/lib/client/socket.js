import { env } from '$env/dynamic/public';
import { io } from 'socket.io-client';

const apidir = env.PUBLIC_WS_URL;

export const fetchSocket = () => {
    const socket = io(apidir);
    let id = ''
    socket.on("connect", () => id = socket.id);
    console.log('Socket created',{socket,id})
    return { socket , id }
}