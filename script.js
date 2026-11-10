let jugadorSecreto = null;
let diaSeleccionado = null;
let jugadoresIntentados = [];

// Lista exacta de 10 días con estrellas fáciles de diferentes temporadas
const calendarioFijoPorDia = {
    1: "Axel Blaze",
    2: "Mark Evans",
    3: "Jude Sharp",
    4: "Shawn Froste",
    5: "Byron Love",
    6: "Xene",
    7: "Nathan Swift",
    8: "David Samford",
    9: "Joseph King",
    10: "Jordan Greenway"
};

function irASeccion(idSeccion) {
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.querySelectorAll('.seccion-juego').forEach(sec => sec.style.display = 'none');
    document.getElementById(idSeccion).style.display = 'block';
    
    // Si entramos a la sección de jugadores, nos aseguramos de que el calendario se vea
    if (idSeccion === 'sec-wordle-jugadores') {
        inicializarCalendarioDias();
    }
}

function volverAlInicio() {
    document.querySelectorAll('.seccion-juego').forEach(sec => sec.style.display = 'none');
    document.getElementById('pantalla-inicio').style.display = 'flex';
}

function inicializarCalendarioDias() {
    const grid = document.getElementById("grid-dias-calendario");
    if (!grid) return;
    grid.innerHTML = "";
    grid.style.display = "grid"; // Asegura que el panel sea visible al entrar

    // Genera exactamente los 10 días solicitados
    for (let i = 1; i <= 10; i++) {
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
    const nombreBuscado = calendarioFijoPorDia[dia];
    
    if (typeof jugadores !== 'undefined') {
        jugadorSecreto = jugadores.find(j => j.nombre.toLowerCase() === nombreBuscado.toLowerCase());
    }

    if (!jugadorSecreto) {
        alert("Error: No se encontraron los datos de " + nombreBuscado + " en jugadores.js. Revisa que el nombre esté escrito exactamente igual.");
        return;
    }

    jugadoresIntentados = [];
    document.getElementById("lista-intentos").innerHTML = "";
    document.getElementById("alerta-victoria").style.display = "none";
    document.getElementById("zona-buscador-jugador").style.display = "block";
    document.getElementById("instrucciones-juego").innerText = `🎯 Reto del Día ${dia} activado. ¡Adivina el jugador oculto!`;

    document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("activo"));
    const btnActivo = document.getElementById(`btn-dia-${dia}`);
    if (btnActivo) btnActivo.classList.add("activo");
}

window.addEventListener('DOMContentLoaded', () => {
    // La carga inicial se maneja al pulsar los botones del menú de inicio
});

function inicializarBuscadorJuego() {
    // El buscador ya se gestiona mediante eventos nativos en tu HTML
}

// Escucha en tiempo real la escritura del usuario en el buscador
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    const sugerenciasDiv = document.getElementById("sugerencias");
    if (!buscador || !sugerenciasDiv) return;

    buscador.addEventListener("input", () => {
        if (typeof jugadores === 'undefined') return;
        const texto = buscador.value.toLowerCase();
        sugerenciasDiv.innerHTML = "";
        if (!texto) return;

        const filtrados = jugadores.filter(j => 
            j.nombre.toLowerCase().includes(texto) && !jugadoresIntentados.includes(j.nombre)
        );
        
        filtrados.forEach(j => {
            const div = document.createElement("div");
            div.className = "sugerencia-item";
            
            const imgHtml = j.foto ? `<img src="${j.foto}" class="sugerencia-img" onerror="this.src='https://placehold.co'">` : '';
            div.innerHTML = `${imgHtml}<span>${j.nombre}</span>`;
            
            div.addEventListener("click", () => {
                comprobarJugador(j);
                buscador.value = "";
                sugerenciasDiv.innerHTML = "";
            });
            sugerenciasDiv.appendChild(div);
        });
    });
});

function comprobarJugador(jugador) {
    if (!jugadorSecreto) return alert("Por favor, selecciona un día primero.");
    jugadoresIntentados.push(jugador.nombre);
    
    const listaIntentos = document.getElementById("lista-intentos");
    const fila = document.createElement("tr");
    
    const tdJugador = document.createElement("td");
    const imgHtml = jugador.foto ? `<div style="width:50px; height:50px; margin:0 auto 4px auto;"><img src="${jugador.foto}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></div>` : '';
    tdJugador.innerHTML = `${imgHtml}${jugador.nombre}`;
    tdJugador.className = (jugador.nombre === jugadorSecreto.nombre) ? "verde" : "rojo";
    fila.appendChild(tdJugador);

    function crearCelda(valorIntento, valorSecreto, innerContent) {
        const td = document.createElement("td");
        td.innerHTML = innerContent || valorIntento;
        td.className = (valorIntento === valorSecreto) ? "verde" : "rojo";
        return td;
    }

    const logoHtml = jugador.logoEquipo ? `<div style="width:25px; height:25px; margin:0 auto 4px auto;"><img src="${jugador.logoEquipo}" style="width:100%; height:100%; object-fit:contain;"></div>` : '';
    fila.appendChild(crearCelda(jugador.equipo, jugadorSecreto.equipo, `${logoHtml}<div>${jugador.equipo}</div>`));
    fila.appendChild(crearCelda(jugador.posicion, jugadorSecreto.posicion));
    fila.appendChild(crearCelda(jugador.elemento, jugadorSecreto.elemento));
    
    listaIntentos.insertBefore(fila, listaIntentos.firstChild);

    if (jugador.nombre === jugadorSecreto.nombre) {
        document.getElementById("alerta-victoria").style.display = "block";
        const btnGanado = document.getElementById(`btn-dia-${diaSeleccionado}`);
        if (btnGanado) btnGanado.classList.add("completado");
    }
}

function cambiarDificultad(nivel) {
    document.querySelectorAll(".btn-modo").forEach(b => b.classList.remove("activo"));
    const gridDias = document.getElementById("grid-dias-calendario");
    const buscadorZona = document.getElementById("zona-buscador-jugador");

    if (nivel === 'facil') {
        document.getElementById("btn-facil").classList.add("activo");
        if (gridDias) gridDias.style.display = 'grid';
        inicializarCalendarioDias();
    } else {
        document.getElementById(`btn-${nivel}`).classList.add("activo");
        if (gridDias) gridDias.style.display = 'none';
        if (buscadorZona) buscadorZona.style.display = 'none';
        alert("Modo alternativo seleccionado. ¡Completa primero los desafíos diarios!");
    }
}
