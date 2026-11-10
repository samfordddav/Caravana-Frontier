const jugadores = [
    { nombre: "Mark Evans", equipo: "Raimon", posicion: "Portero", elemento: "Tierra", foto: "mark.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Axel Blaze", equipo: "Raimon", posicion: "Delantero", elemento: "Fuego", foto: "axel.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Jude Sharp", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Bosque", foto: "jude.webp", logoEquipo: "logo_royal.webp" },
    { nombre: "Nathan Swift", equipo: "Raimon", posicion: "Defensa", elemento: "Viento", foto: "nathan.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Jack Wallside", equipo: "Raimon", posicion: "Defensa", elemento: "Tierra", foto: "jack.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Shawn Froste", equipo: "Alpino", posicion: "Delantero", elemento: "Viento", foto: "shawn.webp", logoEquipo: "logo_alpino.webp" },
    { nombre: "Byron Love", equipo: "Zeus", posicion: "Delantero", elemento: "Bosque", foto: "byron.webp", logoEquipo: "logo_zeus.webp" },
    { nombre: "Xene", equipo: "Génesis", posicion: "Delantero", elemento: "Fuego", foto: "xene.webp", logoEquipo: "logo_genesis.webp" },
    { nombre: "David Samford", equipo: "Royal Academy", posicion: "Delantero", elemento: "Bosque", foto: "david.webp", logoEquipo: "logo_royal.webp" },
    { nombre: "Joseph King", equipo: "Royal Academy", posicion: "Portero", elemento: "Fuego", foto: "joseph.webp", logoEquipo: "logo_royal.webp" },
    { nombre: "Caleb Stonewall", equipo: "Neo Japón", posicion: "Centrocampista", elemento: "Fuego", foto: "caleb.webp", logoEquipo: "logo_neojapon.webp" },
    { nombre: "Darren LaChance", equipo: "Fauxshore", posicion: "Portero", elemento: "Bosque", foto: "darren.webp", logoEquipo: "logo_fauxshore.webp" },
    { nombre: "Hurley Kane", equipo: "Mary Times", posicion: "Defensa", elemento: "Viento", foto: "hurley.webp", logoEquipo: "logo_marytimes.webp" },
    { nombre: "Xavier Foster", equipo: "Inazuma Japón", posicion: "Delantero", elemento: "Fuego", foto: "xavier.webp", logoEquipo: "logo_inazumajapon.webp" },
    { nombre: "Jordan Greenway", equipo: "Inazuma Japón", posicion: "Centrocampista", elemento: "Tierra", foto: "jordan.webp", logoEquipo: "logo_inazumajapon.webp" },
    { nombre: "Kevin Dragonfly", equipo: "Raimon", posicion: "Delantero", elemento: "Fuego", foto: "kevin.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Tod Ironside", equipo: "Raimon", posicion: "Defensa", elemento: "Tierra", foto: "tod.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Timmy Saunders", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "timmy.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Sam Kincaid", equipo: "Raimon", posicion: "Centrocampista", elemento: "Fuego", foto: "sam.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Maxwell Carson", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "max.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Steve Grim", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "steve.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Jim Wraith", equipo: "Raimon", posicion: "Defensa", elemento: "Bosque", foto: "jim.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Bobby Shearer", equipo: "Raimon", posicion: "Defensa", elemento: "Viento", foto: "bobby.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Erik Eagle", equipo: "Raimon", posicion: "Centrocampista", elemento: "Fuego", foto: "erik.webp", logoEquipo: "logo_raimon.webp" },
    { nombre: "Janus", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Tierra", foto: "janus.webp", logoEquipo: "logo_geminis.webp" },
    { nombre: "Dvalin", equipo: "Épsilon", posicion: "Portero", elemento: "Fuego", foto: "dvalin.webp", logoEquipo: "logo_epsilon.webp" },
    { nombre: "Bellatrix", equipo: "Génesis", posicion: "Centrocampista", elemento: "Viento", foto: "bellatrix.webp", logoEquipo: "logo_genesis.webp" },
    { nombre: "Torch", equipo: "Prominence", posicion: "Delantero", elemento: "Fuego", foto: "torch.webp", logoEquipo: "logo_prominence.webp" },
    { nombre: "Gazelle", equipo: "Polvo de Diamantes", posicion: "Delantero", elemento: "Viento", foto: "gazelle.webp", logoEquipo: "logo_diamantes.webp" },
    { nombre: "Paolo Bianchi", equipo: "Orfeo", posicion: "Delantero", elemento: "Viento", foto: "paolo.webp", logoEquipo: "logo_orfeo.webp" },
    { nombre: "Hector Helio", equipo: "The Little Giants", posicion: "Portero", elemento: "Tierra", foto: "hector.webp", logoEquipo: "logo_giants.webp" },
    { nombre: "Edgar Partinus", equipo: "Los Emperadores", posicion: "Delantero", elemento: "Bosque", foto: "edgar.webp", logoEquipo: "logo_emperadores.webp" },
    { nombre: "Lars Luceafăr", equipo: "El Ogro", posicion: "Portero", elemento: "Tierra", foto: "luceafar.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Bump Trungus", equipo: "El Ogro", posicion: "Defensa", elemento: "Fuego", foto: "trungus_b.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Lump Trungus", equipo: "El Ogro", posicion: "Defensa", elemento: "Viento", foto: "trungus_l.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Radd Ischer", equipo: "El Ogro", posicion: "Defensa", elemento: "Tierra", foto: "ischer.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Jynx Jenkins", equipo: "El Ogro", posicion: "Defensa", elemento: "Tierra", foto: "jenkins.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Oni Triumvir", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Tierra", foto: "triumvir.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Drachen Gunther", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Fuego", foto: "gunther.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Ichabod Stark", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Tierra", foto: "stark.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Escavan Malice", equipo: "El Ogro", posicion: "Delantero", elemento: "Tierra", foto: "malice.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Bash Lancer", equipo: "El Ogro", posicion: "Delantero", elemento: "Tierra", foto: "lancer.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Mystral Callous", equipo: "El Ogro", posicion: "Delantero", elemento: "Tierra", foto: "callous.webp", logoEquipo: "logo_ogro.webp" },
    { nombre: "Seymour Hillman", equipo: "Inazuma Eleven (Veteranos)", posicion: "Portero", elemento: "Tierra", foto: "hillman_j.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Charles Island", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Bosque", foto: "island.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Garret Hairtown", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Viento", foto: "hairtown.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Arthur Sweet", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Tierra", foto: "sweet.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Peter Mildred", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Bosque", foto: "mildred.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Josh Nathaniel", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Bosque", foto: "nathaniel.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Edward Gladstone", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Fuego", foto: "gladstone.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Tyler Thomas", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Tierra", foto: "thomas_t.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Joseph Yosemite", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Viento", foto: "yosemite.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Ian Suffolk", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Fuego", foto: "suffolk.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Constant Builder", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Fuego", foto: "builder.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Ted Poe", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Bosque", foto: "poe.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Marshall Heart", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Viento", foto: "heart.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Dom Foreman", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Tierra", foto: "foreman.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Slot MacHines", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Fuego", foto: "machines.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Bill Steakspear", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Tierra", foto: "steakspear.webp", logoEquipo: "logo_inazuma_original.webp" },
    { nombre: "Herman Muller", equipo: "Kids FC", posicion: "Portero", elemento: "Viento", foto: "muller.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Keth Claus", equipo: "Kids FC", posicion: "Defensa", elemento: "Viento", foto: "claus.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Robert Silver", equipo: "Kids FC", posicion: "Defensa", elemento: "Viento", foto: "silver.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Izzy Island", equipo: "Kids FC", posicion: "Defensa", elemento: "Bosque", foto: "izzy.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Sothern Newman", equipo: "Kids FC", posicion: "Defensa", elemento: "Tierra", foto: "newman.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Irwin Hall", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Bosque", foto: "hall.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Taylor Higgins", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "higgins.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Jamie Cool", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "cool.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Hans Randall", equipo: "Kids FC", posicion: "Delantero", elemento: "Fuego", foto: "randall.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Michael Riverside", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Tierra", foto: "riverside.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Maddie Moonlight", equipo: "Kids FC", posicion: "Delantero", elemento: "Bosque", foto: "maddie.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Bart Grantham", equipo: "Kids FC", posicion: "Defensa", elemento: "Bosque", foto: "grantham.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Karl Blue", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Tierra", foto: "karl.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Theakston Plank", equipo: "Kids FC", posicion: "Delantero", elemento: "Viento", foto: "plank.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Ken Cake", equipo: "Kids FC", posicion: "Delantero", elemento: "Tierra", foto: "cake.webp", logoEquipo: "logo_kids_fc.webp" },
    { nombre: "Mitch Grumble", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "grumble.webp", logoEquipo: "logo_kids_fc.webp" }
];
let jugadoresIntentados = [];
let listaDesordenadaPorDia = [];
let jugadorSecreto = null;
let diaSeleccionado = null;

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


    for (let i = 1; i <= 30; i++) {
        const btn = document.createElement("button");
        btn.className = "btn-dia";
        btn.innerText = `Día ${i}`;
        btn.id = `btn-dia-${i}`;
        btn.addEventListener("click", () => {
            seleccionarDiaJuego(i);
        });
        grid.appendChild(btn);
    }
}

function seleccionarDiaJuego(dia) {
    diaSeleccionado = dia;
    jugadorSecreto = listaDesordenadaPorDia[dia - 1];
    
    document.getElementById("lista-intentos").innerHTML = "";
    document.getElementById("alerta-victoria").style.display = "none";
    document.getElementById("contenedor-buscador-juego").style.display = "block";
    document.getElementById("instrucciones-juego").innerText = `🎯 Reto del Día ${dia} activado. ¡Intenta adivinarlo!`;

    document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("activo"));
    const btnActivo = document.getElementById(`btn-dia-${dia}`);
    if (btnActivo) btnActivo.classList.add("activo");
}

window.onload = function() {
    inicializarCalendarioDias();
};

const buscador = document.getElementById("buscador");
const sugerenciasDiv = document.getElementById("sugerencias");
const listaIntentos = document.getElementById("lista-intentos");

if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        sugerenciasDiv.innerHTML = "";
        if (!texto) return;

        const filtrados = jugadores.filter(j => j.nombre.toLowerCase().includes(texto));
        
        filtrados.forEach(j => {
            const div = document.createElement("div");
            div.className = "sugerencia-item";
            const imgHtml = j.foto ? `<div style="width:25px; height:25px; border-radius:4px; overflow:hidden; display:inline-block; vertical-align:middle; margin-right:8px;"><img src="${j.foto}" style="width:100%; height:100%; object-fit:cover; object-position:center;"></div>` : '';
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
    if (!jugadorSecreto) {
        alert("Por favor, selecciona un día primero.");
        return;
    }

    const fila = document.createElement("tr");
    
    // Celda de Jugador
    const tdJugador = document.createElement("td");
    const imgHtml = jugador.foto ? `<div style="width:55px; height:55px; border-radius:8px; overflow:hidden; margin:0 auto 4px auto;"><img src="${jugador.foto}" style="width:100%; height:100%; object-fit:cover; object-position:center;"></div>` : '';
    tdJugador.innerHTML = `${imgHtml}${jugador.nombre}`;
    tdJugador.className = (jugador.nombre === jugadorSecreto.nombre) ? "verde" : "rojo";
    fila.appendChild(tdJugador);

    // Función para celdas normales
    function crearCelda(valorIntento, valorSecreto, innerContent) {
        const td = document.createElement("td");
        td.innerHTML = innerContent || valorIntento;
        td.className = (valorIntento === valorSecreto) ? "verde" : "rojo";
        return td;
    }

    // Celda Equipo con Logo Dinámico
    const logoHtml = jugador.logoEquipo ? `<div style="width:30px; height:30px; margin:0 auto 4px auto; display:flex; align-items:center; justify-content:center;"><img src="${jugador.logoEquipo}" style="width:100%; height:100%; object-fit:contain;"></div>` : '';
    const contenidoEquipo = `${logoHtml}<div>${jugador.equipo}</div>`;

    fila.appendChild(crearCelda(jugador.equipo, jugadorSecreto.equipo, contenidoEquipo));
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
    document.getElementById("btn-facil").classList.remove("activo");
    document.getElementById("btn-medio").classList.remove("activo");
    document.getElementById("btn-imposible").classList.remove("activo");
    document.getElementById("aviso-modo-bloqueado").style.display = "none";

    if (nivel === 'facil') {
        document.getElementById("btn-facil").classList.add("activo");
        document.getElementById("panel-secciones-dias").style.display = "block";
        document.getElementById("instrucciones-juego").innerText = "Selecciona un día del panel superior para empezar a jugar.";
        inicializarCalendarioDias();
    } else {
        document.getElementById(`btn-${nivel}`).classList.add("activo");
        document.getElementById("panel-secciones-dias").style.display = "none";
        document.getElementById("contenedor-buscador-juego").style.display = "none";
        document.getElementById("aviso-modo-bloqueado").style.display = "block";
        document.getElementById("instrucciones-juego").innerText = "Modo seleccionado.";
    }
}


// Enlace para activar la barra de búsqueda de jugadores
document.addEventListener("DOMContentLoaded", () => {
    const inputBuscador = document.getElementById("buscador");
    const cajaSugerencias = document.getElementById("sugerencias");
    const inputEquipo = document.getElementById("buscador-equipo");
    const cajaEquipo = document.getElementById("sugerencias-equipo");

    if (inputBuscador && cajaSugerencias) {
        inputBuscador.addEventListener("input", () => {
            if (typeof jugadores === 'undefined') return;
            const txt = inputBuscador.value.toLowerCase();
            cajaSugerencias.innerHTML = "";
            if (!txt) return;
const jugadoresIntentados = [];
            const encontrados = jugadores.filter(j => 
                j.nombre.toLowerCase().includes(txt) && !jugadoresIntentados.includes(j.nombre)
            );
            
            encontrados.forEach(j => {
                const item = document.createElement("div");
                item.className = "sugerencia-item";
                       const img = j.foto ? `<img src="${j.foto}" class="sugerencia-img" style="width:35px; height:35px; border-radius:4px; object-fit:cover; vertical-align:middle; margin-right:8px;" onerror="this.src='https://placehold.co'">` : '';
                item.innerHTML = `${img}<span>${j.nombre}</span>`;
                item.addEventListener("click", () => {
                    comprobarJugador(j);
                    inputBuscador.value = "";
                    cajaSugerencias.innerHTML = "";
                });
                cajaSugerencias.appendChild(item);
                      });
        });
    }
});

