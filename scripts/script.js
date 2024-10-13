function send() {
    var userInput = document.getElementById('userInput').value;
    var textinput = document.getElementById('userInput').value;
    displayMessage(userInput, 'user');
}

function displayMessage(message, sender) {
    document.getElementById('userInput').value = ''; 
    var chatbox = document.getElementById('chatbox');
    var br = document.createElement('br');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    br.classList.add('message', sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.appendChild(br);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
    getBotResponse();
}

function getBotResponse() {
    if (textinput.includes('bonjour')) {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', textinput);
        reponseDiv.textContent = 'Bonjour! Comment puis-je vous aider ?';
        chatbox.appendChild(reponseDiv);
    } else if (textinput.includes('comment ça va')) {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', textinput);
        reponseDiv.textContent = 'Je suis juste un programme, mais merci de demander !';
        chatbox.appendChild(reponseDiv);
    } else if (textinput.includes('aide')) {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', textinput);
        reponseDiv.textContent = 'Que puis-je faire pour vous ?';
        chatbox.appendChild(reponseDiv);
    } else if (textinput === '') {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', textinput);
        reponseDiv.textContent = 'Veuillez remplire la barre de text.';
        chatbox.appendChild(reponseDiv);
    }
    else if (textinput.includes('contacter'))
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', textinput);
        reponseDiv.textContent = 'Vous pouvez contacter Arcade Studio via l\'adresse mail arcade.studio@gmail.com.';
        chatbox.appendChild(reponseDiv);
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

