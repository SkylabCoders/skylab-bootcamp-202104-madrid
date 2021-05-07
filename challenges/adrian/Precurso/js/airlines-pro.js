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
let mediaCost;
let vuelosEscala = [];
let condicionUsuario;
let intrucirVuelo = "";
let idCapturar = 0;
let fromCapturar = '';
let toCapturar = '';
let costCapturar;
let scaleCapturar; 
let nuevoVuelo = {};
let quieresAñadir = "";
let vueloEliminado;
let idEliminado;
let quieresEliminar;
let precioComparado;
let vuelosMayores = [];
let vuelosIguales = [];
let vuelosMenores = [];
let maxIgualMin = "";

function mostrarVuelos(listavuelos){
    for(let i = 0; i < flights.length; i++){//Itera el array 'flights' para mostrar los mensajes con la información de los diferentes vuelos.
        if(flights[i].scale == false){
            console.log('El vuelo con origen: ' + flights[i].from + ' y destino ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y no realiza ninguna escala.')
        }else{
            console.log('El vuelo con origen: ' + flights[i].from + ' y destino ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y realiza escala.')
        }
    }
}

function mostrarMediaCost(){//Devuelve el coste medio de los vuelos.
    for(let j = 0; j < flights.length; j++){
        sumaCoste += flights[j].cost;//Suma cada iteración del coste de cada vuelo a 'sumaCoste'
    }
    mediaCost = sumaCoste/(flights.length).toFixed(2);//Devuelve el sumatorio dividido entre el número de vuelos.
    console.log('El coste de medio de los vuelos ofrecidos hoy es de: ' + mediaCost + '€');
}

function verEscalas(){
    for(let q = 0; q < flights.length; q++){//Agrega cada vuelo con escala al array 'vuelosEscala
        if(flights[q].scale === true){
            vuelosEscala.push(flights[q]);
        }
    }
    console.log('Son ' + vuelosEscala.length + ' los vuelos que realizan escala:');
}

function verIdEscalas(){
    for(let n = 0; n < vuelosEscala.length; n++){//Recorre 'vuelosEscala' para mostrar sus id´s
        console.log('- id ' + vuelosEscala[n].id)
    }
}

mostrarVuelos();
mostrarMediaCost();
verEscalas();
verIdEscalas();

function preguntarCondicion(){
    let condicionUsuario = prompt("Escribe la palabra 'ADMIN' si eres administrador o la palabra 'USER' si eres usuario");//Pregunta si eres admin
    while(condicionUsuario !== "ADMIN" && condicionUsuario !== "USER"){
        condicionUsuario = prompt('Por favor escribe correctamente la condición');
    }
    return condicionUsuario;
}

preguntarCondicion();

if(preguntarCondicion() == 'ADMIN'){
    function datosVueloIntroducido(){//Te pide los datos de un vuelo.
        idCapturar = prompt('Introduce el ID del nuevo vuelo');
        fromCapturar = prompt('Ahora introduce su origen');
        toCapturar = prompt('Su destino');
        costCapturar = prompt('¿Qué precio tiene el trayecto?(€)');
        while(scaleCapturar != 'true' && scaleCapturar != 'false'){
            scaleCapturar = prompt('¿Realiza este vuelo alguna escala?(true/false)', 'false');
        }
        
    }

    function añadiraMasVuelos(){
        for( ; flights.length < 15 || añadirVuelos == 'NO';){//comprueba que repondamos si a añadir mas vuelos, o que no halla mas de 15 vuelos para añadir mas
            quieresAñadir = prompt('¿Quieres añadir algún vuelo más a la lista?(SI/NO)');
            while(quieresAñadir != 'SI' && quieresAñadir != 'NO'){
                quieresAñadir = prompt("Introduce 'SI' o 'NO'" );
            }
            if(quieresAñadir == 'SI'){
                datosVueloIntroducido();
                if(scaleCapturar == 'true'){//convierte scale de la cadena true a booleano true
                    scaleCapturar = true;
                }else{
                    scaleCapturar = false;
                }
                nuevoVuelo = {id : idCapturar, from : fromCapturar, to : toCapturar, cost : costCapturar, scale : scaleCapturar}
                flights.push(nuevoVuelo);
                }else{
                break;
            }
        }
    }

    function eliminarVuelos(){
        while(quieresEliminar != 'NO'){//comprueba que respondemos a eliminar vuelos
            quieresEliminar = prompt('¿Quieres eliminar algún vuelo más de la lista?(SI/NO)');
            if(quieresEliminar == "SI"){
                idEliminado = prompt("introduce el ID del vuelo que quieres eliminar");
                for(let i = 0; i < flights.length; i++){
                    if (flights[i].id == idEliminado){
                    flights.splice(i, 1);        
                    }    
                }
            }
        }
        mostrarVuelos();
    }
    añadiraMasVuelos();
    eliminarVuelos();
    mostrarVuelos();
}else{
    function iterarPrecios(){
        for(h=0; h<flights.length; h++){
            if(precioComparado < flights[h].cost){
                vuelosMayores.push(flights[h]);
            }else if(precioComparado === flights[h].cost){
                vuelosIguales.push(flights[h]);
            }else{vuelosMenores.push(flights[h]);
            }
        }
    }

    function compararPrecios(){
        precioComparado = prompt('Introduce el precio que quieres comparar');
        while(isNaN(precioComparado)){
            precioComparado = prompt('Por favor introduce un número!!!');
        }
        maxIgualMin = prompt("Indicanos si quieres ver vuelos con 'MAYOR', 'MENOR' o 'IGUAL' precio")
        iterarPrecios();
        if(maxIgualMin.toUpperCase() === 'MAYOR'){
            console.log(vuelosMayores);
        }else if(maxIgualMin.toUpperCase() === 'MENOR'){
            console.log(vuelosMenores);
        }else{console.log(vuelosIguales)}
    }
    compararPrecios();
}


/*
function totalAirlines(){
    preguntarCondicion();
    if(preguntarCondicion !== "ADMIN"){
        añadiraMasVuelos();
        eliminarVuelos();            
    }else if(preguntarCondicion !== 'USER'){
        compararPrecios();
    }
}

totalAirlines();*/