function airlines(){

  let username = prompt("Por favor, introduce tu nombre")
  let welcome = alert("Bienvenido a Skylab Airlines " + username)
  console.log("Esta es nuestra lista de vuelos " + username + ":")

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


   //vuelos mostrados de forma amigable

  for(let i = 0; i < flights.length; i++) {
      if (flights[i].scale === true){

          console.log("El vuelo con origen " + flights[i].from + " y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y realiza escala.");
        } else {
          console.log("El vuelo con origen " + flights[i].from + " y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y no realiza escala.");
      }
      
   } 

  //coste medio de los billetes

        let costeMedio = []
        let totalCosteMedio = 0;
    
  
  for(let i = 0; i < flights.length; i++) { 
          costeMedio.push(flights[i].cost);
          
        }
  
  
  for (let i in costeMedio){
      totalCosteMedio += costeMedio[i] / costeMedio.length;
      
    }
    
  console.log("¡El precio medio de nuestros billetes de solo " + totalCosteMedio.toFixed(2) + "€!¡No encontrarás mejor oferta!")

  // Número de vuelos con escalas

    let vueloConEscalas = [];
 

  for (let i = 0; i < flights.length; i++){
      if (flights[i].scale === true){
          vueloConEscalas.push(flights[i].scale)
          
          
          
      }
  }
  console.log("Solo " + vueloConEscalas.length + " de nuestros vuelos tienen escalas")

  // Mostrar los últimos 5 destinos

  let destinos = []

  for(let i = 0; i < flights.length; i++) { 
      destinos.push(flights[i].to)
  }
      
  console.log("Estos son los últimos destinos de hoy " + destinos.slice((destinos.length - 5), destinos.length));

}   
      

airlines()
