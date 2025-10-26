console.log("Hola Mundo");

console.log(2 + 2);

// comentarios de una sola linea
/* comentario de 
varias lineas */

var nombre = "Juan";
let edad = 30;
const PI1 = 3.1416;

// --------

let iva = 21;
iva = 10.5;
console.log(iva);

// ------

// conversion numerica:

let numero = parseInt("42") /* convierte sola la parte entera */
console.log(numero); // imprime 42
let numeroDecimal = parseFloat("42.5"); /* convierte un string a numero, permitiendo decimales */
console.log(numeroDecimal); // imprime 42.5

// Operadores:

let x = 10;
x += 5; // x ahora es 15
x++; // x ahora es 16

// ---------

// concatenacion de cadenas

let saludo = "Hola, " + "mundo!";
console.log(saludo); // imprime Hola, mundo!

// ---------
// ---------

// tips para ejercicios

// let num1 = prompt("Ingresa el primer numero: ");
// let num2 = prompt("Ingresa el segundo numero: ");
let num1 = 3;
let num2 = 2;

num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log("suma: " + (num1 + num2));
console.log("resta: " + (num1 - num2));
console.log("multiplicación: " + (num1 * num2));
console.log("división: " + (num1 / num2));
console.log("modulo: " + (num1 % num2));

// reglas para definir variables

let miVariable = "hola";
let $miVariable = "hola";
let _miVariable = "hola";

let miNumero1 = 5;
console.log(miNumero1);

let miNumero2 = 10;
console.log(miNumero2);

let $miNumero3 = 15;
console.log($miNumero3);

// variables constantes

const PI = 3.1416;
console.log(PI);

console.log(Math.PI);

const SEG_MINUTOS = 60;
console.log(SEG_MINUTOS);

// diferentes tipos de datos:

let valorNumero = 20;
let valorFlotante = 7.34;
let cadenaTexto = "Hola a todos";
let valorBooleano = true; // o false
let valorNull = null; // ausencia de valor
let valorIndefinido = undefined; // valor no definido

console.log(typeof valorNumero);
console.log(typeof valorFlotante);
console.log(typeof cadenaTexto);
console.log(typeof valorBooleano);
console.log(typeof valorNull);
console.log(typeof valorIndefinido);

// operadores de incremento y decremento

let contador = 0;
console.log(contador);

// pre-incremento -- aumenta en la misma linea
++contador;
console.log(contador);

// post-incremento -- aumenta en la linea siguiente
contador++;
console.log(contador);










