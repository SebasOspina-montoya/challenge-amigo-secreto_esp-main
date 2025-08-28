
let nombreAmigos = [];

console.log(nombreAmigos);

function agregarAmigo() {
    let nombrePersona = document.getElementById('amigo').value;

    if (nombrePersona === ""){
        alert("Por favor, inserte un nombre");
    } else{
        nombreAmigos.push(nombrePersona);
    }
    añadirlista();
    limpiarCaja();

}

function limpiarCaja () {
    document.querySelector ('#amigo').value = '';
}

function añadirlista () {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiar la lista antes de añadir elementos

  for (let i = 0; i < nombreAmigos.length; i++) {
    let amigo = nombreAmigos[i];
    let listItem = document.createElement('li');
    listItem.textContent = amigo;
    lista.appendChild(listItem);
  }
}

function sortearAmigo() {

    if (nombreAmigos == ""){
            alert("No hay ningun nombre en la lista")
    } else{
        let listaResultado = document.getElementById('resultado')
        listaResultado.innerHTML ='';

        let numeroSorteo = Math.floor(Math.random()*nombreAmigos.length);
        let amigoSorteo = nombreAmigos[numeroSorteo]
        let listItem = document.createElement('li');
        listItem.textContent = amigoSorteo;
        listaResultado.appendChild(listItem);
    }
    
}