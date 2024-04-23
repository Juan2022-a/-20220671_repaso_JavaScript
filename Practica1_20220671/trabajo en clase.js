// Arreglo de objetos con información de los futbolistas
const futbolistas = [
    { nombre: "12- Harry Kane", equipo: "Bayern Múnich", posicion: "Delantero", Pais: "Inglaterra" },
    { nombre: "11- Rodri", equipo: "Manchester City", posicion: "mediocampista ", Pais: "España" },
    { nombre: "10- Declan Rice", equipo: "Arsenal", posicion: "mediocampista", Pais: "Inglaterra" },
    { nombre: "9- Victor Osimhen", equipo: "Nápoles", posicion: "Delantero", Pais: "Nigeria" },
    { nombre: "8- Lautaro Martínez", equipo: "Inter", posicion: "Delantero", Pais: "Argentina" },
    { nombre: "7- Phil Foden", equipo: "Manchester City", posicion: "Extremo derecho", Pais: "Inglaterra" },
    { nombre: "6- Jamal Musiala", equipo: "Bayern Múnich", posicion: "Mediocentro ofensivo", Pais: "Alemania" },
    { nombre: "5- Bukayo Saka", equipo: "Arsenal", posicion: " Extremo derecho", Pais: "Inglaterra" },
    { nombre: "4- Vinicius Junior", equipo: "Real Madrid", posicion: "Extremo izquierdo", Pais: "Brazil" },
    { nombre: "3- Kylian Mbappé ", equipo: "PSG", posicion: "Delantero centro", Pais: "Francia" },
    { nombre: "2- Erling Haaland", equipo: "Manchester City", posicion: "Delantero centro", Pais: "Noruega" },
    { nombre: "1- Jude Bellingham", equipo: "Real Madrid", posicion: "Mediocentro ofensivo", Pais: "Inglaterra" }
];

// Función para mostrar la información de los futbolistas utilizando Map
function mostrarFutbolistas() {
    const futbolistasList = document.getElementById('futbolistas-lista');

    //Map para recorrer el arreglo de futbolistas y mostrar la información
    futbolistas.map(futbolista => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'mb-3');

        card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">${futbolista.nombre}</h5>
            <p class="card-text">Equipo: ${futbolista.equipo}</p>
            <p class="card-text">Posición: ${futbolista.posicion}</p>
            <p class="card-text">Pais: ${futbolista.Pais}</p>
          </div>
        </div>
      `;
        futbolistasList.appendChild(card);
    });
}

// Mostrar los futbolistas cuando la página se cargue
window.onload = mostrarFutbolistas;