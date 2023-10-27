/* ENUNCIADO */
let puntuaciones = [
  { nombre: "Pablo", puntuacion: 180 },
  { nombre: "Javier", puntuacion: 270 },
  { nombre: "Raquel", puntuacion: 70 },
  { nombre: "Mario", puntuacion: 310 },
  { nombre: "Miriam", puntuacion: 90 },
  { nombre: "Fernando", puntuacion: 105 },
  { nombre: "Laura", puntuacion: 210 },
  { nombre: "Julian", puntuacion: 520 },
];

/* EJERCICIO 4 */
//  Mostrar cada elemento del array dado
console.log(puntuaciones);

// Crear función jugadoresTop
function jugadoresTop(array) {
  let jugadoresTopArray = array.filter((jugador) => jugador.puntuacion > 100);
  return jugadoresTopArray;
}

// Mostrar cada elemento del nuevo array.
console.log(jugadoresTop(puntuaciones));
