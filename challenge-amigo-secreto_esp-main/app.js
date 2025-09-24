let jugadores = [];

const campoNombre = document.getElementById("amigo");
const listaJugadores = document.getElementById("listaAmigos");
const salida = document.getElementById("resultado");

// Validación de entrada (solo letras y espacios)
campoNombre.addEventListener("input", () => {
    campoNombre.value = campoNombre.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
});

// Agregar amigo
function agregarAmigo() {
    const nombre = campoNombre.value.trim();
    if (!nombre) return alert("Debes ingresar un nombre válido.");
    if (jugadores.includes(nombre)) return alert("Ese nombre ya fue agregado.");

    jugadores.push(nombre);
    campoNombre.value = "";
    mostrarLista();
}

// Mostrar lista de amigos
function mostrarLista() {
    listaJugadores.innerHTML = ""; // Limpiar lista antes de actualizar

    for (let i = 0; i < jugadores.length; i++) {
        const li = document.createElement("li");
        li.textContent = jugadores[i];
        listaJugadores.appendChild(li);
    }
}

// Sortear amigo
function sortearAmigo() {
    if (jugadores.length < 2) return alert("Se necesitan al menos dos amigos para sortear.");

    const elegido = jugadores[Math.floor(Math.random() * jugadores.length)];
    salida.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
    listaJugadores.innerHTML = ""; // Opcional: limpiar lista después de sortear
}

// Reiniciar juego
function reiniciarJuego() {
    jugadores = [];
    campoNombre.value = "";
    listaJugadores.innerHTML = "";
    salida.innerHTML = "";
}

// Permitir agregar con Enter
campoNombre.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarAmigo();
    }
});
