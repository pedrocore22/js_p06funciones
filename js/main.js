// Funciones
// Declaración
// Sintaxis
// function identificador (parámetros) {
    // código a ejecutar cuando se invoque
//}

function suma(valor1, valor2) {
    console.log(valor1 + valor2);
}

// Las funciones pueden retornar o no
// valores usando la palabra return

function division(valor1, valor2) {
    let valor3 = valor1 / valor2;
    return valor3;
    console.log('Hola'); // No se ejecuta
    // porque está debajo de return
}

// Invocación
// Sintaxis
// identificador(argumentos)
// Los argumentos son los valores que
// se le pasan a los parámetros

suma(10,5);
suma(4,8);

// las funciones que retornan valor su invocación
// se asigna a otra variable

let resultado = division(50,2);
console.log(resultado);

// Las funciones pueden estar declaradas por
// debajo de su invocación

setMensaje('Juan');

function setMensaje(nombre) {
    console.log('¡Hola ' + nombre + '!');
}