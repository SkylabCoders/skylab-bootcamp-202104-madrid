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

let nombreUsuario = prompt('Bienvenido!! Introduce tu nombre por favor');
alert('Hola ' + nombreUsuario + ', estás en Skylab airlines');
let sumaCoste = 0;
let vuelosEscala = [];

for(let i = 0; i < flights.length; i++){//Itera el array 'flights' para mostrar los mensajes con la información de los diferentes vuelos.
    if(flights[i].scale == false){
        console.log('El vuelo con origen: ' + flights[i].from + ' y destino ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y no realiza ninguna escala.')
    }else{
        console.log('El vuelo con origen: ' + flights[i].from + ' y destino ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y realiza escala.')
    }
}

function mediaCost(){//Devuelve el coste medio de los vuelos.
    for(let j = 0; j < flights.length; j++){
        sumaCoste += flights[j].cost;//Suma cada iteración del coste de cada vuelo a 'sumaCoste'
    }
    return (sumaCoste/(flights.length)).toFixed(2);//Devuelve el sumatorio dividido entre el número de vuelos.
}
console.log('El coste de medio de los vuelos ofrecidos hoy es de: ' + mediaCost() + '€');

for(let q = 0; q < flights.length; q++){//Agrega cada vuelo con escala al array 'vuelosEscala
    if(flights[q].scale === true){
        vuelosEscala.push(flights[q]);
    }
}

console.log('Son ' + vuelosEscala.length + ' vuelos los que realizan escala:')

for(let n = 0; n < vuelosEscala.length; n++){//Recorre 'vuelosEscala' para mostrar sus id´s
    console.log('- id ' + vuelosEscala[n].id)
}