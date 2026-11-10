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
    { nombre: "Caleb Stonewall", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Fuego", foto: "caleb.webp", logoEquipo: "logo_royal_redux.webp" },
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
    { nombre: "Edgar Partinus", equipo: "Los Emperadores", posicion: "Delantero", elemento: "Bosque", foto: "edgar.webp", logoEquipo: "logo_emperadores.webp" }
];

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
