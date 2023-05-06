import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Usuário conectado');

  socket.on('enviarMensagem', (mensagem) => {
    console.log('Nova mensagem:', mensagem);

    io.emit('mensagem', mensagem);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});