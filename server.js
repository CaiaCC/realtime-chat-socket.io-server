import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import { router } from './router.js';

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("we have a new connection");

    socket.on('disconnect', () => {
        console.log('User had left')
    })
})

app.use(router);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `);
})