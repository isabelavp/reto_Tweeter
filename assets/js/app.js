const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
	//aca guardo el comentario ingresado por el usuario
	let comments = document.getElementById("comment").value;

	//limpiar el textarea
	document.getElementById("comment").value = "";

	//contenedor donde dejare los twett en html
	const tweets = document.getElementById("tweet");

	//crear un div contenedor

	const newTweet = document.createElement("div");


	//validar que el textarea tenga un comentario
if (comments.length === 0 || comments === null) {
	alert("Ingresar tu mensaje");
	return false;
}

//nodos de texto del textarea

	let textNewTweet = document.createTextNode(comments);

	const newContainer = document.createElement("p");
	newContainer.appendChild(textNewTweet);
	
	newTweet.appendChild(newContainer);

	tweets.appendChild(newTweet);


})


