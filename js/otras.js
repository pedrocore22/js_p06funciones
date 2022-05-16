// Otros tipos de funciones

// Funciones de expresión (anónimas)

const cuadrado = function (valor) {
    return valor * valor;
}

// En la invocación se añaden los paréntesis
// y argumento a la constante

let resultado = cuadrado(3);
console.log(resultado);

// Funciones flecha

// const cubo = function (valor) {
//     return valor * valor * valor;
// }

// Se puede convertir a flecha con la
// siguiente sintaxis

// const cubo = (valor) => {
//     return valor * valor * valor;
// }

// Alivios de la función flecha
// - Si solo tiene un parámetro podemos eliminar los paréntesis
// - Si solo tiene una línea de código en su cuerpo podemos
// eliminar las llaves y además el return será implícito

const cubo = valor => valor * valor * valor;

resultado = cubo(5);
console.log(resultado);