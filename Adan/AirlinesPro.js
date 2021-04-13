let vuelos = [{flightNum: 1, origen: "Madrid", destino: "Managua", cost: 1500, scale: "Panama City"},
     {flightNum: 2, origen: "Madrid", destino: "México DF", cost: 1500, scale:"Lisboa"},
     {flightNum: 3, origen: "Madrid", destino: "Barcelona", cost: 80, scale: null},
     {flightNum: 4, origen: "Madrid", destino: "Sevilla", cost: 40, scale: null},
     {flightNum: 5, origen: "Madrid", destino: "Lisboa", cost: 200,  scale: null},
     {flightNum: 6, origen: "Madrid", destino: "Moscú", cost: 900, scale: "Berlin"},
     {flightNum: 7, origen: "Madrid", destino: "Mallorca", cost: 100, scale: null},
     {flightNum: 8, origen: "Madrid", destino: "Santiago de Compostela", cost: 90, scale: null},
     {flightNum: 9, origen: "Madrid", destino: "Amsterdam", cost: 120, scale: "Paris"},
     {flightNum: 10, origen: "Madrid", destino: "Atenas", cost: 180, scale: "Roma"}]
function airlinesPro(arr) {
    let precios = [];
       ///// funciones a utilizar 
     function mostrarVuelos() {
        console.log("Estos son los vuelos disponibles para el día de hoy: ")
        for (let i = 0; i < arr.length; i++) {
        if (arr[i].scale === null) {
        console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y no realiza ninguna escala.`)
         } else {console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y realiza escala en ${vuelos[i].scale}.`)
     }
    }
    } 
    function costeMedio() { 
        for (let i = 0; i < arr.length; i++) {
        precios.push(arr[i].cost);
        }
        function sumar(a , b){
            return a + b;
          }
        let sum = precios.reduce(sumar)/10;
        console.log(`El coste medio de los vuelos es ${sum}EUR.`)
    }
    function ultimosVuelos() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].flightNum > 5) {
            console.log(`Vuelo ${arr[i].flightNum} tiene como destino  ${arr[i].destino}.`)
            }
        }
    }
    function añadir() {
        let newObj = {flightNum: undefined, origen: undefined, destino: undefined, cost: undefined, scale: undefined};
         let newId = prompt("Por favor escribe el número de vuelo");
         newObj.flightNum = parseInt(newId);
         let newOrigen = prompt("Por favor introduce el origen del vuelo.", "Ej: Madrid");
         newObj.origen = newOrigen;
         let newDestino = prompt("Por favor introduce el destino del vuelo.", "Ej Barcelona");
        newObj.destino = newDestino;
         let newCost = prompt("Por favor introduce el precio del vuelo.");
         newObj.cost = parseFloat(newCost)
         let newScale = prompt("Por favor introduce una escala si la hay, de lo contrario presiona cancelar.");
         newObj.scale = newScale;
         arr.push(newObj); 
             }
    function eliminar() {
        debugger
        let idVuelo = parseInt(prompt("Introduce el ID del vuelo a eliminar"))
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].flightNum === idVuelo) {
            arr.splice(arr[i], 1)  
                }     
        } 
    }
    function administrador() {
        debugger
    let newInput = prompt(`¿Quieres añadir o eliminar vuelos?`,'Escribe "añadir" o "eliminar".');
        switch(newInput) {
            case "añadir":
            if (arr.length < 16) {
              añadir();
            } else {
                alert("Se ha registrado el máximo posible de vuelos.")
        }
         break;
         case "eliminar":
        return eliminar();  
         break;
         default:
        return "No has introducido ninguna respuesta válida"
        }         
    }
    function firstInteraction() {
    let user = prompt("Por favor introduzca el nombre de usuario para iniciar.", "acast")
if (user !== null && user !== "") {
    console.log("Bienvenido de nuevo " + user + ".");
    mostrarVuelos();
    costeMedio();
    ultimosVuelos();
    secondInteraction();
} else {
    console.log("Por favor introduce un usuario válido.")
}
    }
    function buscarVuelos() {
        let budget = parseFloat(prompt("Indica una cifra para el vuelo que buscas", "Ej: 200EUR"))
        let search = prompt("¿Quieres un precio 'mayor', 'menor' o 'igual' que " + budget + "EUR" + "?", "Escribe 'mayor', 'menor', o 'igual'.")
        if (search === "mayor") {
        for (let i = 0; i < arr.length; i++) { 
            console.log("Estos son los vuelos con mayores que " + budget + "EUR.")
            if (arr[i].scale === null && arr[i].cost > budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y no realiza ninguna escala.`)
                 } else if (arr[i].scale !== null && arr[i].cost > budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y realiza escala en ${arr[i].scale}.`)
             }
        }
    } else if (search === "menor") {
        console.log("Estos son los vuelos con menores que " + budget + "EUR.")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].scale === null && arr[i].cost < budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y no realiza ninguna escala.`)
                 } else if (arr[i].scale !== null && arr[i].cost < budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y realiza escala en ${arr[i].scale}.`)
             }
        }
    } else if (search === "igual") {
        console.log("Este es el vuelo igual a " + budget + "EUR.")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].scale === null && arr[i].cost === budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y no realiza ninguna escala.`)
                 } else if (arr[i].scale !== null && arr[i].cost === budget) {
                console.log(`El vuelo ${arr[i].flightNum} con origen ${arr[i].origen} y destino: ${arr[i].destino}, tiene un coste de ${arr[i].cost}€ y realiza escala en ${arr[i].scale}.`)
             } else {
                 console.log("No hay vuelos que coincidan.")
             }
        }
    } else {
        console.log("Respuesta inválida.")
    }
}
function buyTicket() {
    let askId = parseInt(prompt("Escribe el número del vuelo que quieres comprar.", "Ej: 10"))
    for (let i = 0; i < arr.length; i++) {
    if (askId === arr[i].flightNum) {
console.log("Gracias por su compra, vuelva pronto.")
    } else {
        console.log("El ID no coincide con ningún vuelo.")
    }
    }
}
function secondInteraction() {
  let adminOrUser = prompt("Introduzca si es 'admin' o 'usuario'")
    if (adminOrUser !== null && adminOrUser !== "") {
    switch(adminOrUser) {
    case "admin": 
    return administrador();
    break;
    case "usuario":
    return buscarVuelos(), buyTicket();
    break;
    default:
        return "Escriba una opción válida."
    }
} else {
    console.log("Escriba una opción válida.")
}
}
///// end of functions
 firstInteraction() 
 function repeat() {
    let repeater = prompt("¿Quieres realizar otra gestión?", "escribe 'si' o presiona cancelar para finalizar.")
    switch(repeater) {
        case "si":
            return secondInteraction()
            break;
        default: 
        return "Bye"
        break;
 }
}
 do {
    repeat()
   } while (repeat() !== null)
}

airlinesPro(vuelos);



