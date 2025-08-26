//funcion de login que valide usuario y contraseña
function login(usuario, contraseña) {
    const nombreCorrecto = "usuario1";
    const contraseñacorrecta = "asdasd";

    if (usuario === nombreCorrecto && contraseña === contraseñacorrecta) {
        return true;
    } else {
        return false;
    }
}

let intentos = 0;
let maxIntentos = 3;
let accesoConcedido = false;

while (intentos < maxIntentos && !accesoConcedido) {

    let usuario = prompt("Ingresa tu nombre de usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");

    if (login(usuario, contraseña)) {
        alert("login exitoso. Bienvenido!");
        accesoConcedido = true;
    } else {
        intentos++;
        alert("nombre de usuario o contraseña incorrectos. Intentos restantes:" +
            (maxIntentos - intentos));
    }
}

if (!accesoConcedido) {
    alert("Has agotado los intentos. Acceso denegado.");
}