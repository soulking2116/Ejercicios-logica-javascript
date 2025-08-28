// funcion donde se calcula el area y el perimetro de una circunferencia
function calcularAreaYPerimetro(radio) {
    let area = Math.PI * Math.pow(radio, 2); 
    let perimetro = 2 * Math.PI * radio;
    return { area, perimetro };
}

let radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));

if (!isNaN(radio) && radio > 0) { 
    let resultado = calcularAreaYPerimetro(radio);
    console.log("El area de la circunferencia es: " + resultado.area.toFixed(2));
    console.log("El perimetro de la circunferencia es: " + resultado.perimetro.toFixed(2)); 
} else {
    console.log("Por favor, ingresar un radio valido.");
}