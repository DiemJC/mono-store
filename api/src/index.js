import { createServer } from 'node:http';
import { app } from "./app";
import { Server } from 'socket.io';
import { connect } from 'mongoose';
import { decodeToken } from './middlewares/AuthMiddleware';
const server = createServer(app);



const io = new Server(server);

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) next(new Error('Conexión no autorizada'));
    const { sub , role } = decodeToken(token);
    socket.user = sub;
    socket.role = role;
    next();
});

io.on("connection",socket => {
    let users = []
    users = [...users,...io.of('/').sockets].map(obj => ({userId:obj[0],user:obj[1].user,role:obj[1].role}));
    socket.emit("users", users);
    socket.broadcast.emit("user connected", {
        userID: socket.id,
        user: socket.user,
        role: socket.role
    });
})



server.listen(3000);
server.on('listening',() => {
    console.log('Servidor a la escucha por el puerto 3000');
    connect('mongodb://127.0.0.1:27017/store',err => {
        if(err) return console.log(`Error de conexión a la base de datos ${err}`);

        console.log('Conectado a mongodb');
    });
});
server.on('error',err => console.log(`Servidor no inicializado ${err}`));