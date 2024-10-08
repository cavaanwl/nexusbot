function send() {
    var userInput = document.getElementById('userInput').value;
    displayMessage(userInput, 'user');
}

function displayMessage(message, sender) {
    document.getElementById('userInput').value = '';
    var chatbox = document.getElementById('chatbox');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
    getBotResponse();
}

function getBotResponse(chatbox) {
    // Logique simple de réponse basée sur le texte de l'utilisateur
    if (chatbox.toLowerCase().includes('bonjour')) {
        return ('Bonjour! Comment puis-je vous aider?');
    } else if (chatbox.toLowerCase().includes('comment ça va')) {
        return ('Je suis juste un programme, mais merci de demander!');
    } else if (chatbox.toLowerCase().includes('aide')) {
        return 'Que puis-je faire pour vous?';
    } else if (chatbox.toLowerCase().includes('')) {
        return ('Désolé, je ne comprends pas votre demande.');
    }
    else if (input.toLowerCase().includes('comment puis-je contacter les studios Arcade Studio ?'))
        return ("Vous pouvez contacter Arcade Studio via l'adresse mail arcade.studio@gmail.com.");
}

//gestion du clavier :
document.addEventListener("keydown",(event) => {
	const touche = event.key;
	
	if (event.key) {

		if (touche === "Enter"){
            send();
			console.log(touche);
		}

		else {
		}
	}

},false,);

