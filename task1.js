//Task 1: Declaración vs Expresión de Funciones (8 minutos)
//JavaScript ofrece múltiples formas de definir funciones, cada una con características específicas sobre hoisting, scope y uso.

//Function Declaration (Declaración de Función)

   // Declaración tradicional - se puede llamar antes de definirla
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana")); // ✅ Funciona

// Características:
// - Hoisting: se "eleva" al inicio del scope
// - Puede ser llamada antes de su definición
// - Tiene su propio scope


//Function Expression (Expresión de Función)

// Función asignada a una variable
const despedir = function(nombre) {
  return `Adiós, ${nombre}!`;
};

console.log(despedir("Carlos")); // ✅ Funciona

// Función anónima
const multiplicar = function(a, b) {
  return a * b;
};

// Función nombrada (útil para debugging)
const dividir = function dividirNumeros(a, b) {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
};

// Características:
// - No hoisting: debe definirse antes de usarse
// - Puede ser anónima o nombrada
// - Se comporta como una variable



// Named Function Expression

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Puede referenciarse a sí misma
};



console.log("factorial",factorial(5)); // 120
console.log("multiplicar:", multiplicar(4, 5)); // Salida: multiplicar: 20
console.log("dividir:", dividir(10, 2)); // Salida: multiplicar: 20