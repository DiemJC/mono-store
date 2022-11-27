import { createServer } from 'node:http';
import { app } from "./app";
import { Server } from 'socket.io';
import { connect } from 'mongoose';

const server = createServer(app);

const io = new Server(server);

server.listen(3000);
server.on('listening',() => {
    console.log('Servidor a la escucha por el puerto 3000');
    connect('mongodb://127.0.0.1:27017/store',err => {
        if(err) return console.log(`Error de conexión a la base de datos ${err}`);

        console.log('Conectado a mongodb');
    });
});
server.on('error',err => console.log(`Servidor no inicializado ${err}`));