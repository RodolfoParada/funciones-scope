//Un closure es una función que recuerda el entorno donde fue creada, 
// permitiendo acceder a variables del scope externo incluso 
// después de que ese scope haya terminado.

//¿Qué es un Closure?

function crearContador() {
  let contador = 0; // Variable en scope externo

  return function() { // Closure
    contador++; // Puede acceder a 'contador'
    return contador;
  };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

const contador2 = crearContador(); // Nuevo closure, nuevo contador
console.log(contador2()); // 1

// Scope Chain (Cadena de Scope)

const global = "Variable global";

function exterior() {
  const exteriorVar = "Variable exterior";

  function interior() {
    const interiorVar = "Variable interior";

    function masInterna() {
      // Puede acceder a todas las variables en la cadena de scope
      console.log(interiorVar);    // "Variable interior"
      console.log(exteriorVar);    // "Variable exterior"
      console.log(global);         // "Variable global"
    }

    return masInterna;
  }

  return interior;
}

const funcionClosure = exterior()();
funcionClosure();

//Casos de Uso Prácticos de Closures

//1. Encapsulamiento de datos (Module Pattern):
const contadorModulo = (function() {
  let contador = 0; // Privado

  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    decrementar: function() {
      contador--;
      return contador;
    },
    obtener: function() {
      return contador;
    }
  };
})();

contadorModulo.incrementar(); // 1
contadorModulo.incrementar(); // 2
console.log("contador modulo",contadorModulo.obtener()); // 2
// contador no es accesible directamente desde fuera


//2. Funciones factory:
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15


//3. Callbacks con estado:
function crearLogger(prefijo) {
  return function(mensaje) {
    console.log(`[${prefijo}] ${mensaje}`);
  };
}

const logError = crearLogger("ERROR");
const logInfo = crearLogger("INFO");

logError("Algo salió mal"); // [ERROR] Algo salió mal
logInfo("Operación exitosa"); // [INFO] Operación exitosa