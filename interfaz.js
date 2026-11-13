// Base de datos local de entrenadores con sus respectivas fotos
const entrenadoresData = {
    hillman: { nombre: "Seymour Hillman", foto: "hillman.webp" },
    lina: { nombre: "Aquilina 'Lina' Schiller", foto: "lina.webp" },
    travis: { nombre: "Percival Travis", foto: "travis.webp" }
};

function mostrarModo(modo) {
    document.getElementById("pantalla-menu").style.display = "none";
    
    if (modo === 'adivinar-jugador') {
        document.getElementById("pantalla-juego").style.display = "block";
    } else if (modo === 'crear-equipo') {
        document.getElementById("pantalla-creador-equipo").style.display = "block";
        actualizarFotoEntrenador(); // Carga el entrenador por defecto
        cambiarFormacionCampo();    // Dibuja la alineación por defecto
       } else if (modo === 'adivinar-tecnica') {
        document.getElementById("pantalla-tecnicas").style.display = "block";
    } else if (modo === 'duelos') {
        document.getElementById("pantalla-duelos").style.display = "block";
        iniciarDuelos();
    }
}

function mostrarMenu() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-creador-equipo").style.display = "none";
    document.getElementById("pantalla-tecnicas").style.display = "none";
        document.getElementById("pantalla-duelos").style.display = "none";
    document.getElementById("pantalla-menu").style.display = "flex";
}

// CAMBIAR FOTO DEL ENTRENADOR EN TIEMPO REAL
function actualizarFotoEntrenador() {
    const selector = document.getElementById("select-entrenador").value;
    const info = entrenadoresData[selector];
    
    const previewDiv = document.getElementById("preview-foto-entrenador");
    const textoNombre = document.getElementById("nombre-entrenador-texto");
    
    if(info) {
        textoNombre.innerText = info.nombre;
        previewDiv.innerHTML = `<img src="${info.foto}" style="width:100%; height:100%; object-fit:cover;">`;
    }
}

// GENERADOR DINÁMICO DE HUECOS (SLOTS) SEGÚN LA FORMACIÓN TÁCTICA
function cambiarFormacionCampo() {
    const formacion = document.getElementById("select-alineacion").value;
    
    let numDefensas = 4;
    let numMedios = 4;
    let numDelanteros = 2;
    
    if (formacion === "433") {
        numDefensas = 4; numMedios = 3; numDelanteros = 3;
    } else if (formacion === "343") {
        numDefensas = 3; numMedios = 4; numDelanteros = 3;
    }

    // Dibujar cada línea del campo de juego
    dibujarLineaPosicion("contenedor-delanteros", "Delantero", "DL", numDelanteros);
    dibujarLineaPosicion("contenedor-mediocampistas", "Centrocampista", "MD", numMedios);
    dibujarLineaPosicion("contenedor-defensas", "Defensa", "DF", numDefensas);
    dibujarLineaPosicion("contenedor-portero", "Portero", "PR", 1);

    // Volver a activar los buscadores predictivos sobre las casillas nuevas creadas
    activarBuscadoresCampo();
}

function dibujarLineaPosicion(idContenedor, posicionReal, prefijoLabel, cantidad) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = ""; // Limpiar los antiguos slots

    for (let i = 1; i <= cantidad; i++) {
        const slot = document.createElement("div");
        slot.className = "slot-jugador";
        slot.setAttribute("data-posicion", posicionReal);
        
        slot.innerHTML = `
            <div class="vista-foto-slot" id="foto-${prefijoLabel.toLowerCase()}${i}">❔</div>
            <input type="text" class="busc-campo" id="input-${prefijoLabel.toLowerCase()}${i}" placeholder="Buscar ${prefijoLabel}..." autocomplete="off">
            <div class="sugerencias-campo" style="display:none;"></div>
        `;
        contenedor.appendChild(slot);
    }
}

// PROGRAMACIÓN DE LOS BUSCADORES INTERNOS DEL CAMPO
function activarBuscadoresCampo() {
    const slots = document.querySelectorAll(".slot-jugador");

    slots.forEach(slot => {
        const input = slot.querySelector(".busc-campo");
        const sugerenciasDiv = slot.querySelector(".sugerencias-campo");
        const fotoDiv = slot.querySelector(".vista-foto-slot");
        const posRequerida = slot.getAttribute("data-posicion");

        if (input.dataset.activo === "true") return;
        input.dataset.activo = "true";

        input.addEventListener("input", () => {
            const texto = input.value.toLowerCase();
            sugerenciasDiv.innerHTML = "";
            if (!texto) {
                sugerenciasDiv.style.display = "none";
                return;
            }

            // Filtra los personajes globales de script.js
            const filtrados = jugadores.filter(j => 
                j.posicion === posRequerida && 
                j.nombre.toLowerCase().includes(texto)
            );

            if (filtrados.length === 0) {
                sugerenciasDiv.style.display = "none";
                return;
            }

            sugerenciasDiv.style.display = "block";

            filtrados.forEach(j => {
                const item = document.createElement("div");
                item.style.padding = "6px";
                item.style.cursor = "pointer";
                item.style.display = "flex";
                item.style.alignItems = "center";
                item.style.borderBottom = "1px solid #3a506b";
                item.style.background = "#1c2541";
                
                const imgHtml = j.foto ? `<img src="${j.foto}" style="width:20px; height:20px; border-radius:3px; margin-right:6px; object-fit:cover;">` : '';
                item.innerHTML = `${imgHtml}<span>${j.nombre}</span>`;

                item.addEventListener("click", () => {
                    input.value = j.nombre;
                    sugerenciasDiv.innerHTML = "";
                    sugerenciasDiv.style.display = "none";
                    if (j.foto) {
                        fotoDiv.innerHTML = `<img src="${j.foto}" style="width:100%; height:100%; object-fit:cover;">`;
                    }
                });

                sugerenciasDiv.appendChild(item);
            });
        });

        document.addEventListener("click", (e) => {
            if (!slot.contains(e.target)) {
                sugerenciasDiv.innerHTML = "";
                sugerenciasDiv.style.display = "none";
            }
        });
    });
}

function exportarAlineacion() {
    const nombreEquipo = document.getElementById("input-nombre-equipo").value || "Mi Equipo Ideal";
    const entrenadorSelect = document.getElementById("select-entrenador").value;
    const entrenadorNombre = entrenadoresData[entrenadorSelect].nombre;
    const formacionTexto = document.getElementById("select-alineacion").options[document.getElementById("select-alineacion").selectedIndex].text;

    let mensaje = `📋 ${nombreEquipo.toUpperCase()} 📋\n`;
    mensaje += `👴 Entrenador: ${entrenadorNombre}\n`;
    mensaje += `📐 Táctica: ${formacionTexto}\n\n`;

    const inputs = document.querySelectorAll(".busc-campo");
    mensaje += `⚽ JUGADORES ELEGIDOS:\n`;
    inputs.forEach(inp => {
        if (inp.value) {
            mensaje += `   - ${inp.value}\n`;
        }
    });

    alert(mensaje);
}
// ==========================================
// MODO 4: ¿QUIÉN ES MEJOR? (DUELOS)
// ==========================================
const fotosExtraDuelos = {
    "Shawn Froste": "shawn.webp",
    "Hector Helio": "hector.webp",
    "Jude Sharp": "jude.webp",
    "Caleb Stonewall": "caleb.webp",
    "Xavier Foster": "xavier.webp",
    "Torch": "torch.webp",
    "Gazelle": "gazelle.webp",
    "Paolo Bianchi": "paolo.webp",
    "Edgar Partinus": "edgar.webp",
    "Arion Sherwind": "arion.webp",
    "Victor Blade": "victor.webp",
    "Bai Long": "bailong.webp",
    "Tezcat": "tezcat.webp",
    "Zanark Avalonic": "zanark.webp",
    "Simeon Ayp (Saru)": "saru.webp",
    "Fei Rune": "fei.webp",
    "Sol Daystar": "sol.webp",
    "Riccardo Di Rigo": "riccardo.webp",
    "Goldie Lemmon": "goldie.webp",
    "Gabriel García (Gabi)": "gabi.webp",
    "Jean-Pierre Lapin (JP)": "jp.webp",
    "Terry Archibald": "terry.webp",
    "Ozrock Varga": "ozrock.webp",
    "Sonny Wright (Asuto)": "asuto.webp",
    "Elliot Ember (Haizaki)": "haizaki.webp",
    "Heath Moore (Nosaka)": "nosaka.webp",
    "Aiden Froste": "aiden.webp"
};

const duelosPersonalizados = [
    { jugador1: "Axel Blaze", porcentaje1: 56, jugador2: "Shawn Froste", porcentaje2: 44 },
    { jugador1: "Mark Evans", porcentaje1: 71, jugador2: "Hector Helio", porcentaje2: 29 },
    { jugador1: "Jude Sharp", porcentaje1: 62, jugador2: "Caleb Stonewall", porcentaje2: 38 },
    { jugador1: "Byron Love", porcentaje1: 63, jugador2: "Xavier Foster", porcentaje2: 37 },
    { jugador1: "Torch", porcentaje1: 61, jugador2: "Gazelle", porcentaje2: 39 },
    { jugador1: "Paolo Bianchi", porcentaje1: 89, jugador2: "Edgar Partinus", porcentaje2: 11 },
    { jugador1: "Bash Lancer", porcentaje1: 30, jugador2: "Mark Evans", porcentaje2: 70 },
    { jugador1: "Arion Sherwind", porcentaje1: 53, jugador2: "Victor Blade", porcentaje2: 47 },
    { jugador1: "Bai Long", porcentaje1: 64, jugador2: "Tezcat", porcentaje2: 36 },
    { jugador1: "Zanark Avalonic", porcentaje1: 68, jugador2: "Simeon Ayp", porcentaje2: 32 },
    { jugador1: "Fei Rune", porcentaje1: 36, jugador2: "Sol Daystar", porcentaje2: 64 },
    { jugador1: "Riccardo Di Rigo", porcentaje1: 28, jugador2: "Jude Sharp", porcentaje2: 72 },
    { jugador1: "Goldie Lemmon", porcentaje1: 42, jugador2: "Gabriel García", porcentaje2: 58 },
    { jugador1: "Jean-Pierre Lapin", porcentaje1: 55, jugador2: "Terry Archibald", porcentaje2: 45 },
    { jugador1: "Ozrock Varga", porcentaje1: 33, jugador2: "Zanark Avalonic", porcentaje2: 67 },
    { jugador1: "Sonny Wright", porcentaje1: 25, jugador2: "Elliot Ember (Haizaki)", porcentaje2: 75 },
    { jugador1: "Heath Moore", porcentaje1: 24, jugador2: "Jude Sharp", porcentaje2: 76 },
    { jugador1: "Axel Blaze", porcentaje1: 72, jugador2: "Elliot Ember", porcentaje2: 28 },
    { jugador1: "Shawn Froste", porcentaje1: 45, jugador2: "Aiden Froste", porcentaje2: 55 },
    { jugador1: "Mark Evans", porcentaje1: 78, jugador2: "Arion Sherwind", porcentaje2: 22 }
];

let indiceDueloActual = 0;
let dueloRespondido = false;

function iniciarDuelos() {
    indiceDueloActual = 0;
    cargarDueloActual();
}

function obtenerDatosJugadorDuelo(nombre) {
    const enLista = jugadores.find(j => j.nombre === nombre);
    if (enLista) return enLista;
    return { nombre: nombre, equipo: "", foto: fotosExtraDuelos[nombre] || "" };
}

function cargarDueloActual() {
    dueloRespondido = false;
    document.getElementById("btn-siguiente-duelo").style.display = "none";
    document.getElementById("duelo-porcentaje-1").style.display = "none";
    document.getElementById("duelo-porcentaje-2").style.display = "none";
    document.getElementById("duelo-card-1").style.borderColor = "#4cc9f0";
    document.getElementById("duelo-card-2").style.borderColor = "#4cc9f0";

    const duelo = duelosPersonalizados[indiceDueloActual];
    const j1 = obtenerDatosJugadorDuelo(duelo.jugador1);
    const j2 = obtenerDatosJugadorDuelo(duelo.jugador2);

    document.getElementById("duelo-img-1").src = j1.foto;
    document.getElementById("duelo-nombre-1").innerText = j1.nombre;
    document.getElementById("duelo-equipo-1").innerText = j1.equipo;
    document.getElementById("duelo-porcentaje-1").innerText = duelo.porcentaje1 + "%";

    document.getElementById("duelo-img-2").src = j2.foto;
    document.getElementById("duelo-nombre-2").innerText = j2.nombre;
    document.getElementById("duelo-equipo-2").innerText = j2.equipo;
    document.getElementById("duelo-porcentaje-2").innerText = duelo.porcentaje2 + "%";
}

function elegirEnDuelo(opcion) {
    if (dueloRespondido) return;
    dueloRespondido = true;

    document.getElementById("duelo-porcentaje-1").style.display = "block";
    document.getElementById("duelo-porcentaje-2").style.display = "block";

    if (opcion === 1) {
        document.getElementById("duelo-card-1").style.borderColor = "#2a9d8f";
    } else {
        document.getElementById("duelo-card-2").style.borderColor = "#2a9d8f";
    }

    document.getElementById("btn-siguiente-duelo").style.display = "inline-block";
}

function siguienteDuelo() {
    indiceDueloActual++;
    if (indiceDueloActual >= duelosPersonalizados.length) {
        indiceDueloActual = 0;
    }
    cargarDueloActual();
}
