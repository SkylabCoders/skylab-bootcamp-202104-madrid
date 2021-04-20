
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
  
   
  
  
  let username = prompt("Por favor, introduce tu nombre")
  let welcome = alert("Bienvenido a Skylab Airlines " + username)
  
  function airlines(){
  
    
      console.log("Esta es nuestra lista de vuelos:")
  
      
  
       //vuelos mostrados de forma amigable
  
      for(let i = 0; i < flights.length; i++) {
          if (flights[i].scale === true){
  
              console.log("El vuelo con ID " + flights[i].id + " y origen " + flights[i].from + " con destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y realiza escala.");
            } else {
              console.log("El vuelo con ID " + flights[i].id + " y origen " + flights[i].from + " con destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y no realiza escala.");
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
  
  
  
  
  let pregunta = prompt("¿Eres administrador o usuario?");
  
  switch(pregunta) {
    case "administrador":
       
      admin();
      break;
    case "usuario":
      
      user();
     break;
    default:
     alert("Eres un robot o no has escrito bien 'administrador' o 'usuario");
  }  
  
  function admin(){
     alert("Hola administrador " + username);
  
    let masVuelos = prompt("¿Deseas crear un nuevo vuelo? Escriba 'si' o 'no'")
    if (masVuelos === "si"){
      newFlight()
  
    } else if (masVuelos === 'no'){
      removeFlights()
    } else {
      alert("Gracias por usar esta aplicación. Adiós.")
    }
  
    function newFlight(){
      
      newFrom = prompt("Escriba el origen")
      newTo = prompt("Escriba el destino ")
      newCost = prompt("Escriba el coste")
      newCost = parseFloat(newCost)
      if(isNaN(newCost)){
          alert("Por favor, introduzca solo valores numéricos")
          newFlight()
      } else {
      newScale = prompt("¿Tiene escalas? Escriba 'si' o 'no'")
      if (newScale === "si"){
        newScale = true
  
      } else if (newScale === 'no'){
        newScale = false
      } else{
        alert("Por favor, escriba solo 'si' o 'no' cuando le pregunten por las escalas")
        newFlight()
      }
    }
      
        let nuevoVuelo = { id: flights.length, to: newTo, from: newFrom, cost: newCost, scale: newScale }
        flights.push(nuevoVuelo)
  
        for(let i = 0; i < flights.length; i++) {
          if (flights[i].scale === true){
  
              console.log("El vuelo con ID " + flights[i].id + " y origen " + flights[i].from + " con destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y realiza escala.");
            } else {
              console.log("El vuelo con ID " + flights[i].id + " y origen " + flights[i].from + " con destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y no realiza escala.");
          }
          
       } 
  
        let otroVuelo = prompt("¿Deseas añadir otro vuelo? Escriba 'si' o 'no'");
        if (flights.length === 15 ){ 
          alert("No se admiten más vuelos")
          return removeFlights()
        } else if (otroVuelo === 'si'){
          return newFlight()
          
        } else if (otroVuelo  === 'no'){
          
          removeFlights()
        }
        else {
          removeFlights()
        }
  
      }
  
      function removeFlights(){
        
  
        
        let borrar = prompt("¿Deseas borrar algún vuelo? Escriba 'si' o 'no'");
        
        switch (borrar){
          case "si":
            let removeId = prompt("Introduce el ID que quieres borrar. Volverá al menú anterior si introduce un parámetro no válido o un vuelo ya borrado")
            removeId = parseInt(removeId)
            if (removeId > flights.length){
              alert("El vuelo no existe")
              
            } else { 
  
              for (let i = 0; i < flights.length; i++){
                if (flights[i].id === removeId){
                  delete flights[i].id;
                  console.log("Su vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " ha sido eliminado");
                  
                 
                  
                } 
              }
                
              } 
              removeFlights()
            break;
            case "no":
                despedida();
            break;    
            default:
              alert("Por favor escriba 'si' o 'no'")
              removeFlights();
            }
            
          } 
                
        }
                  
  
  function user(){
    alert("Hola usuario " + username)
    consultaVuelos();
  }
  
  
  
  function consultaVuelos(){
    
      let consulta = prompt("¿Deseas ver nuestros vuelos ordenados por precio de mayor a menor? Escriba 'si' o 'no'")
      
      
      let ordenMayorMenor = flights.slice(0).sort(function(a, b){   
                    
          if (a.cost > b.cost) {
                 return -1;
            
          }
      });
      
      if (consulta === 'si') {
        
        for(let i = 0; i < ordenMayorMenor.length; i++) {
          if (ordenMayorMenor[i].scale === true){
            
            console.log("El vuelo con ID" + ordenMayorMenor[i].id + " y origen " + ordenMayorMenor[i].from + " con destino: " + ordenMayorMenor[i].to + " tiene un coste de " + ordenMayorMenor[i].cost + "€ y realiza escala.");
          } else {
            console.log("El vuelo con ID" + ordenMayorMenor[i].id + " y origen " + ordenMayorMenor[i].from + " con destino: " + ordenMayorMenor[i].to + " tiene un coste de " + ordenMayorMenor[i].cost + "€ y no realiza escala.");
          }
          
       };
       compra();
  
       
      } else if (consulta === 'no'){
        consultaVuelos2();
      } else {
        alert("Por favor, escriba 'si' o 'no'");
        consultaVuelos();
      }
      
    }
  
    function consultaVuelos2(){
      let consulta2 = prompt("¿Deseas ver nuestros vuelos ordenados por precio de menor a mayor? Escriba 'si' o 'no'")
      
      let ordenMenorMayor = flights.slice(0).sort(function(a, b){  
                    
         if (a.cost < b.cost) {
             return -1;
       
          }
      });
    if (consulta2 === 'si') {
      
      for(let i = 0; i < ordenMenorMayor.length; i++) {
        if (ordenMenorMayor[i].scale === true){
  
            console.log("El vuelo con ID " + ordenMenorMayor[i].id + " y origen " + ordenMenorMayor[i].from + " con destino: " + ordenMenorMayor[i].to + " tiene un coste de " + ordenMenorMayor[i].cost + "€ y realiza escala.");
          } else {
            console.log("El vuelo con ID " + ordenMenorMayor[i].id + " y origen " + ordenMenorMayor[i].from + " con destino: " + ordenMenorMayor[i].to + " tiene un coste de " + ordenMenorMayor[i].cost + "€ y no realiza escala.");
        }
      ;  
     } 
     compra();
    } else if (consulta2 === 'no'){
      alert("Gracias por usar este servicio " + username + ". Adiós")
    } else {
      alert("Por favor, escriba 'si' o 'no'");
      consultaVuelos2();
    }
  
  }
  
  function compra(){
    let buyFLight = prompt("¿Desea comprar un vuelo? Escriba 'si' o 'no")
    
  
    if (buyFLight === 'si'){
      let identificador = prompt("Introduzca el ID del vuelo que desea.");
       identificador = parseFloat(identificador);
       if (identificador > flights.length || !Number.isInteger(identificador)){
         alert("El identificador es incorrecto")
         compra();
       } else {
  
        for (let i = 0; i < flights.length; i++){
          if (flights[i].id === identificador) {
          
          console.log("Gracias por comprar el vuelo con identificador " + flights[i].id + " con origen " + flights[i].from + " y destino " + flights[i].to)
          alert("Su vuelo ha sido comprado, compruebe los datos en la consola")
  
           } 
        } 
       
      }
    
      
    } else if (buyFLight === 'no') {
      despedida();
    } else{
      alert("Por favor, escriba 'si' o 'no' ");
      compra();
    }
  }
  
  function despedida(){
    alert("Gracias por consultar Skylab Airlines. Adiós");
  }
  
  