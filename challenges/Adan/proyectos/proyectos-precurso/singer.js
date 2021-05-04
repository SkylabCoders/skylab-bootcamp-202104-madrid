let singer = {surname: 'turner'}
let pilot = {surname: 'kamal'}
singer.surname = pilot.surname


function strictEquals(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)) {
 if(a < b || a > b){
     console.log(false)
 } else {
     console.log(true)
 }
} else if(Number.isNaN(a) && Number.isNaN(b)) {
    console.log(false)
} else if(Number.isNaN(a) && Number.isInteger(b)) {
    console.log(false)
} else if(Number.isInteger(a) && Number.isNaN(b)) {
    console.log(false)
}
}
let vehiculo = {
    color: undefined,
    marca: undefined,
    modelo: undefined,
    combustible: undefined
    }
    
    let coche = {
    __proto__: vehiculo, 
    puertas: 4,
    carroceria: "deportiva",
    motor: "V8",
    matrícula: "xyz 2021"
    } 
    function ejercicio(obj){

        let ask = prompt("Que propiedad quieres ver o cambiar de coche?")
        console.log(obj[ask])
       switch(ask){
           case obj[ask]:
           console.log(obj[ask])
      case obj[ask] === undefined: 
          console.log("no establecido")
          let askProp = prompt("Que valor le quieres poner a la propiedad?")
          obj[ask] = askProp
      case "Basta ya":
          console.log("BYEE")   
   }
   }
   let array = []

function ejercicio(obj){

     let ask = prompt("introduce el nombre de la propiedad que quieres ver o cambiar")
    
       if (obj[ask]){           
          console.log(obj[ask]);
          ejercicio(obj)
        } else if (obj[ask] === undefined){ 
            console.log("no establecido")
            let askProp = prompt("Que valor le quieres poner a la propiedad?")
            obj[ask] = askProp
            console.log(obj)
            array.push(obj)
            ejercicio(obj)
        }
       else if(ask === "basta ya"){
           return "BYEE" 
       }
}

