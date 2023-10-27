/* ENUNCIADO */
// Clase Zombi
class Zombi {
  constructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }
  atacar(objetivo) {
    console.log(
      `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
    );
  }
}

/* EJERCICIO 1 */
// Clase Jugador
class Jugador {
  constructor(nombre, ocupacion, puntosVida, faccion) {
    this.nombre = nombre;
    this.ocupacion = ocupacion;
    this.puntosVida = puntosVida;
    this.faccion = faccion;
    this.maxPuntosVida = 100;
  }
  toString() {
    return `Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}, Máximo Puntos de Vida: ${this.maxPuntosVida}`;
  }
}

// Crear dos jugadores
let jugador1 = new Jugador("Claudia", "Programadora", 40, "Sur");
let jugador2 = new Jugador("Ana", "Psicóloga", 80, "Norte");
console.log(jugador1.toString());
console.log(jugador2.toString());
