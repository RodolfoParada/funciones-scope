// Task 2: Arrow Functions - Sintaxis Moderna (8 minutos)
//Las arrow functions introdujeron una sintaxis más concisa y cambiaron el comportamiento de this. Son especialmente útiles en callbacks y funciones pequeñas.

//Sintaxis Básica

// Función tradicional
function sumarTradicional(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumarFlechaCompleta = (a, b) => {
  return a + b;
};

// Arrow function concisa (retorno implícito)
const sumarFlechaConcisa = (a, b) => a + b;

// Un solo parámetro (paréntesis opcionales)
const cuadrado = x => x * x;

// Sin parámetros
const saludar = () => "Hola Mundo!";

//Comportamiento de this en Arrow Functions
//En funciones tradicionales, this depende de cómo se llama la función:

console.log("sumarTradicional", sumarTradicional(2,2))
console.log("sumarFlechaCompleta", sumarFlechaCompleta(2,2))
console.log("sumarFlechaConcisa", sumarFlechaConcisa(2,2))
console.log("sumarCuadrado", cuadrado(2,2))
console.log("saludar", saludar("Hola a Kranio"))


const objeto = {
  nombre: "Nombre Objeto",
  funcionNormal: function() {
    console.log("Función Normal",this.nombre); // "Mi Objeto"
  },
  funcionFlecha: () => {
    console.log("Función Flecha",this.nombre); // undefined (o valor del scope externo)
  }
};

objeto.funcionNormal(); // "Mi Objeto"
objeto.funcionFlecha(); // undefined

//Arrow functions heredan this del scope donde se definieron:
function Temporizador() {
  this.segundos = 0;

  setInterval(() => {
    this.segundos++;
    console.log(this.segundos);
  }, 1000);
}

const timer = new Temporizador(); // this.segundos se incrementa correctamente

//Cuándo Usar Arrow Functions
// ✅ Ideal para callbacks
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);

// ✅ Para funciones pequeñas
const esPar = num => num % 2 === 0;

// ✅ Cuando necesitas el this del scope padre
class Componente {
  constructor() {
    this.datos = [];
  }

  cargarDatos() {
    fetch('/api/datos')
      .then(response => response.json())
      .then(datos => {
        this.datos = datos; // this se refiere al objeto Componente
      });
  }
}

// ❌ Evitar en métodos de objeto (pierdes this)
const objeto1 = {
  nombre: "Test",
  metodo: () => console.log(this.nombre) // this no se refiere al objeto
};