import WebSocket from 'isomorphic-ws';

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    const { sender, text,  avatarIcon, idUser, username, languageUser } = JSON.parse(message);
    console.log(`Received message from ${sender}: ${text}`);
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ sender, text,  avatarIcon, idUser, username, languageUser } ));
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

// server.on('connection', (socket) => {
//   console.log('Client connected');

//   socket.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//     server.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });

//   socket.on('close', () => {
//     console.log('Client disconnected');
//   });
// });




// import express from 'express';
// import http from 'http';
// import { Server } from 'socket.io';
// import cors from 'cors';

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);
// app.use(cors());

// io.on('connection', (socket) => {

//   socket.on("join", (room) => {
//     socket.join(room);

//     const clients = io.sockets.adapter.rooms.get(room);

//     if (clients) {
//       console.log(`Clients in room ${room}:`);
//       clients.forEach((clientId) => {
//         console.log(clientId);
//       });
//     }
//   });
  
//   socket.on('enviar_mensagem', (dados) => {
//     const { mensagem, sala } = dados
//     console.log('Mensagem enviada para a sala', sala, ':', mensagem);
//     console.log('  ');
//     io.to('room1').emit('nova_mensagem', { mensagem });
//   });

// });





// server.listen(3000, () => {
//   console.log('Servidor iniciado na porta 3000');
// });