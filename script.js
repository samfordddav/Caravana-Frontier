let listaDesordenadaPorDia = [];
let jugadorSecreto = null;
let diaSeleccionado = null;
let jugadoresIntentados = [];

function generarRetosAleatorios() {
    let copiaJugadores = [...jugadores];
    listaDesordenadaPorDia = [];
    let semilla = 12345; 
    
    for (let i = 0; i < jugadores.length; i++) {
        semilla = (semilla * 9301 + 49297) % 233280;
        let porcentaje = semilla / 233280;
        let indiceAleatorio = Math.floor(porcentaje * copiaJugadores.length);
        listaDesordenadaPorDia.push(copiaJugadores[indiceAleatorio]);
        copiaJugadores.splice(indiceAleatorio, 1);
    }
}

function inicializarCalendarioDias() {
    const grid = document.getElementById("grid-dias-calendario");
    if (!grid) return;
    grid.innerHTML = "";
    if (listaDesordenadaPorDia.length === 0) generarRetosAleatorios();

    for (let i = 1; i <= 30; i++) {
        const btn = document.createElement("button");
        btn.className = "btn-dia";
        btn.innerText = `Día ${i}`;
        btn.id = `btn-dia-${i}`;
        btn.addEventListener("click", () => seleccionarDiaJuego(i));
        grid.appendChild(btn);
    }
}

function seleccionarDiaJuego(dia) {
    diaSeleccionado = dia;
    jugadorSecreto = listaDesordenadaPorDia[dia - 1];
    jugadoresIntentados = [];
    document.getElementById("lista-intentos").innerHTML = "";
    document.getElementById("alerta-victoria").style.display = "none";
    document.getElementById("contenedor-buscador-juego").style.display = "block";
    document.getElementById("instrucciones-juego").innerText = `🎯 Reto del Día ${dia} activado.`;
    document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("activo"));
    const btnActivo = document.getElementById(`btn-dia-${dia}`);
    if (btnActivo) btnActivo.classList.add("activo");
}

window.onload = function() { inicializarCalendarioDias(); };

const buscador = document.getElementById("buscador");
const sugerenciasDiv = document.getElementById("sugerencias");

if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        sugerenciasDiv.innerHTML = "";
        if (!texto) return;

        const filtrados = jugadores.filter(j => 
            j.nombre.toLowerCase().includes(texto) && !jugadoresIntentados.includes(j.nombre)
        );
        
        filtrados.forEach(j => {
            const div = document.createElement("div");
            div.className = "sugerencia-item";
            div.innerHTML = `<img src="${j.foto}" style="width:25px; height:25px; margin-right:8px; vertical-align:middle;">${j.nombre}`;
            div.addEventListener("click", () => {
                comprobarJugador(j);
                buscador.value = "";
                sugerenciasDiv.innerHTML = "";
            });
            sugerenciasDiv.appendChild(div);
        });
    });
}

function comprobarJugador(jugador) {
    if (!jugadorSecreto) return alert("Selecciona un día.");
    jugadoresIntentados.push(jugador.nombre);
    const fila = document.createElement("tr");
    
    const tdJugador = document.createElement("td");
    tdJugador.innerHTML = `<img src="${jugador.foto}" style="width:55px; height:55px;"><br>${jugador.nombre}`;
    tdJugador.className = (jugador.nombre === jugadorSecreto.nombre) ? "verde" : "rojo";
    fila.appendChild(tdJugador);

    function crearCelda(valorIntento, valorSecreto, contenido) {
        const td = document.createElement("td");
        td.innerHTML = contenido || valorIntento;
        td.className = (valorIntento === valorSecreto) ? "verde" : "rojo";
        return td;
    }

    fila.appendChild(crearCelda(jugador.equipo, jugadorSecreto.equipo, `<img src="${jugador.logoEquipo}" style="width:30px; height:30px;"><br>${jugador.equipo}`));
    fila.appendChild(crearCelda(jugador.posicion, jugadorSecreto.posicion));
    fila.appendChild(crearCelda(jugador.elemento, jugadorSecreto.elemento));
    document.getElementById("lista-intentos").insertBefore(fila, document.getElementById("lista-intentos").firstChild);

    if (jugador.nombre === jugadorSecreto.nombre) {
        document.getElementById("alerta-victoria").style.display = "block";
    }
}
