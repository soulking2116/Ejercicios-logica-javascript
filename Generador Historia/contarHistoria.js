// Procedimiento para mostrar una pequeña historia
function contarHistoria(nombre, apellido, lugar) {
    console.log(`¡En las tierras lejanas de ${lugar}, vivia el valiente ${nombre} ${apellido}!`);
    console.log(`Un dia, mientras exploraba los misteriosos alrededores de ${lugar}, ${nombre} se topo con un descubrimiento asombroso.`);
    console.log(`¡Fue entonces cuando ${nombre} ${apellido} se embarco en una aventura epica, llena de peligros y maravillas inimaginables!`);
    console.log(`A lo largo de su increible viaje, ${nombre} conocio personajes fascinantes y desvelo secretos ancestrales en cada rincon de ${lugar}.`);
  }
  
  // Programa principal
  let nombre = prompt("Ingresa el nombre del heroe:");
  let apellido = prompt("Ingresa el apellido del heroe:");
  let lugar = prompt("Ingresa el reino magico:");
  
  contarHistoria(nombre, apellido, lugar);