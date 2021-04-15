let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


function compra(){
    let buyWindow = window.prompt('¿Desea comprar alguno de los vuelos mostrados? Conteste: si/no')
    if(buyWindow === null){
        return 'Arrivederci';
    } else if (buyWindow === 'si'){
        let codigoBuy = window.prompt('Introduce el código de compra del vuelo que desea comprar');
        codigoBuy = parseFloat(codigoBuy);
        for(let y = 0; y < flights.length; y++){
            if (codigoBuy === flights[y].id){
                console.log(`\nUsted ha comprado el vuelo con origen ${flights[y].from} destino ${flights[y].to} por un valor de ${flights[y].cost}€ \n\t Gracias por su compra, vuelva pronto`);
            }
        }
    } else if (buyWindow === 'no') {
        return ('Hasta pronto');
    } else {
        console.log('Introduzca si o no pls');
        compra();
    }
};

function budgetComparador(comparador) {
    
    comparador = parseFloat(comparador);
    let comparador1 = window.prompt(`Elija una opción para su presupuesto de ${comparador}:\n superiores/inferiores/iguales`);
    
    if (comparador === null || comparador1 === null){
        return 'Hasta pronto';
    } else {
        if (comparador1 === 'inferiores'){
            for(let y = 0; y < flights.length; y++){
                if (comparador > flights[y].cost) {
                    if (flights[y].scale === false) {

                        console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost} y no realiza ninguna escala`);

                    } else {

                        console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost}. Realiza escala`);
                    }
                }
            }
        } else if (comparador1 === 'superiores'){
            for(let y = 0; y < flights.length; y++){
                if (comparador < flights[y].cost) {
                    if (flights[y].scale === false) {

                        console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost} y no realiza ninguna escala`);

                    } else {
                        console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost}. Realiza escala`);
                    }
                }
            }
        } else if (comparador1 === 'iguales'){
            equalBudget(comparador)
        
        } else if (comparador1 != 'superiores') {
            console.log('Por favor, introduce correctamente superiores/inferiores/iguales');
            userWindow();
        } else if (comparador1 != 'inferiores') {
            console.log('Por favor, introduce correctamente superiores/inferiores/iguales');
            userWindow();
        } else if (comparador1 != 'iguales') {
            console.log('Por favor, introduce correctamente superiores/inferiores/iguales');
            userWindow();
        }
        compra();
    }
}
function userWindow(){
    let comparador = window.prompt('¿Cuál es su presupuesto? Introduzca una cifra ')
   
    if (comparador === null){
         console.log('Arrivederci');

    } else if(isNaN(comparador)){
        console.log('Indroduce solo numeros pls');
        userWindow();
    } else {
        budgetComparador(comparador);
}
};

function equalBudget(comparador){
    let igual;
    for(let y = 0; y < flights.length; y++){
        if(comparador === flights[y].cost){
            igual = true;
        };
    };
    if( igual === true){ 
        for(let y = 0; y < flights.length; y++) {
            if (comparador === flights[y]['cost']) {
                if (flights[y]['scale'] === false) {

                    console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost} y no realiza ninguna escala`);

                } else {
                    console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost}. Realiza escala`);
                }
            }; 
        };
      
    } else {
        console.log('No hay ningún vuelo con ese precio exactamente');
        userWindow();       
    };
};

function costeMedio(){
    let coste = [];
    let media;
    
    for(let i = 0; i < flights.length; i++){
        if (flights[i].cost) {
            coste.push(flights[i].cost);
        }
    }
    let sum = coste.reduce((acc, curr) => acc + curr)
    media = sum / flights.length
    media = media.toFixed(2);
    
    console.log(`El coste medio de los vuelos es ${media}€`);
};

function escalas(){
    const escala = [];
    
    for(let j = 0; j < flights.length; j++){
      if(flights[j].scale === true) {
        escala.push(flights[j]);
      };
    }
    console.log(`El número de vuelos que realiza al menos una parada es ${escala.length}`)
};

function lastFlights(){
    let last = []
    
    for(let u = 0; u < flights.length; u++) {
        if (u > flights.length - 6){
          last.push(flights[u].to);

        }
    }
    last = last.join('\n- ');
    console.log('Los últimos 5 destinos del día son:\n- '+ last);
};

function addFlightsFinal(destino, origen, coste, stops){
    let newFlight = {id: flights.length, to: destino, from: origen, cost: coste, scale: stops}
    flights.push(newFlight);
    console.log('\nSu vuelo se ha añadido correctamente\n');
    for(let x = 0; x < flights.length; x++){
        if (flights[x].scale === false) {

            console.log(`ID: ${flights[x].id} del vuelo con origen ${flights[x].from} y destino ${flights[x].to} tiene un coste de ${flights[x].cost} y no realiza ninguna escala`);

        } else {

            console.log(`ID: ${flights[x].id} del vuelo con origen ${flights[x].from} y destino ${flights[x].to} tiene un coste de ${flights[x].cost}. Realiza escala`);
        }
   
    };
};   

function noMore(){
    const noMas = window.prompt('¿Desea realizar otra operación? si/no')
    switch(noMas) {
        case null:
            return 'Arrivederci';
        break;
        case 'no':
            return 'Arrivederci';
        break;
        case 'si':
            adminWindow();
        break;            
    }

};

function newFlightQuestion() {
    let newFlight2 = window.prompt('¿Desea añadir otro vuelo? si/no');
    switch(newFlight2){
        case 'si':
            infoAddFlights()
        break;
        case 'no':
            noMore();
        break;
        case null:
            console.log('Arrivederci');
        break;
        default:
            console.log('Introduzca solo si o no');
            newFlightQuestion();
        break;
    };
};

function infoAddFlights() {

    let destino = window.prompt('Destino vuelo a añadir');
    let origen = window.prompt('Origen vuelo a añadir');
    let coste = window.prompt('precio vuelo a añadir');
    coste = parseFloat(coste);
    let stops = window.prompt('¿Realiza escala el vuelo a añadir? Conteste si/no');

    if (stops === 'si') {
        stops = true;
    } else if (stops === 'no'){
        stops = false; 
    };

    if (destino === null || origen === null || coste === null || stops === null) {
        console.log('Gracias por tu tiempo, Hasta pronto');
    } else {
        if(flights.length >= 15){
            let alert = window.alert('No se pueden añadir más vuelos porque la lista está completa. \n\t Gracias y hasta pronto!');
            noMore();
        } else{
            addFlightsFinal(destino, origen, coste, stops);
            newFlightQuestion();
        };
    };     
   
};

function deleteFlights(){

    for(let y = 0; y < flights.length; y++){
        if (flights[y].scale === false) {
            console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost} y no realiza ninguna escala`);
        } else {
            console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost}. Realiza escala`);
        }
    };

    let deleteWindow = window.prompt('Qué vuelo desea eliminar. Introduzca su Código de compra');
    deleteWindow = parseFloat(deleteWindow);
    if (deleteWindow === null) {
        console.log('Adiós');
    } else if (deleteWindow > flights.length){
        console.log('No hay ningún vuelo con ese código de compra');
    } else {   
        for(let i = 0; i < flights.length; i++){
            if (flights[i].id === deleteWindow) {
                flights.splice(flights[i].id, 1);
                console.log('\nEl vuelo ha sido eliminado');
                console.log('\n');
                for(let y = 0; y < flights.length; y++){
                    if (flights[y].id > y){
                        flights[y].id = flights[y].id - 1;
                    };
                    if (flights[y].scale === false) {
                        console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost} y no realiza ninguna escala`);
                    } else {
                            console.log(`Código compra ${flights[y].id}: \n\t Vuelo con origen ${flights[y].from} y destino ${flights[y].to} tiene un coste de ${flights[y].cost}. Realiza escala`);
                    };
                };
            };
        }
    }
    moreDelete();
};

function moreDelete() {
    let oneMoreDelete = window.prompt('¿Desea eliminar algún vuelo más? Conteste si/no')
    switch (oneMoreDelete){
        case null:
            console.log('Sayonara');
        break;
        case 'si':
            console.log('\n');
            deleteFlights();
        break;
        case 'no':
            noMore();
        break;
        default: 
            console.log('No le he entendido. Podría escribir solamente si o no. Gracias :)')
            moreDelete();
        break;    
    };

};    

function adminWindow(){
    let infoFlights = window.prompt('¿Desea añadir o eliminar algún vuelo? Conteste añadir/eliminar');
    if (infoFlights === 'añadir'){
        infoAddFlights();
    } else if (infoFlights === 'eliminar') {
        deleteFlights();
    } else {
        console.log('No le he entendido, por favor introduzca añadir o eliminar');
        adminWindow();
    }
    
};

function userAdmin(){
    const tipo = window.prompt('¿Es usted user o admin?')
    if (tipo === null){
        return 'Arrivederci';
    } else {
        switch (tipo) {
            case null:
                return 'Arrivederci';
            break;
            case 'user':
                userWindow();
            break;
            case 'admin':
                adminWindow();
            break;
            default:
                console.log('No le he entendido. Por favor, introduzca user o admin. Gracias')
                userAdmin(); 
            break;   
        }
    }    
};

function greeting(){

    let nombre = window.prompt('Introduzca su nombre');
    if (nombre === null){
        return 'Hasta pronto';
    }
    console.log(`Bienvenido ${nombre}`);
    console.log('\n')

    for(let x = 0; x < flights.length; x++){
        if (flights[x].scale === false) {

            console.log(`El vuelo con origen ${flights[x].from} y destino ${flights[x].to} tiene un coste de ${flights[x].cost} y no realiza ninguna escala`);

        } else {

            console.log(`El vuelo con origen ${flights[x].from} y destino ${flights[x].to} tiene un coste de ${flights[x].cost}. Realiza escala`);
        }
   
    }
    console.log('\n');
    costeMedio();
    console.log('\n')
    escalas();
    console.log('\n')
    lastFlights();
    console.log('\n')

    userAdmin();

    return 'Hasta pronto!'
};
greeting();