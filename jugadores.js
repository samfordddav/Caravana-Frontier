
const jugadores = [
    // === EL OGRO ===
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

    // === VETERANOS ===
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

    // === KIDS FC ===
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
    { nombre: "Mitch Grumble", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "grumble.webp", logoEquipo: "logo_kids_fc.webp" },

    // === BRAIN ===
    { nombre: "Thomas Feldt", equipo: "Brain", posicion: "Portero", elemento: "Bosque", foto: "feldt.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Harry Leading", equipo: "Brain", posicion: "Defensa", elemento: "Viento", foto: "leading.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Terry Stronger", equipo: "Brain", posicion: "Defensa", elemento: "Fuego", foto: "stronger.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Philip Marvel", equipo: "Brain", posicion: "Defensa", elemento: "Tierra", foto: "marvel.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Noel Good", equipo: "Brain", posicion: "Defensa", elemento: "Bosque", foto: "good.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Tyron Rock", equipo: "Brain", posicion: "Centrocampista", elemento: "Fuego", foto: "rock.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Francis Tell", equipo: "Brain", posicion: "Centrocampista", elemento: "Bosque", foto: "tell.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Samuel Buster", equipo: "Brain", posicion: "Centrocampista", elemento: "Fuego", foto: "buster.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Jonathan Seller", equipo: "Brain", posicion: "Delantero", elemento: "Viento", foto: "seller.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Victor Kind", equipo: "Brain", posicion: "Centrocampista", elemento: "Bosque", foto: "kind.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Neil Turner", equipo: "Brain", posicion: "Delantero", elemento: "Fuego", foto: "turner.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Reg Underwood", equipo: "Brain", posicion: "Portero", elemento: "Bosque", foto: "underwood.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Patrick Stiller", equipo: "Brain", posicion: "Centrocampista", elemento: "Viento", foto: "stiller.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Charles Oughtry", equipo: "Brain", posicion: "Centrocampista", elemento: "Tierra", foto: "oughtry.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Clive Mooney", equipo: "Brain", posicion: "Delantero", elemento: "Fuego", foto: "mooney.webp", logoEquipo: "logo_brain.webp" },
    { nombre: "Neil Waters", equipo: "Brain", posicion: "Defensa", elemento: "Bosque", foto: "waters.webp", logoEquipo: "logo_brain.webp" },

    // === FARM ===
    { nombre: "Albert Green", equipo: "Farm", posicion: "Portero", elemento: "Fuego", foto: "green.webp", logoEquipo: "logo_farm.webp" },
    { nombre: "Seward Hayseed", equipo: "Farm", posicion: "Defensa", elemento: "Tierra", foto: "hayseed.webp", logoEquipo: "logo_farm.webp" },
    { nombre: "Kent Work", equipo: "Farm", posicion: "Defensa", elemento: "Bosque", foto: "work.webp", logoEquipo: "logo_farm.webp" },
    { nombre: "Mark Hillvalley", equipo: "Farm", posicion: "Defensa", elemento: "Tierra", foto: "hillvalley.webp", logoEquipo: "logo_farm.webp" },
Usa el código con precaución.
{ nombre: "Herb Sherman", equipo: "Farm", posicion: "Defensa", elemento: "Fuego", foto: "sherman.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Joe Small", equipo: "Farm", posicion: "Centrocampista", elemento: "Tierra", foto: "small.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Ike Steiner", equipo: "Farm", posicion: "Centrocampista", elemento: "Bosque", foto: "steiner.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Orville Newman", equipo: "Farm", posicion: "Centrocampista", elemento: "Fuego", foto: "newman_o.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Tom Walters", equipo: "Farm", posicion: "Centrocampista", elemento: "Tierra", foto: "walters.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Daniel Dawson", equipo: "Farm", posicion: "Centrocampista", elemento: "Viento", foto: "dawson.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Stuart Racoonfur", equipo: "Farm", posicion: "Delantero", elemento: "Bosque", foto: "racoonfur.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Lorne Mower", equipo: "Farm", posicion: "Portero", elemento: "Tierra", foto: "mower.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Homer Grower", equipo: "Farm", posicion: "Defensa", elemento: "Tierra", foto: "grower.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Rolf Howells", equipo: "Farm", posicion: "Defensa", elemento: "Viento", foto: "howells.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Luke Lively", equipo: "Farm", posicion: "Defensa", elemento: "Bosque", foto: "lively.webp", logoEquipo: "logo_farm.webp" },
{ nombre: "Ben Nevis", equipo: "Farm", posicion: "Defensa", elemento: "Viento", foto: "nevis.webp", logoEquipo: "logo_farm.webp" },
// === KIRKWOOD ===
{ nombre: "John Neville", equipo: "Kirkwood", posicion: "Portero", elemento: "Fuego", foto: "neville.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Malcolm Night", equipo: "Kirkwood", posicion: "Defensa", elemento: "Fuego", foto: "malcolm.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Alfred Meenan", equipo: "Kirkwood", posicion: "Defensa", elemento: "Bosque", foto: "meenan.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Dan Mirthful", equipo: "Kirkwood", posicion: "Defensa", elemento: "Bosque", foto: "mirthful.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Ricky Clover", equipo: "Kirkwood", posicion: "Defensa", elemento: "Tierra", foto: "clover.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Toby Damian", equipo: "Kirkwood", posicion: "Centrocampista", elemento: "Viento", foto: "damian.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "York Nashmith", equipo: "Kirkwood", posicion: "Centrocampista", elemento: "Bosque", foto: "nashmith.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Zachary Moore", equipo: "Kirkwood", posicion: "Centrocampista", elemento: "Bosque", foto: "moore.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Marvin Murdock", equipo: "Kirkwood", posicion: "Delantero", elemento: "Fuego", foto: "marvin.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Thomas Murdock", equipo: "Kirkwood", posicion: "Delantero", elemento: "Viento", foto: "thomas_m.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Tyler Murdock", equipo: "Kirkwood", posicion: "Delantero", elemento: "Tierra", foto: "tyler.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Simon Calier", equipo: "Kirkwood", posicion: "Portero", elemento: "Bosque", foto: "calier.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Brody Gloom", equipo: "Kirkwood", posicion: "Centrocampista", elemento: "Tierra", foto: "gloom.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Victor Talis", equipo: "Kirkwood", posicion: "Centrocampista", elemento: "Bosque", foto: "talis.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Eren Middleton", equipo: "Kirkwood", posicion: "Defensa", elemento: "Tierra", foto: "middleton.webp", logoEquipo: "logo_kirkwood.webp" },
{ nombre: "Peter Wells", equipo: "Kirkwood", posicion: "Defensa", elemento: "Viento", foto: "wells.webp", logoEquipo: "logo_kirkwood.webp" },
// === OCCULT ===
{ nombre: "Nathan Jones", equipo: "Occult", posicion: "Portero", elemento: "Viento", foto: "jones_n.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Russell Walk", equipo: "Occult", posicion: "Defensa", elemento: "Bosque", foto: "walk.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Jason Jones", equipo: "Occult", posicion: "Defensa", elemento: "Viento", foto: "jones_j.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Ken Furan", equipo: "Occult", posicion: "Defensa", elemento: "Tierra", foto: "furan.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Jerry Fulton", equipo: "Occult", posicion: "Defensa", elemento: "Fuego", foto: "fulton.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Ray Mannings", equipo: "Occult", posicion: "Centrocampista", elemento: "Viento", foto: "mannings.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Robert Mayer", equipo: "Occult", posicion: "Centrocampista", elemento: "Bosque", foto: "mayer.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Alexander Brave", equipo: "Occult", posicion: "Centrocampista", elemento: "Viento", foto: "brave.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Johan Tassman", equipo: "Occult", posicion: "Delantero", elemento: "Bosque", foto: "tassman.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Troy Moon", equipo: "Occult", posicion: "Centrocampista", elemento: "Fuego", foto: "moon.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Burt Wolf", equipo: "Occult", posicion: "Centrocampista", elemento: "Tierra", foto: "wolf.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Rob Crombie", equipo: "Occult", posicion: "Portero", elemento: "Tierra", foto: "crombie.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Chuck Dollman", equipo: "Occult", posicion: "Delantero", elemento: "Bosque", foto: "dollman.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Uxley Allen", equipo: "Occult", posicion: "Delantero", elemento: "Viento", foto: "allen.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Phil Noir", equipo: "Occult", posicion: "Delantero", elemento: "Bosque", foto: "noir.webp", logoEquipo: "logo_occult.webp" },
{ nombre: "Mick Askley", equipo: "Occult", posicion: "Centrocampista", elemento: "Bosque", foto: "askley.webp", logoEquipo: "logo_occult.webp" },
// === OTAKU ===
{ nombre: "Sam Idol", equipo: "Otaku", posicion: "Portero", elemento: "Tierra", foto: "idol.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Marcus Train", equipo: "Otaku", posicion: "Defensa", elemento: "Fuego", foto: "train.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Light Nobel", equipo: "Otaku", posicion: "Centrocampista", elemento: "Bosque", foto: "nobel.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Walter Valiant", equipo: "Otaku", posicion: "Centrocampista", elemento: "Fuego", foto: "valiant.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Spencer Gates", equipo: "Otaku", posicion: "Defensa", elemento: "Tierra", foto: "gates.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Josh Spear", equipo: "Otaku", posicion: "Delantero", elemento: "Bosque", foto: "spear.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Gaby Farmer", equipo: "Otaku", posicion: "Delantero", elemento: "Viento", foto: "farmer.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Anthony Woodbridge", equipo: "Otaku", posicion: "Centrocampista", elemento: "Viento", foto: "woodbridge.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Gus Gamer", equipo: "Otaku", posicion: "Delantero", elemento: "Fuego", foto: "gamer.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Mark Gambling", equipo: "Otaku", posicion: "Delantero", elemento: "Viento", foto: "gambling.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Theodore Master", equipo: "Otaku", posicion: "Delantero", elemento: "Bosque", foto: "master_t.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Grant Eldorado", equipo: "Otaku", posicion: "Portero", elemento: "Fuego", foto: "eldorado.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Ham Signalman", equipo: "Otaku", posicion: "Centrocampista", elemento: "Viento", foto: "signalman.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Bill Formby", equipo: "Otaku", posicion: "Defensa", elemento: "Tierra", foto: "formby.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Mike Vox", equipo: "Otaku", posicion: "Defensa", elemento: "Viento", foto: "vox.webp", logoEquipo: "logo_otaku.webp" },
{ nombre: "Ollie Webb", equipo: "Otaku", posicion: "Defensa", elemento: "Bosque", foto: "webb.webp", logoEquipo: "logo_otaku.webp" },
// === RAIMON ===
{ nombre: "Mark Evans", equipo: "Raimon", posicion: "Portero", elemento: "Tierra", foto: "mark.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Nathan Swift", equipo: "Raimon", posicion: "Defensa", elemento: "Viento", foto: "nathan.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Jack Wallside", equipo: "Raimon", posicion: "Defensa", elemento: "Tierra", foto: "jack.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Jim Wraith", equipo: "Raimon", posicion: "Defensa", elemento: "Bosque", foto: "jim.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Tod Ironside", equipo: "Raimon", posicion: "Defensa", elemento: "Fuego", foto: "tod.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Steve Grim", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "steve.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Tim Saunders", equipo: "Raimon", posicion: "Centrocampista", elemento: "Bosque", foto: "timmy.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Sam Kincaid", equipo: "Raimon", posicion: "Centrocampista", elemento: "Fuego", foto: "sam.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Paul Peabody", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "peabody.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Maxwell Carson", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "max.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Axel Blaze", equipo: "Raimon", posicion: "Delantero", elemento: "Fuego", foto: "axel.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Kevin Dragonfly", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "kevin.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "William Glass", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "willy.webp", logoEquipo: "logo_raimon.webp" },
{ nombre: "Shadow Cimmerian", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "shadow.webp", logoEquipo: "logo_raimon.webp" },
// === SHURIKEN ===
{ nombre: "Morgan Sanders", equipo: "Shuriken", posicion: "Portero", elemento: "Bosque", foto: "sanders.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Newton Flust", equipo: "Shuriken", posicion: "Defensa", elemento: "Tierra", foto: "flust.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Jim Hillfort", equipo: "Shuriken", posicion: "Defensa", elemento: "Viento", foto: "hillfort.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Galen Thunderbird", equipo: "Shuriken", posicion: "Defensa", elemento: "Tierra", foto: "thunderbird.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Finn Stoned", equipo: "Shuriken", posicion: "Defensa", elemento: "Fuego", foto: "stoned.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Phil Wingate", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Tierra", foto: "wingate.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Jez Shell", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "shell.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Jupiter Jumper", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "jumper.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Sam Samurai", equipo: "Shuriken", posicion: "Delantero", elemento: "Bosque", foto: "samurai.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Hank Sullivan", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Bosque", foto: "sullivan.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Sail Bluesea", equipo: "Shuriken", posicion: "Delantero", elemento: "Fuego", foto: "bluesea.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Kevin Castle", equipo: "Shuriken", posicion: "Portero", elemento: "Viento", foto: "castle.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "John Reynolds", equipo: "Shuriken", posicion: "Delantero", elemento: "Viento", foto: "reynolds.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Dan Hopper", equipo: "Shuriken", posicion: "Defensa", elemento: "Tierra", foto: "hopper.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Cal Trops", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Bosque", foto: "trops.webp", logoEquipo: "logo_shuriken.webp" },
{ nombre: "Winston Falls", equipo: "Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "falls.webp", logoEquipo: "logo_shuriken.webp" },
// === UMBRELLA ===
{ nombre: "Joe Ingram", equipo: "Umbrella", posicion: "Portero", elemento: "Fuego", foto: "ingram.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Kendall Sefton", equipo: "Umbrella", posicion: "Defensa", elemento: "Viento", foto: "sefton.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Jason Strike", equipo: "Umbrella", posicion: "Defensa", elemento: "Fuego", foto: "strike.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Norman Porter", equipo: "Umbrella", posicion: "Defensa", elemento: "Tierra", foto: "porter.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Maxwell Claus", equipo: "Umbrella", posicion: "Defensa", elemento: "Bosque", foto: "claus_m.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Bruce Chaney", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Bosque", foto: "chaney.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Leroy Rhymes", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Viento", foto: "rhymes.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Mildford Scott", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Bosque", foto: "scott.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Julio Edmonds", equipo: "Umbrella", posicion: "Delantero", elemento: "Fuego", foto: "edmonds.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Cameron Morefield", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Viento", foto: "morefield.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Greg Bernard", equipo: "Umbrella", posicion: "Delantero", elemento: "Bosque", foto: "bernard.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Peter Banker", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Viento", foto: "banker.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Saul Tunk", equipo: "Umbrella", posicion: "Centrocampista", elemento: "Fuego", foto: "tunk.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Alan Most", equipo: "Umbrella", posicion: "Defensa", elemento: "Tierra", foto: "most.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Paul Caperock", equipo: "Umbrella", posicion: "Defensa", elemento: "Viento", foto: "caperock.webp", logoEquipo: "logo_umbrella.webp" },
{ nombre: "Julius Molehill", equipo: "Umbrella", posicion: "Defensa", elemento: "Viento", foto: "molehill.webp", logoEquipo: "logo_umbrella.webp" },
// === WILD ===
{ nombre: "Charlie Boardfield", equipo: "Wild", posicion: "Portero", elemento: "Fuego", foto: "boardfield.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Hugo Talgeese", equipo: "Wild", posicion: "Centrocampista", elemento: "Fuego", foto: "talgeese.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Wilson Fishman", equipo: "Wild", posicion: "Defensa", elemento: "Bosque", foto: "fishman.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Peter Johnson", equipo: "Wild", posicion: "Defensa", elemento: "Bosque", foto: "johnson.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Leonard O'Shea", equipo: "Wild", posicion: "Defensa", elemento: "Tierra", foto: "oshea.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Cham Lion", equipo: "Wild", posicion: "Centrocampista", elemento: "Viento", foto: "lion.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Steve Eagle", equipo: "Wild", posicion: "Centrocampista", elemento: "Viento", foto: "eagle.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Bruce Monkey", equipo: "Wild", posicion: "Centrocampista", elemento: "Viento", foto: "monkey.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Gary Lancaster", equipo: "Wild", posicion: "Delantero", elemento: "Tierra", foto: "lancaster.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Harry Snake", equipo: "Wild", posicion: "Delantero", elemento: "Bosque", foto: "snake.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Adrian Speed", equipo: "Wild", posicion: "Delantero", elemento: "Viento", foto: "speed.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Chad Bullford", equipo: "Wild", posicion: "Portero", elemento: "Tierra", foto: "bullford.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Alan Coe", equipo: "Wild", posicion: "Centrocampista", elemento: "Bosque", foto: "coe.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Philip Anders", equipo: "Wild", posicion: "Delantero", elemento: "Fuego", foto: "anders.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Rocky Rackham", equipo: "Wild", posicion: "Defensa", elemento: "Bosque", foto: "rackham.webp", logoEquipo: "logo_wild.webp" },
{ nombre: "Matt Mouseman", equipo: "Wild", posicion: "Centrocampista", elemento: "Tierra", foto: "mouseman.webp", logoEquipo: "logo_wild.webp" },
// === ZEUS ===
{ nombre: "Paul Siddon", equipo: "Zeus", posicion: "Portero", elemento: "Tierra", foto: "siddon.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Apollo Light", equipo: "Zeus", posicion: "Defensa", elemento: "Bosque", foto: "light_a.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Jeff Iron", equipo: "Zeus", posicion: "Defensa", elemento: "Fuego", foto: "iron.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Lane War", equipo: "Zeus", posicion: "Defensa", elemento: "Tierra", foto: "war.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Danny Wood", equipo: "Zeus", posicion: "Defensa", elemento: "Viento", foto: "wood_d.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Artie Mishman", equipo: "Zeus", posicion: "Centrocampista", elemento: "Viento", foto: "mishman.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Arion Matlock", equipo: "Zeus", posicion: "Centrocampista", elemento: "Viento", foto: "matlock.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Wesley Knox", equipo: "Zeus", posicion: "Centrocampista", elemento: "Bosque", foto: "knox.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Jonas Demetrius", equipo: "Zeus", posicion: "Delantero", elemento: "Fuego", foto: "demetrius.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Byron Love", equipo: "Zeus", posicion: "Centrocampista", elemento: "Bosque", foto: "byron.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Henry House", equipo: "Zeus", posicion: "Centrocampista", elemento: "Fuego", foto: "house.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Iggy Russ", equipo: "Zeus", posicion: "Portero", elemento: "Viento", foto: "russ.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Gus Heeley", equipo: "Zeus", posicion: "Delantero", elemento: "Tierra", foto: "heeley.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Harry Closs", equipo: "Zeus", posicion: "Defensa", elemento: "Fuego", foto: "closs.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Andy Chronic", equipo: "Zeus", posicion: "Defensa", elemento: "Bosque", foto: "chronic.webp", logoEquipo: "logo_zeus.webp" },
{ nombre: "Ned Yousef", equipo: "Zeus", posicion: "Centrocampista", elemento: "Tierra", foto: "yousef.webp", logoEquipo: "logo_zeus.webp" },
// === ROYAL ACADEMY ===
{ nombre: "Joseph King", equipo: "Royal Academy", posicion: "Portero", elemento: "Fuego", foto: "king.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Peter Drent", equipo: "Royal Academy", posicion: "Defensa", elemento: "Tierra", foto: "drent.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Ben Simmons", equipo: "Royal Academy", posicion: "Defensa", elemento: "Bosque", foto: "simmons.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Alan Master", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "master.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Gus Martin", equipo: "Royal Academy", posicion: "Defensa", elemento: "Bosque", foto: "martin.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Herman Waldon", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "waldon.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "John Bloom", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Fuego", foto: "bloom.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Derek Swing", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "swing.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Daniel Hatch", equipo: "Royal Academy", posicion: "Delantero", elemento: "Bosque", foto: "hatch.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "David Samford", equipo: "Royal Academy", posicion: "Delantero", elemento: "Bosque", foto: "samford.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Bob Carlton", equipo: "Royal Academy", posicion: "Portero", elemento: "Bosque", foto: "carlton.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Cliff Tomlinson", equipo: "Royal Academy", posicion: "Delantero", elemento: "Viento", foto: "tomlinson.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Jim Lawrenson", equipo: "Royal Academy", posicion: "Delantero", elemento: "Viento", foto: "lawrenson.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Barry Potts", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "potts.webp", logoEquipo: "logo_royal.webp" },
{ nombre: "Steve Ingham", equipo: "Royal Academy", posicion: "Delantero", elemento: "Tierra", foto: "ingham.webp", logoEquipo: "logo_royal.webp" },
// === SALLY'S ===
{ nombre: "Suzanne Yuma", equipo: "Sally's", posicion: "Portero", elemento: "Tierra", foto: "yuma.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Tammy Fielding", equipo: "Sally's", posicion: "Defensa", elemento: "Bosque", foto: "fielding.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Alex Lovely", equipo: "Sally's", posicion: "Defensa", elemento: "Viento", foto: "lovely.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Louis Hillside", equipo: "Sally's", posicion: "Defensa", elemento: "Fuego", foto: "hillside.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Ness Sheldon", equipo: "Sally's", posicion: "Defensa", elemento: "Tierra", foto: "sheldon.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Lizzy Squirrel", equipo: "Sally's", posicion: "Centrocampista", elemento: "Viento", foto: "squirrel.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Kippy Jones", equipo: "Sally's", posicion: "Centrocampista", elemento: "Bosque", foto: "jones_k.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Fayette Riversong", equipo: "Sally's", posicion: "Centrocampista", elemento: "Tierra", foto: "riversong.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Samantha Moonlight", equipo: "Sally's", posicion: "Delantero", elemento: "Viento", foto: "moonlight.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Mitch Sandstone", equipo: "Sally's", posicion: "Centrocampista", elemento: "Fuego", foto: "sandstone.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Eddie Prentice", equipo: "Sally's", posicion: "Delantero", elemento: "Tierra", foto: "prentice.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Alf Holmes", equipo: "Sally's", posicion: "Portero", elemento: "Viento", foto: "holmes.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Ian Stager", equipo: "Sally's", posicion: "Defensa", elemento: "Bosque", foto: "stager.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Fred Crumb", equipo: "Sally's", posicion: "Defensa", elemento: "Tierra", foto: "crumb.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Dough Baughan", equipo: "Sally's", posicion: "Delantero", elemento: "Viento", foto: "baughan.webp", logoEquipo: "logo_sallys.webp" },
{ nombre: "Pip Daltry", equipo: "Sally's", posicion: "Defensa", elemento: "Bosque", foto: "daltry.webp", logoEquipo: "logo_sallys.webp" }
];

---

### 📂 Archivo 2: `script.js`
*Borra completamente tu archivo `script.js` viejo de GitHub y pega esta lógica pura del juego.*

```javascript
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
    
    const listaHtml = document.getElementById("lista-intentos");
    if (listaHtml) listaHtml.innerHTML = "";
    
    const alertaHtml = document.getElementById("alerta-victoria");
    if (alertaHtml) alertaHtml.style.display = "none";
    
    const contenedorBuscador = document.getElementById("contenedor-buscador-juego");
    if (contenedorBuscador) contenedorBuscador.style.display = "block";
    
    const instrucHtml = document.getElementById("instrucciones-juego");
    if (instrucHtml) instrucHtml.innerText = `🎯 Reto del Día ${dia} activado. ¡Intenta adivinarlo!`;

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
    const panelDias = document.getElementById("panel-secciones-dias");
    const contenedorBuscador = document.getElementById("contenedor-buscador-juego");
    const instrucHtml = document.getElementById("instrucciones-juego");

    if (btnFacil) btnFacil.classList.remove("activo");
    if (btnMedio) btnMedio.classList.remove("activo");
    if (btnImp) btnImp.classList.remove("activo");
    if (avisoBloq) avisoBloq.style.display = "none";

    if (nivel === 'facil') {
        if (btnFacil) btnFacil.classList.add("activo");
        if (panelDias) panelDias.style.display = "block";
        if (instrucHtml) instrucHtml.innerText = "Selecciona un día del panel superior para empezar a jugar.";
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

📂 Archivo 3: index.html (Solo las etiquetas del final)

Abre tu archivo HTML, busca la parte de abajo donde llamas a los scripts y asegúrate de enlazarlos en esta secuencia exacta:
html
    <!-- Primero cargamos los datos y luego arrancamos el juego -->
    <script src="jugadores.js"></script>
    <script src="script.js"></script>
</body>
</html>
];
