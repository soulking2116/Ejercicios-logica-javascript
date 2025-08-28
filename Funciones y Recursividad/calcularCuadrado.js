//Funcion que calcula el cuadraro de un numero
function calcularCuadrado(numero) {
    return numero * numero;// Retorna el cuadrado del numero
}

//programa principal
let numero = parseFloat(prompt("Ingresa un numero para calcular su cuadrado:"));
let resultado = calcularCuadrado(numero);

console.log(" El cuadrado de " + numero + " es: " + resultado);