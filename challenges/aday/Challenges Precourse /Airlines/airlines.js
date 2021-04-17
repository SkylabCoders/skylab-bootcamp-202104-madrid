let user = prompt('Hola, cuál es su nombre?');

if(user === null) {
    user = 'Invitado';
};

alert('Hola ' + user + '! Bienvenid@ a Skylab Airlines!');

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

    function printFlights() {
        for(let i = 0; i < flights.length; i++) {
            if(flights[i].scale === true) {
                console.log('\n\tEl vuelo con ID ' + flights[i].id + ' origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€ y tiene escala.');
            } else {
                console.log('\n\tEl vuelo con ID ' + flights[i].id + ' origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€ y no tiene escala.');
            }
        };
    };

   printFlights();

   function printFlightsTwo() {
    console.log('Los vuelos disponibles ahora son:');
    for(let i = 0; i < flights.length; i++) {
        if(flights[i].scale === true) {
            console.log('\n\tEl vuelo con ID ' + flights[i].id + ' origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€ y tiene escala.');
        } else {
            console.log('\n\tEl vuelo con ID ' + flights[i].id + ' origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€ y no tiene escala.');
        }
    };
};

    let cost = [];

    for(let j = 0; j < flights.length; j++) {
        cost.push(flights[j].cost);
    };

    let sumCost = cost.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });

    let averageCost = sumCost / flights.length;

    console.log(`\n\tEl coste medio de los vuelos de hoy es de ${averageCost.toFixed(2)}€.`);

      let lastFlights = [];

      for(let k = 0; k < flights.length; k++) {
          if(k > flights.length - 6) {
              lastFlights.push(flights[k].to)
          };
      };
  
      console.log(`\n\tEl destino de los 5 últimos vuelos del día son ${lastFlights}.`);

      let flightsWithScale = [];

    for(let l = 0; l < flights.length; l++) {
        if(flights[l].scale === true) {
            flightsWithScale.push(flights[l].scale);
        }
    };

    let numberFlightsWithScale = flightsWithScale.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });

    console.log(`\n\tDurante el día de hoy un total de ${numberFlightsWithScale} vuelos efectúan escalas.`);