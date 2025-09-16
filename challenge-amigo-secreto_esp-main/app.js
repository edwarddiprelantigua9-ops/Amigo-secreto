

let amigos = [];

function agregarAmigo(nombre) {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, introdusca un nombre de un amigo.");
        return;
    }

    amigos.push(nombreAmigo);

    mostrarLista();
    input.value = "";

}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {

        let li = document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    
    let sorteo = Math.floor(Math.random()* amigos.length);

    let amigoSeleccionado = amigos[sorteo];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = "El amigo seleccionado es: " + amigoSeleccionado;
    ulResultado.appendChild(li);
}
 