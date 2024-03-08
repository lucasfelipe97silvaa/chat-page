const http = require('http');
const express = require('express');
// utilizando os recursos do express => app 
const app = express(); 


// Variavel responsavel por criar o servidor  
const servidorHttp = http.createServer(app);
// está tranzendo as funcionalidades do 'socket.io' e vai aplicar => servidorHttp
const io = require('socket.io')(servidorHttp);
 
io.addListener('connection', (socket) => {
    console.log('um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

app.use(express.static('public'));

// selecionado a porta junto com o numero do ip-wifi 
servidorHttp.listen(1000, '192.168.1.69');

