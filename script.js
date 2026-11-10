let listaDesordenadaPorDia = [];
let jugadorSecreto = null;
let diaSeleccionado = null;
let jugadoresIntentados = [];

// Cambiar entre las pantallas principales del juego
function cambiarPestanaPrincipal(idSeccion) {
    document.querySelectorAll('.seccion-juego').forEach(sec => sec.classList.remove('activa'));
    document.querySelectorAll('.btn-pestana').forEach(btn => btn.classList.remove('activa'));
    
    if(idSeccion === 'wordle-jugadores') {
        document.getElementById('sec-wordle-jugadores').classList.add('activa');
        event.target.classList.add('activa');
    } else if(idSeccion === 'wordle-tecnicas') {
        document.getElementById('sec-wordle-tecnicas').classList.add('activa');
        event.target.classList.add('activa');
    } else if(idSeccion === 'modificar-equipo') {
        document.getElementById('sec-modificar-equipo').classList.add('activa');
        event.target.classList.add('activa');
    }
}

// Generar los retos matemáticamente para los 30 días usando la base de datos
function generarRetosAleatorios() {
    if (typeof jugadores === 'undefined' || jugadores.length === 0) return;
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

    // Dibuja los 30 días del Wordle Diario
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
    if (listaDesordenadaPorDia.length === 0) generarRetosAleatorios();
    jugadorSecreto = listaDesordenadaPorDia[dia - 1];
    jugadoresIntentados = [];
    
    const listaHtml = document.getElementById("lista-intentos");
    if (listaHtml) listaHtml.innerHTML = "";
    
    const alertaHtml = document.getElementById("alerta-victoria");
    if (alertaHtml) alertaHtml.style.display = "none";
    
    const contenedorBuscador = document.getElementById("contenedor-buscador-juego");
    if (contenedorBuscador) contenedorBuscador.style.display = "block";
    
    const instrucHtml = document.getElementById("instrucciones-juego");
    if (instrucHtml) instrucHtml.innerText = `🎯 Reto del Día ${dia} activado. ¡Adivina el jugador oculto!`;

    document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("activo"));
    const btnActivo = document.getElementById(`btn-dia-${dia}`);
    if (btnActivo) btnActivo.classList.add("activo");
}

window.addEventListener('DOMContentLoaded', () => {
    inicializarCalendarioDias();
    inicializarBuscadorJuego();
});

function inicializarBuscadorJuego() {
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
            const imgHtml = j.foto ? `<div style="width:25px; height:25px; border-radius:4px; overflow:hidden; display:inline-block; vertical-align:middle; margin-right:8px;"><img src="${j.foto}" style="width:100%; height:100%; object-fit:cover;"></div>` : '';
            div.innerHTML = `${imgHtml}${j.nombre}`;
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
    if (!jugadorSecreto) return alert("Por favor, selecciona un día primero.");
    jugadoresIntentados.push(jugador.nombre);
    
    const listaIntentos = document.getElementById("lista-intentos");
    if (!listaIntentos) return;
    
    const fila = document.createElement("tr");
    
    const tdJugador = document.createElement("td");
    const imgHtml = jugador.foto ? `<div style="width:55px; height:55px; border-radius:8px; overflow:hidden; margin:0 auto 4px auto;"><img src="${jugador.foto}" style="width:100%; height:100%; object-fit:cover;"></div>` : '';
    tdJugador.innerHTML = `${imgHtml}${jugador.nombre}`;
    tdJugador.className = (jugador.nombre === jugadorSecreto.nombre) ? "verde" : "rojo";
    fila.appendChild(tdJugador);

    function crearCelda(valorIntento, valorSecreto, innerContent) {
        const td = document.createElement("td");
        td.innerHTML = innerContent || valorIntento;
        td.className = (valorIntento === valorSecreto) ? "verde" : "rojo";
        return td;
    }

    const logoHtml = jugador.logoEquipo ? `<div style="width:30px; height:30px; margin:0 auto 4px auto; display:flex; align-items:center; justify-content:center;"><img src="${jugador.logoEquipo}" style="width:100%; height:100%; object-fit:contain;"></div>` : '';
    fila.appendChild(crearCelda(jugador.equipo, jugadorSecreto.equipo, `${logoHtml}<div>${jugador.equipo}</div>`));
    fila.appendChild(crearCelda(jugador.posicion, jugadorSecreto.posicion));
    fila.appendChild(crearCelda(jugador.elemento, jugadorSecreto.elemento));
    listaIntentos.insertBefore(fila, listaIntentos.firstChild);

    if (jugador.nombre === jugadorSecreto.nombre) {
        const alertaVic = document.getElementById("alerta-victoria");
        if (alertaVic) alertaVic.style.display = "block";
        const btnGanado = document.getElementById(`btn-dia-${diaSeleccionado}`);
        if (btnGanado) btnGanado.classList.add("completado");
    }
}

function cambiarDificultad(nivel) {
    const btnFacil = document.getElementById("btn-facil");
    const btnMedio = document.getElementById("btn-medio");
    const btnImp = document.getElementById("btn-imposible");
    const avisoBloq = document.getElementById("aviso-modo-bloqueado");
    const panelDias = document.getElementById("grid-dias-calendario");
    const contenedorBuscador = document.getElementById("contenedor-buscador-juego");
    const instrucHtml = document.getElementById("instrucciones-juego");

    if (btnFacil) btnFacil.classList.remove("activo");
    if (btnMedio) btnMedio.classList.remove("activo");
    if (btnImp) btnImp.classList.remove("activo");
    if (avisoBloq) avisoBloq.style.display = "none";

    if (nivel === 'facil') {
        if (btnFacil) btnFacil.classList.add("activo");
        if (panelDias) panelDias.style.display = "grid";
        if (instrucHtml) instrucHtml.innerText = "Selecciona un día del panel inferior para empezar a jugar.";
        inicializarCalendarioDias();
    } else {
        const btnNivel = document.getElementById(`btn-${nivel}`);
        if (btnNivel) btnNivel.classList.add("activo");
        if (panelDias) panelDias.style.display = "none";
        if (contenedorBuscador) contenedorBuscador.style.display = "none";
        if (avisoBloq) avisoBloq.style.display = "block";
        if (instrucHtml) instrucHtml.innerText = "Modo seleccionado.";
    }
}
