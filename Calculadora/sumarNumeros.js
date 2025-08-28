// Funciones para las operaciones
function sumarNumeros(num1, num2) {
    return parseInt(num1) + parseInt(num2); // Aseguramos que sean enteros
  }
  
  function restarNumeros(num1, num2) {
    return parseInt(num1) - parseInt(num2); // Aseguramos que sean enteros
  }
  
  function multiplicarNumeros(num1, num2) {
    return parseInt(num1) * parseInt(num2); // Aseguramos que sean enteros
  }
  
  function dividirNumeros(num1, num2) {
    if (parseInt(num2) === 0) {
      return "Error: No se puede dividir por cero.";
    }
    return parseInt(num1) / parseInt(num2); // Aseguramos que sean enteros
  }
  
  // Programa principal
  let numero1 = prompt("Ingrese el primer numero entero:");
  let numero2 = prompt("Ingrese el segundo numero entero:");
  let operacion = prompt("Ingrese la operacion a realizar (sumar, restar, multiplicar, dividir):").toLowerCase();
  
  let resultado;
  
  if (!isNaN(parseInt(numero1)) && !isNaN(parseInt(numero2))) {
    if (operacion === "sumar") {
      resultado = sumarNumeros(numero1, numero2);
    } else if (operacion === "restar") {
      resultado = restarNumeros(numero1, numero2);
    } else if (operacion === "multiplicar") {
      resultado = multiplicarNumeros(numero1, numero2);
    } else if (operacion === "dividir") {
      resultado = dividirNumeros(numero1, numero2);
    } else {
      resultado = "Operacion no valida. Por favor entre sumar, restar, multiplicar o dividir.";
    }
  
    console.log("El resultado de la operacion es: " + resultado);
  
  } else {
    console.log("Error: Por favor, ingrese numeros enteros validos.");
  }