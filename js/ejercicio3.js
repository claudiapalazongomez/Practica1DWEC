/* ENUNCIADO */
// Clase Consumible
class Consumible {
  constructor(nombre) {
    this.nombre = nombre;
  }
  consumir(jugador) {
    console.log(
      jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto"
    );
  }
}
let manzana = new Consumible("Manzana");
let ricardo = {
  nombre: "Ricardo",
  potencia: 1,
  puntosVida: 6,
  maxPuntosVida: 10,
  consumir: function (consumible) {
    consumible.consumir(this);
  },
};
ricardo.consumir(manzana);

/* EJERCICIO 3 */
// Clase Planta Curativa
class PlantaCurativa extends Consumible {
  constructor(nombre, poder) {
    super(nombre);
    this.poder = poder;
  }

  consumir(jugador) {
    if (this.poder + jugador.puntosVida > jugador.maxPuntosVida) {
      jugador.puntosVida = jugador.maxPuntosVida;
    } else {
      jugador.puntosVida += this.poder;
    }

    console.log(
      `${jugador.nombre} consume ${this.nombre} y ahora tiene ${jugador.puntosVida} puntos de vida`
    );
  }
}

// Crear una planta curativa
let hisopo = new PlantaCurativa("hisopo", 2);

// Ejecutar la función consumir(jugador)
ricardo.consumir(hisopo);
