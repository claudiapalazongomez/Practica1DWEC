/* EJERCICIO 2 */
// Clase Abominacion
class Abominacion extends Zombi {
  ataqueMultiple(objetivo) {
    for (let i = 0; i < 3; i++) {
      super.atacar(objetivo);
    }
  }
}

// Crear un objeto Abominacion
let abominacion1 = new Abominacion("Walker", 50, 25);

// Ejecutar el ataqueMultiple
abominacion1.ataqueMultiple(jugador2.nombre);
