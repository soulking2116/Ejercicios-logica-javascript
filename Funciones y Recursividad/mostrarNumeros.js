//Funcion recursiva para mostrar los numeros del 1 al 100
function mostrarNumeros(numero){
    if(numero <=100){ //Condición de parada
        console.log(numero); //Mostrar el numero actual
        mostrarNumeros(numero + 1); // LLamada recursiva con el siguiente numero
    }
}

//Programa principal
mostrarNumeros(1);//Iniciar desde el numero 1
