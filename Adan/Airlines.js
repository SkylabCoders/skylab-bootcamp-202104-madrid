//Airlines 
function airlines() {
let precios = [];
let vuelos = [{flightNum: 01, origen: "Madrid", destino: "Managua", cost: 1500, scale: "Panama City"},
 {flightNum: 02, origen: "Madrid", destino: "México DF", cost: 1500, scale:"Lisboa"},
 {flightNum: 03, origen: "Madrid", destino: "Barcelona", cost: 80, scale: null},
 {flightNum: 04, origen: "Madrid", destino: "Sevilla", cost: 40, scale: null},
 {flightNum: 05, origen: "Madrid", destino: "Lisboa", cost: 200,  scale: null},
 {flightNum: 06, origen: "Madrid", destino: "Moscú", cost: 900, scale: "Berlin"},
 {flightNum: 07, origen: "Madrid", destino: "Mallorca", cost: 100, scale: null},
 {flightNum: 08, origen: "Madrid", destino: "Santiago de Compostela", cost: 90, scale: null},
 {flightNum: 09, origen: "Madrid", destino: "Amsterdam", cost: 120, scale: "Paris"},
 {flightNum: 10, origen: "Madrid", destino: "Atenas", cost: 180, scale: "Roma"}]
 function mostrarVuelos() {
    console.log("Estos son los vuelos disponibles para el día de hoy: ")
    for (let i = 0; i < vuelos.length; i++) {
    if (vuelos[i].scale === null) {
    console.log(`El vuelo ${vuelos[i].flightNum} con origen ${vuelos[i].origen} y destino: ${vuelos[i].destino}, tiene un coste de ${vuelos[i].cost}€ y no realiza ninguna escala.`)
     } else {console.log(`El vuelo ${vuelos[i].flightNum} con origen ${vuelos[i].origen} y destino: ${vuelos[i].destino}, tiene un coste de ${vuelos[i].cost}€ y realiza escala en ${vuelos[i].scale}.`)
 }
}
}  
function costeMedio() { 
    for (let i = 0; i < vuelos.length; i++) {
    precios.push(vuelos[i].cost);
    }
    function sumar(a , b){
        return a + b;
      }
    let sum = precios.reduce(sumar)/10;
    console.log(`El coste medio de los vuelos es ${sum}EUR.`)
}
function xEscalas() {
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].scale !== null) {
            console.log(`Los vuelos con ID ${vuelos[i].flightNum} realizan escala.`)
        }
    }
}
function ultimosVuelos() {
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].flightNum > 5) {
        console.log(`Vuelo ${vuelos[i].flightNum} tiene como destino  ${vuelos[i].destino}.`)
        }
    }
}
let user = prompt("Por favor introduzca el nombre de usuario para iniciar.", "acast")
if (user !== null && user !== "") {
    console.log("Bienvenido de nuevo " + user + ".");
    mostrarVuelos();
    costeMedio();
    ultimosVuelos();
} else {
    console.log("Por favor introduce un usuario válido.")
}
}
