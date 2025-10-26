let edad = 4;

if (edad >= 18) {
    console.log("Sos mayor de edad.");
    
} else if (edad >= 13){
    console.log("Sos un adolescente.");
} else {
    console.log("Sos un niño.");
    
}

// operador ternario
let resultado = edad >= 18 ? "Sos mayor de edad" : "menor de edad";
console.log(resultado);


// ejemplo practico: acceso a un evento

let edadEvento = 22;
let miembroVIP = true;

if (edadEvento >= 18 && miembroVIP) {
    console.log("Acceso concedido al area VIP.");
} else {
    console.log("Acceso denegado");
};

// COMPARADORES
// == verifica si dos valores son iguales,pero no necesariamente del mismo tipo de dato.
// === compara tanto el valor como el tipo de dato
// != verifica si dos valores son diferentes
// !== verifica si dos valores son diferentes, incluyendo su tipo de dato
// <, >, <=, >= comparan valores numericos

// && (AND) se cumplen todas las condiciones
// || (OR) se cumple al menos una de las condiones
// ! (NOT) invierte el valor de la condicion


// BUCLES:

let i = 0;

// while: la condicion se ejecuta hasta que sea verdadera
while (i < 5) {
    console.log(i);
    i++;
}

// do... while: similar a while, pero siempre ejecuta el codigo al menos una vez
do {
    console.log(i);
    i++;
} while (i < 5);

// for: es mas compacto y se usa cuando conoces de antemano cuantas veces se repetira el bucle
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ejemplo practico: iterar productos

let productos1 = ["Laptop", "Celular", "Tablet"];

for (let i = 0; i < productos1.length; i++) {
    console.log (productos1[i]);
    
}

// combinar operadores logicos y bucles

let productos = [
    {nombre: "Laptop", descuento: true},
    {nombre: "Celular", descuento: false},
    {nombre: "Tablet", descuento: true},
]

for (let i = 0; i < productos.length; i++) {
    if (productos[i].descuento) {
        console.log(productos[i].nombre + " tiene descuento.");
    };
};