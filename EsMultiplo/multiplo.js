// Funcion donde se verifica si el primero es multiplo del segundo

function Esmultiplo(num1, num2) {

     if (num1 % num2 === 0) {
    
     return true; //es multiplo
    
     } else {
    
     return false; //no es multiplo
    
     }
    
    }
    
    //dos numeros ingresados por el ususario
    
    let number1 = parseInt(prompt("Ingresa el primer numero entero:"), 10);
    
    let number2 = parseInt(prompt("Ingresa el segundo numero:"), 10);
    
    
    
    //verificar si alguno es multiplo del otro
    
    if (Esmultiplo(number1, number2)) {
    
     console.log(number1 + " es multiplo de " + number2);
    
    } else if (Esmultiplo(number2, number1)) {
    
     console.log(number2 + " es multiplo de " + number1);
    
    } else {
    
     console.log("Ninguno de los numeros es multiplo del otro");
    
    }