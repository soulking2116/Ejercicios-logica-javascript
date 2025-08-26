// Función que recibe un arreglo de numeros y devuelve el valor maximo y minimo
function calcularMaxMin(numeros) {
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    return { max, min };
}

// Programa principal
let numerosIngresados = prompt("Ingresa varios numeros separados por comas:");

if (numerosIngresados !== null && numerosIngresados.trim() !== "") {
    let arreglonumeros = numerosIngresados.split(',').map(Number);

    if (arreglonumeros.every(num => !isNaN(num))) {
        let resultado = calcularMaxMin(arreglonumeros);

        console.log("El valor maximo es: " + resultado.max);
        console.log("El valor minimo es: " + resultado.min); 

    } else {
        console.log("Por favor, ingresa los numeros separados por comas."); 
    }
} else {
    console.log("No se encontraron valores.");
}