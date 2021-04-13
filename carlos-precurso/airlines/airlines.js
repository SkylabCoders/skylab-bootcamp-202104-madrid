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
}

function escalas(){
    const escala = [];
    
    for(let j = 0; j < flights.length; j++){
      if(flights[j].scale === true) {
        escala.push(flights[j]);
      };
    }
    console.log(`El número de vuelos que realiza al menos una parada es ${escala.length}`)
}

function lastFlights(){
    let last = []
    
    for(let u = 0; u < flights.length; u++) {
        if (u > flights.length - 6){
          last.push(flights[u].to);

        }
    }
    last = last.join('\n- ');
    console.log('Los últimos 5 destinos del día son:\n- '+ last);
}


function greeting(){

  let nombre = window.prompt('Introduzca su nombre');
  
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
  return 'Hasta pronto!'
};


greeting();