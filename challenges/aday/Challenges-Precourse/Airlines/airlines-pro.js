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

    function typeOfUser() {
        let userType = prompt('Qué tipo de usuario es? (Conteste admin/user)');
        switch (userType) {
            case 'admin':
                alert('Bienvenido al panel de administrador.');
                adminProfile();
            break;
            case 'user':
                alert('Hola de nuevo ' + user + '.');
                userProfile();
            break;
            case null:
                alert('Gracias por tu visita. Esperamos volver a verte pronto!');
            break;
            default:
                alert('Por favor, selecciona qué tipo de usuario eres (Conteste admin/user)');
                typeOfUser();
            break;
        };
    };
    
typeOfUser();

    function adminProfile() {
        let adminKey = prompt('Desea añadir o eliminar un vuelo? (Conteste añadir/eliminar)');
        switch(adminKey) {
            case 'añadir':
                añadir();
            break;
            case 'eliminar':
                eliminar();
            break;
            case  null:
                alert('Gracias por tu visita. Esperamos volver a verte pronto!');
            break;
            default:
                alert('Por favor, seleccione si deseas añadir o eliminar un vuelo (Conteste añadir/eliminar)');
                adminProfile();
            break;
        };
    };

    function añadir() {
        let identificador = prompt('Seleccione el ID del vuelo');

    for(let m = 0; m < flights.length; m++) {
        if(flights[m].id == identificador) {
            alert('El ID seleccionado ya existe');
            añadir();
        } else if(isNaN(identificador)) {
            alert('Por favor, introduce solo valores numéricos');
            añadir();
        };    
    };

        let destino = prompt('Seleccione el destino del vuelo');
        let origen = prompt('Seleccione el origen del vuelo');
        let precio = prompt('Seleccione el precio del vuelo');

    if(isNaN(precio)) {
            alert('Por favor, introduce solo valores numéricos');
            añadir();
    };

        let escala = prompt('Seleccione si el vuelo realiza escala (si/no)');

    switch(escala) {
        case 'si':
            escala = true;
        break;
        case 'no':
            escala = false;
        break;
        default:
            alert('Por favor, introduce solo "si" o "no".');
            añadir();
    };
    
    if(destino === null || origen === null || precio === null || escala === null) {
        alert('Gracias por tu visita. Esperamos volver a verte pronto!');
    };
    addNewFlights(identificador, destino, origen, precio, escala);
    };

    function addNewFlights(id, to, from, cost, scale) {
        let nuevoVuelo = {
            id,
            to,
            from,
            cost,
            scale
        };
    if(flights.length >= 15) {
        alert('El nuevo máximo de vuelos permitidos es 15.')
        printFlights();
        adminProfile();
    } else {
        flights.push(nuevoVuelo);
        alert('El vuelo ha sido añadido correctamente.');
        printFlights();
        adminProfile();
    };
    };

    function eliminar() {
        let eliminarID = prompt('Introduce el ID del vuelo que desea eliminar');
        if(eliminarID === null) {
            alert('Gracias por tu visita. Esperamos volver a verte pronto!');
        } else if(isNaN(eliminarID)) {
            alert('Por favor, introduce solo valores numéricos');
            eliminar();
        } else {
            for(let i = 0; i < flights.length; i++) {
                if(flights[i].id == eliminarID) {
                    flights.splice(i,1);
                alert('El vuelo ha sido eliminado.');
                printFlightsTwo();
                adminProfile();
            }; 
        };
        };
};
    
    function userProfile() {
        let presupuesto = prompt('Para facilitarte la búsqueda, cuál es su presupuesto? (introduce la cantidad en valores numéricos)');

        if(isNaN(presupuesto)) {
            alert('Por favor, introduce solo valores numéricos.');
            userProfile();
        };

        let rangoPrecio = prompt('Quieres buscar vuelos con un precio mayor, menor o igual al que has seleccionado?');
        
        if(presupuesto === null || rangoPrecio === null) {
            alert('Gracias por tu visita. Esperamos volver a verte pronto!');
        } else {
                if(rangoPrecio === 'mayor') {
                    mayor(presupuesto);
                } else if(rangoPrecio === 'menor') {
                    menor(presupuesto);
                } else if(rangoPrecio === 'igual') {
                    igual(presupuesto);
                } else {
                    alert('Por favor, introduzca solo las palabras "mayor", "igual" o "menor"');
                    userProfile();
                };
            };
        };

        function mayor(presupuesto) {
            console.log('Los vuelos que cuestan más de ' + presupuesto + '€ son:\n');
            for(let m = 0; m < flights.length; m++) {
                if(flights[m].cost > presupuesto) {
                    console.log('\tEl vuelo con origen: ' + flights[m].to + ' y destino: ' + flights[m].from + ' tiene un coste de ' + flights[m].cost + '€ y tiene escala. Si deseas reservarlo su ID de vuelo es ' + flights[m].id);
                };
            };
            buyFlight();
        };

        function menor(presupuesto) {
            console.log('Los vuelos que cuestan menos de ' + presupuesto + '€ son:\n');
            for(let n = 0; n < flights.length; n++) {
                if(flights[n].cost < presupuesto) {
                    console.log('\tEl vuelo con origen: ' + flights[n].to + ' y destino: ' + flights[n].from + ' tiene un coste de ' + flights[n].cost + '€ y tiene escala. Si deseas reservarlo su ID de vuelo es ' + flights[n].id);
                };
            };
            buyFlight();
        };

        function igual(presupuesto) {
            console.log('Los vuelos que cuestan ' + presupuesto + '€ son:\n');
            for(let ñ = 0; ñ < flights.length; ñ++) {
                if(flights[ñ].cost === presupuesto) {
                    console.log('\tEl vuelo con origen: ' + flights[ñ].to + ' y destino: ' + flights[ñ].from + ' tiene un coste de ' + flights[ñ].cost + '€ y tiene escala. Si deseas reservarlo su ID de vuelo es ' + flights[ñ].id);
                };
            };
            buyFlight();
        };

        function buyFlight() {
            let idFlight = prompt('Seleccione el ID del vuelo que desea comprar.');
            if(isNaN(idFlight)) {
                alert('Por favor, introduce solo valores numéricos.');
                buyFlight();
            } else if(idFlight === null) {
                alert('Gracias por tu visita. Esperamos volver a verte pronto!');
            } else {
                alert('Gracias por su compra, vuelva pronto');
            };
        };


        
