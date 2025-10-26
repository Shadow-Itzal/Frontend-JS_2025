/* 1) Realizá un programa que permita al usuario ingresar su nombre. La computadora debe emitir una salida con un mensaje de bienvenida que incluya el nombre ingresado. */

// let nombreUsuario = prompt("Ingrese su nombre");//'Pepe';
// console.log("Bienvenido " + nombreUsuario);



/* 2) Realizá un programa que permita al usuario ingresar un número entero. 
La computadora debe informar el número opuesto1 y el número inverso2 del ingresado. */

// let numero = prompt("Ingrese un valor númerico");//4;
// let datoNumerico = Number(numero);
// ~~  parseFloat(numero);
// ~~  parseInt(numero);
// console.log(typeof datoNumerico);
// alert('El número ingresado es: ' + datoNumerico)
// console.log('El número ingresado es: ' + datoNumerico);
// console.log('Su opuesto es: ' + -datoNumerico);
// console.log("Su inverso es: " + 1/datoNumerico);



/* 3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres 
distintos para cierto alumno. 
La computadora debe mostrar la nota promedio. */

// let n1,n2,n3,prom;
// n1 = parseInt(prompt('Ingrese la primer nota'));
// n2 = parseInt(prompt('Ingrese la segunda nota'));
// n3 = parseInt(prompt('Ingrese la tercer nota'));
// prom = (n1+n2+n3)/3;
// console.log("La nota final promedio es: ", prom.toFixed(2));



/* 4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, asumiendo que trabaja todos los días hábiles y media jornada los sábados. */

// ~~ Pedimos al usuario los datos
// let valorHora = parseFloat(prompt("Ingrese el valor salarial por hora:"));
// let horasPorDia = parseFloat(prompt("Ingrese la cantidad de horas trabajadas por día:"));

// ~~ Cálculo del salario semanal
// ~~ De lunes a viernes (5 días hábiles) + sábado (media jornada)
// let salarioSemanal = (valorHora * horasPorDia * 5) + (valorHora * (horasPorDia / 2));

// ~~ Mostramos el resultado
// console.log("El salario semanal es: $" + salarioSemanal.toFixed(2));



/* 5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar 
entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas. */

// let a, b, temporal;
// a = prompt('Ingrese un valor númerico');
// b = prompt('Ingrese otro valor númerico');
// console.log("El valor de a: es "+ a +" y \nel valor de b: es "+b); 
// temporal = a;
// a = b;
// b = temporal;
// ~~ console.log("El nuevo de valor de a: es "+ a +" y el valor de b, es: "+b); 
// ~~ Escritura con interpolación 
// console.log(`El nuevo de valor de a: es ${a} y el valor de b, es: ${b}`);


/* 6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo 
mensual del vendedor y mostrarlo. */

// ~~ Pedimos los datos al usuario

/* let valorUnitario = 2000;
let cantidadVendida = 30; */
// let valorUnitario = parseFloat(prompt("Ingrese el valor unitario del artículo:"));
// let cantidadVendida = parseInt(prompt("Ingrese la cantidad de artículos vendidos:"));

// ~~ Calculamos el monto total vendido
// let totalVendido = valorUnitario * cantidadVendida;

// ~~ Calculamos la comisión del 16%
// let comision = totalVendido * 0.16;

// ~~ Sumamos el sueldo fijo
// let sueldoMensual = 14000 + comision;

// ~~ Mostramos el resultado
// console.log("El sueldo mensual del vendedor es: $" + sueldoMensual.toFixed(2));



/* 7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. */

// let ancho = parseFloat(prompt("Ingrese el ancho del terreno en metros:"));
// let largo = parseFloat(prompt("Ingrese el largo del terreno en metros:"));
// let valorMetro = parseFloat(prompt("Ingrese el valor del metro cuadrado de tierra:"));

// ~~ Calculamos la superficie
// let superficie = ancho * largo;

// ~~ Calculamos el valor total del terreno
// let valorTotal = superficie * valorMetro;

// ~~ Calculamos el perímetro
// let perimetro = 2 * (ancho + largo);

// ~~ Calculamos la cantidad de alambre (3 pasadas)
// let alambre = perimetro * 3;

// ~~ Mostramos los resultados
// console.log("📏 Superficie: " + superficie + " m²");
// console.log("💰 Valor total del terreno: $" + valorTotal.toFixed(2));
// console.log("🧵 Cantidad de alambre necesaria: " + alambre + " metros");



/* 8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe 
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números. */
// let num1, num2, suma, resta, mult, div;
// num1 = parseInt(prompt('Ingres un valor númerico'));
// num2 = parseInt(prompt('Ingres un nuevo valor númerico'));
// suma = num1 + num2;
// resta = num1 - num2;
// mult = num1 * num2;
// div = num1 / num2;

// console.log('Los valores ingresados son: ' , num1, num2);
// console.log("La suma de estos valores dio: ", suma);
// console.log('La diferenica de estos valores dio: ', resta);

/* 9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el valor en grados del ángulo restante. */

/* Sabemos que:
👉 La suma de los tres ángulos interiores de un triángulo siempre es 180°.
Así que si el usuario ingresa dos ángulos, el tercero se calcula como:
                ángulo_restante = 180 - (ángulo1 + ángulo2) */

// ~~ Pedimos los dos ángulos al usuario
// let angulo1 = parseFloat(prompt("Ingrese el primer ángulo del triángulo (en grados):"));
// let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo del triángulo (en grados):"));

// ~~ Calculamos el ángulo restante
// let anguloRestante = 180 - (angulo1 + angulo2);

// ~~ Mostramos el resultado
// console.log("El ángulo restante del triángulo es: " + anguloRestante + "°");



/* 10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada uno y cuál es el monto del total aportado entre los tres. */

// ~~ Pedimos los nombres y montos de los tres inversores
// let nombre1 = prompt("Ingrese el nombre del primer inversor:");
// let capital1 = parseFloat(prompt("Ingrese el capital invertido por " + nombre1 + ":"));

// let nombre2 = prompt("Ingrese el nombre del segundo inversor:");
// let capital2 = parseFloat(prompt("Ingrese el capital invertido por " + nombre2 + ":"));

// let nombre3 = prompt("Ingrese el nombre del tercer inversor:");
// let capital3 = parseFloat(prompt("Ingrese el capital invertido por " + nombre3 + ":"));

// ~~ Calculamos el total invertido
// let total = capital1 + capital2 + capital3;

// ~~ Calculamos los porcentajes
// let porcentaje1 = (capital1 / total) * 100;
// let porcentaje2 = (capital2 / total) * 100;
// let porcentaje3 = (capital3 / total) * 100;

// ~~ Mostramos resultados
// console.log("💰 Total invertido: $" + total.toFixed(2));
// console.log(nombre1 + " aportó el " + porcentaje1.toFixed(2) + "% del total.");
// console.log(nombre2 + " aportó el " + porcentaje2.toFixed(2) + "% del total.");
// console.log(nombre3 + " aportó el " + porcentaje3.toFixed(2) + "% del total.");
