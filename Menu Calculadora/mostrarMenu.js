// Función que suma dos números
function sumar(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
  }
  
  // Función que resta dos números
  function restar(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
  }
  
  // Función que multiplica dos números
  function multiplicar(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
  }
  
  // Función que divide dos números (Verifica que el divisor no sea 0)
  function dividir(num1, num2) {
    num2 = parseFloat(num2);
    if (num2 === 0) {
      return "Error: No se puede dividir entre 0";
    } else {
      return parseFloat(num1) / num2;
    }
  }
  
  // Función para mostrar el menú
  function mostrarMenu() {
    console.log("--- Calculadora ---");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("---------------");
  }
  
  // Programa principal (main)
  function main() {
    mostrarMenu(); // Mostrar el menú
    let opcion = parseInt(prompt("Elige una opción (1-4):")); // Pedir opción al usuario
  
    // Pedir los dos números
    let num1Str = prompt("Ingresa el primer número:");
    let num2Str = prompt("Ingresa el segundo número:");
    let num1 = parseFloat(num1Str);
    let num2 = parseFloat(num2Str);
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Error: Por favor, ingresa números válidos.");
      return; // Salir de la función main si la entrada no es válida
    }
  
    let resultado;
  
    // Realizar la operación dependiendo de la opción elegida
    switch (opcion) {
      case 1:
        resultado = sumar(num1, num2);
        console.log("El resultado de la suma es: " + resultado);
        break;
      case 2:
        resultado = restar(num1, num2);
        console.log("El resultado de la resta es: " + resultado);
        break;
      case 3:
        resultado = multiplicar(num1, num2);
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
      case 4:
        resultado = dividir(num1, num2);
        console.log("El resultado de la división es: " + resultado);
        break;
      default:
        console.log("Opción no válida. Por favor elige una opción entre 1 y 4.");
    }
  }
  
  // Llamar al programa principal
  main();