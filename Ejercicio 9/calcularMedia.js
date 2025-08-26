//Funcion que calcula la media de los numeros
function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;// Sumar los numeros y dividir entre 2
}

//Programa principal
let numero1 = parseFloat(prompt("Ingresa el primer numero:"));
let numero2 = parseFloat(prompt("Ingresa el segundo numero:"));

let media = calcularMedia(numero1, numero2);

console.log("La media de " + numero1 + " y " + numero2 + " es: " + media);