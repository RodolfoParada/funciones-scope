//Task 4: Parámetros Avanzados (6 minutos)
//Parámetros por Defecto
function saludar(nombre = "Invitado", edad = 18) {
  return `Hola ${nombre}, tienes ${edad} años`;
}

console.log(saludar()); // "Hola Invitado, tienes 18 años"
console.log(saludar("Ana")); // "Hola Ana, tienes 18 años"
console.log(saludar("Carlos", 25)); // "Hola Carlos, tienes 25 años"


//Rest Parameters (Parámetros Rest)
// Recopila argumentos restantes en un array
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 3, 4, 5)); // 15

// Combinado con parámetros normales
function multiplicar(multiplicador, ...numeros) {
  return numeros.map(num => num * multiplicador);
}

console.log(multiplicar(2, 1, 2, 3)); // [2, 4, 6]


// Spread Operator (Operador de Expansión)
// Expandir arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Expandir objetos (ES2018+)
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const combinadoObj = { ...objeto1, ...objeto2 }; // { a: 1, b: 2, c: 3, d: 4 }

// En llamadas a funciones
function sumarTres(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(sumarTres(...numeros)); // 6