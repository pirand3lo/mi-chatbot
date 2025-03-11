const API_ENDPOINT = 'https://tu-api-en-vercel.vercel.app/api/chat';

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messagesDiv = document.getElementById('chat-messages');
    
    // Mostrar mensaje del usuario
    messagesDiv.innerHTML += `<div class="user-message">Tú: ${userInput.value}</div>`;
    
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput.value })
        });
        
        const data = await response.json();
        messagesDiv.innerHTML += `<div class="bot-message">Bot: ${data.reply}</div>`;
    } catch (error) {
        messagesDiv.innerHTML += `<div class="error">Error: No se pudo obtener respuesta</div>`;
    }
    
    userInput.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}