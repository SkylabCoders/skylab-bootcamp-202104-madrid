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
];

function imprimir() {
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y realiza escalas.') ;
        } else {
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €, y no realiza ninguna escala.') ;
        }
    } ;
}

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
}

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
}

function sinEscala(){
    let sinEsc = 0;
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === true){
            sumEsc++;
        } ;
    } ;
    console.log('Hay un total de ' + sinEsc + ' vuelos sin escala hoy: \n\n')
    for(let i = 0; i < flights.length; i++){ 
        if(flights[i].scale === false){
            console.log('\tEl vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ', tiene un precio de: ' + flights[i].cost + ' €.') ;
        } ;
    } ;

}

function impUltimosDes(){
    let destinos = [];
    for(let i = flights.length - 1; i > flights.length - 6; i--){ 
            destinos.push(flights[i].to);
    } ;
    destinos = destinos.join('\n\t- ');
    console.log('\t- ' + destinos);

}


function viewFlights() { 
    let media = midPrice();
    let name = window.prompt('Introduce tu username please');
   
    console.log('Bienvenido ' + name + '!\n\nLos vuelos de hoy son:\n');
    console.log('\n');
    imprimir();
    let opcion = window.prompt('Quieres ver el precio medio de los vuelos hoy? yes/no')
    switch(opcion){
        case 'yes' :
            console.log('\nEl precio medio de los vuelos hoy es: ' + media + ' €.');
            console.log('\n')
        break;
        case 'no' :
            console.log('\n')
        break;
        default:
            return 'Input incorrecto. Bye!'

    }
   

    let opcion1 = window.prompt('Quieres ver los vuelos con (1) o sin (2) escalas. Introduce 1 o 2')
    switch(opcion1){
        case '1' :
            conEscala();
        break;
        case '2' :
            sinEscala();
        break;
        default:
            return 'Input incorrecto. Bye!'
    }
    console.log('\n')
    let opcion2 = window.prompt('Quieres ver los destinos de los ultimos 5 vuelos? yes/no')
    switch(opcion2){
        case 'yes' :
            console.log('Los destinos de los últimos 5 vuelos de hoy son: \n ')
            impUltimosDes()
        break;
        case 'no' :
            return 'Gracias por consultar nuestros vuelos. Bye!'
        break;
        default:
            return 'Input incorrecto. Intentelo de nuevo. Bye!'

    }
    console.log('\n')
    return 'Gracias por consultar nuestros vuelos. Bye!'

}

viewFlights();



