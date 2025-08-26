//Procedimiento que convierte un numero en su forma escrita en letras
function numeroEnLetras(numero) {
    switch (numero){
        case 1:
            console.log("Uno");
            break;
        case 2:
            console.log("Dos");
            break;
        case 3:
            console.log("Tres");
            break;
        case 4:
            console.log("Cuatro");
            break;
        case 5:
            console.log("Cinco");
            break;
        case 6:
            console.log("Seis");
            break;
        case 7:
            console.log("Siete");
            break;
        case 8:
            console.log("Ocho");
            break;
        case 9:
            console.log("Nueve");
            break;
        case 10:
            console.log("Diez");
            break;
        default:
            console.log("Numero fuera de rango. Debe ingresar un numero entre 1 y 10");
    }
}

//Programa principal
let numero = parseInt(prompt("Ingresa un numero del 1 al 10"));

//Llamar al procedimiento para mostrar el numero en letras
numeroEnLetras(numero);