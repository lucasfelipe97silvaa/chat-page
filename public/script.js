
const botaoEnviar = document.getElementById('enviar');
const caixaDeMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if(caixaDeMensagem.value !== ""){
        socket.emit('nova mensagem', caixaDeMensagem.value);
        caixaDeMensagem.value = "";
    }
})

// function reponsavel por monstrar a mensagem ao usuario; 
socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
} )