// Función que añade un espacio después de cada letra de un texto
function ConvertirEspaciado(texto) {
    return texto.split('').join(' ');
  }
  
  // Programa principal
  let textoUsuario = prompt("Ingresa un texto:");
  
  if (textoUsuario !== null) {
    let textoConEspacios = ConvertirEspaciado(textoUsuario);
    console.log(textoConEspacios);
  } else {
    console.log("No se ingreso ningun texto.");
  }