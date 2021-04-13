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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
] ;

function imprimir() {
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
        } else {
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza ninguna escala.') ;
        }
    } ;
} ;

function imprimirAdd() {
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
            console.log('\t\t->Su número es: ' + flights[i].id);
        } else {
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza ninguna escala.') ;
            console.log('\t\t->Su número es: ' + flights[i].id);
        }
    } ;
    console.log('\n');
} ;

function midPrice() {
    const arr = [];
    for(let i = 0; i < flights.length; i++) {
        for(k in flights[i]) {
            if( k === 'cost') {
                arr.push(flights[i][k]);
            } ;
        } ;
    } ;
    let med = 0;
    for( let i = 0; i < arr.length; i++) {
        med = med + arr[i] ;
    } ;
    let medTot = med / (arr.length) ;
    return medTot.toFixed(2) ;
} ;

function conEscala(){
    let sumEsc = 0;
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            sumEsc++;
        } ;
    } ;
    console.log('Hay un total de ' + sumEsc + ' vuelos con escala hoy: \n\n')
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €.') ;
        } ;
    } ;  
} ;

function impUltimosDes(){
    let destinos = [];
    for(let i = flights.length - 1; i > flights.length - 6; i--){ 
            destinos.push(flights[i].to);
    } ;
    destinos = destinos.join('\n\t- ');
    console.log('\t- ' + destinos);

} ;

function admOrUser(){
    let permisos = window.prompt('Eres Administrador o Usuario? ADMIN/USER');
    switch(permisos){
        case 'ADMIN':
            console.log('Bienvenido al espacio para administradores.\n\n');
            admOptions();
        break;
        case 'USER':
            console.log('Filtra los precios de tus vuelos.\n\n');
            userFilter();
        break;
        case null:
            console.log('Gracias por tu tiempo! Vuelve pronto.');
        break;
        default:
            console.log('Perdona, si no eres administrador o usuario no te puedo dejar acceder...tienes que decidirte!');
            admOrUser();
        break;
    } ;
} ;

function userFilter() {
    let operador = window.prompt('Quieres que tu vuelo sea mayor, menor o igual a una cantidad que tu decidas?');
    let cantidad = window.prompt('Introduce la cantidad');
    if(cantidad === null || operador === null ) {
        console.log('Gracias por tu tiempo! Vuelve pronto.')
    } else {
        cantidad = parseFloat(cantidad);
        if(isNaN(cantidad)){
            console.log('Necesitas introducir una cifra en números');
            userFilter();
        } else { 
            if(operador === 'mayor') {
                mayorQue(cantidad);
            }else if(operador === 'menor') {
                menorQue(cantidad);
            }else if(operador === 'igual') {
                igualQue(cantidad);
            }else {
                console.log("Introduzca solo las palabras 'mayor', 'menor' o 'igual'");
                userFilter();
            } ;
        } ;
    } ;
} ;

function menorQue(cantidad) {
    console.log('Los vuelos que cuestan menos de ' + cantidad + '€ son:\n')
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].cost < cantidad){
            if(flights[i]['scale'] === true){
                console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
                console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
            } else {
                console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza escalas.') ;
                console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
            } ;
        } ;
    } ;  
    usersBuy();
} ;

function mayorQue(cantidad) {
    console.log('Los vuelos que cuestan más de ' + cantidad + '€ son:\n');
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].cost > cantidad){
            if(flights[i]['scale'] === true){
                console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
                console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
            } else {
                console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza escalas.') ;
                console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
            } ;
        } ;
    } ;
    usersBuy();
} ;

function igualQue(cantidad) {
    let existen;
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].cost === cantidad){
            existen = true;   
        } ;
    } ;
    if(existen === true) { 
        console.log('Los vuelos que cuenstan ' + cantidad + '€ son:\n');
        for(let i = 0; i < flights.length; i++){ 
            if(flights[i].cost === cantidad){
                if(flights[i]['scale'] === true){
                    console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
                    console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
                } else {
                    console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza escalas.') ;
                    console.log('\t\t->Si quieres reservarlo su número es: ' + flights[i].id);
                } ;
            } ;
        } ;
        usersBuy();
    } else {
        console.log('Lo sentimos pero no hay vuelos que cuesten justo esa cantidad, prueba otro criterio de búsqueda.');
        userFilter();
    }
} ;

function usersBuy() { 
    let decidido = window.prompt('Que vuelo te gustaria comprar? introduce su número: ');
    if(decidido === null){
        console.log('Gracias por tu tiempo! Vuelve pronto.')
    } else {
        decidido = parseFloat(decidido);
        if(isNaN(decidido)){
            console.log('Solo aceptamos el número de vuelo para la reserva. Intentelo de nuevo por favor.') ;
            usersBuy();
        } else {
            let real;
            for(let i = 0; i < flights.length; i++){ 
                if(flights[i].id === decidido){
                    real = true;   
                } ;
            };
            if(real === true) {
                for(let i = 0; i < flights.length; i++){ 
                    if(flights[i].id === decidido){
                        console.log('\nHa comprado:\n\tVuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', con un precio de: ' + flights[i].cost + ' €, y realiza escalas. Gracias por su compra! Vuelva pronto.');
                    }
                }
            } else {
                console.log('El vuelo no existe. Intentelo de nuevo.');
                usersBuy();
            } ;
        } ;
    } ;
} ;

function admOptions() { 
    let opc = window.prompt('Te gustaria añadir o eliminar vuelos? A/E');
    switch(opc){
        case 'A':
            addFlights();
        break;
        case 'E':
            console.log('Aqui tienes los vuelos que hay en este momento:\n\n');
            imprimirAdd();
            dltFlights();
        break;
        case null:
            console.log('Gracias por tu tiempo! Vuelve pronto.');
        break; 
        default:
            console.log('Solo se admite añadir(A) o eliminar(E) vuelos. Intentalo de nuevo.');
            admOptions();
        break;
    };
} ;

function masOpcion(){
    let masOpp = window.prompt('Necesitas hacer algun trámite más? si/no');
    switch(masOpp){
        case 'si':
            admOptions();
        break;
        case 'no':
            console.log('Gracias por tu tiempo! Vuelve pronto.');
        break;
        case null :
            console.log('Gracias por tu tiempo! Vuelve pronto.');
        break;
        default:
            console.log("Por favor la pregunta solo acepta 'si' o 'no', vuelve a intentarlo.");
            masOpcion();
        break;
    };       
} ;

function flightNumber(){
    let prueba = true;
    let numero = Math.floor(Math.random() * 16);
    numero = numero + 1;
    for(let i = 0; i < flights.length; i++){
        if(flights[i]['id'] === numero){
            prueba = false;
        };
    };
    if (prueba === true){
        return numero;
    } else {
        return flightNumber();
    };
} ;

function addFlightToArr(id, to, from, cost, scale) {
    let myFli = {
        id,
        to,
        from,
        cost,
        scale
    }
    if(flights.length >= 15) {
        console.log('El nuevo listado de vuelos es:\n\n');
        imprimirAdd();
        let alt = window.alert('Demaiados vuelos. Elimina alguno para poder añadir nuevos.');
        masOpcion();
    } else {
        flights.push(myFli);
        console.log('El vuelo ha sido añadido. Gracias!\n\n');
        addMoreFlights(); 
    };
} ;

function addFlights() { 
    let identificador = flightNumber();
    let destino = window.prompt('¿Cuál es el destino del vuelo?') ;
    let origen = window.prompt('Cuál es el origen del vuelo') ;
    let precio = window.prompt('¿Cuál es el precio del vuelo?') ;
    let escala = window.prompt('¿Hace escala el vuelo? si/no') ;
    if(destino === null || origen === null || precio === null || escala === null) {
        console.log('Gracias por tu tiempo! Vuelve pronto.');
    } else {        
        precio = parseFloat(precio);
        if(isNaN(precio)){
            console.log('Por favor el precio de vuelo solo acepta números, revise los datos introducidos.');
            addFlights(); 
        } ;
        if(escala === 'si') {
            escala = true;
        } else if (escala === 'no') {
            escala = false;
        } else {
            console.log("Por favor la escala del vuelo solo acepta 'si' o 'no', revise los datos introducidos.");
            addFlights();
        } ;
        addFlightToArr(identificador, destino, origen, precio, escala);          
    } ;
} ;

function addMoreFlights(){
    let addMas = window.prompt('Quieres añadir más vuelos? si/no');
        switch(addMas){
            case 'si':
                addFlights();
            break;
            case 'no':
                console.log('El nuevo listado de vuelos es:\n\n');
                imprimirAdd();
                masOpcion(); 
            break;
            case null :
                console.log('Gracias por tu tiempo! Vuelve pronto.');
            break;
            default:
                console.log("Por favor la pregunta solo acepta 'si' o 'no', vuelve a intentarlo.");
                addMoreFlights();
            break;
        }; 
} ;

function dltFlights() {
    let idElim = window.prompt('Introduce el número del vuelo que quieres eliminar.');
    if(idElim === null){
        console.log('Gracias por tu tiempo! Vuelve pronto.')
    } else {
        idElim = parseFloat(idElim);
        let seguro;
        for(let i = 0; i < flights.length; i++){
                if(flights[i]['id'] === idElim) {
                    seguro = true;
                };
        };
        if (seguro === true) {
            for(let i = 0; i < flights.length; i++){
                    if(flights[i]['id'] === idElim) {
                        flights.splice(i,1);
                    };
            };
            console.log('El vuelo se ha eliminado.\n\n');
            deleteMoreFlights();     
        } else {
            console.log('No se ha encontrado ningun vuelo con ese número. Intentalo de nuevo.');
            dltFlights();
        };
    };
} ;

function deleteMoreFlights(){
    let deleteMas = window.prompt('Quieres eliminar más vuelos? si/no');
        switch(deleteMas){
            case 'si':
                dltFlights();
            break;
            case 'no':
                console.log('El nuevo listado de vuelos es:\n\n');
                imprimirAdd();
                masOpcion(); 
            break;
            case null :
                console.log('Gracias por tu tiempo! Vuelve pronto.');
            break;
            default:
                console.log("Por favor la pregunta solo acepta 'si' o 'no', vuelve a intentarlo.");
                deleteMoreFlights();
            break;
        }; 
};

function viewFlights() { 
    let media = midPrice();
    let name = window.prompt('Introduce tu nombre de usuario:');
    if(name === null){
        return 'Gracias por tu tiempo! Vuelve pronto.'
    } else {
        console.log('Bienvenido ' + name + '!\n\nLos vuelos de hoy son:\n\n');
    } ;
    imprimir();
    console.log('\nEl precio medio de los vuelos hoy es: ' + media + ' €.\n\n');
    conEscala();
    console.log('\nLos destinos de los últimos 5 vuelos de hoy son: \n\n');
    impUltimosDes();
    console.log('\n');
    admOrUser();
    return 'Bye!'
} ;


viewFlights();




