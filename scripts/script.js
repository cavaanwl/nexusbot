function send() {
    var textinput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = ''; 

    var chatbox = document.getElementById('chatbox');
    var messageDiv = document.createElement('div');

    messageDiv.classList.add('message', "user");

    if (textinput === "") {
        textinput = "Veuillez remplire la barre de texte.";
    }

    messageDiv.textContent = textinput;

    chatbox.appendChild(messageDiv);

    chatbox.scrollTop = chatbox.scrollHeight;
    let vartest = textinput;

    if (vartest === "bonjour" || vartest==="Bonjour") {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', "user");
        reponseDiv.textContent = 'Bonjour! Comment puis-je vous aider ?';
        chatbox.appendChild(reponseDiv);
    } else if (vartest.includes('ça va')) {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', "user");
        reponseDiv.textContent = 'Je suis juste un programme, mais merci de demander !';
        chatbox.appendChild(reponseDiv);
    } else if (vartest.includes('aide')) {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', "user");
        reponseDiv.textContent = 'Que puis-je faire pour vous ?';
        chatbox.appendChild(reponseDiv);
    } else if (vartest.includes('contacter')){
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', "user");
        reponseDiv.textContent = 'Vous pouvez contacter Arcade Studio via l\'adresse mail arcade.studio@gmail.com.';
        chatbox.appendChild(reponseDiv);
    }
    else {
        var reponseDiv = document.createElement('div');
        reponseDiv.classList.add('message', "user");
        reponseDiv.textContent = 'Désolé je ne comprends pas.';
    }
}

//gestion du clavier :
document.addEventListener("keydown",(event) => {
	const touche = event.key;
	
	if (event.key) {

		if (touche === "Enter"){
            send();
			console.log(touche);
		}

		if (touche === "ArrowUp"){
            document.getElementById('userInput').value = textinput; 
			console.log(touche);
		}

		else {
		}
	}

},false,);

