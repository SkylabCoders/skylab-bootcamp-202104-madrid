
function calculadoraPro(){
  

    let newNumber;
    let numberList = [];

  //Adquisición de números
    
    do {
    newNumber = prompt('Introduce un número o pulsa cancelar para salir');
     numberList.push(newNumber)
    } while (newNumber !== null) 

    // Conversión de los string del array en numbers

    for (var i=0; i<numberList.length; i++) {
    numberList[i] = parseInt(numberList[i]);
    
    }
    
    // filtrado de todo lo que no sea número

    function filtrado(numberList) {
      return Number.isInteger(numberList);
    }
    
    var filtrados = numberList.filter(filtrado);
    
    
    
    console.log("Tus números son: " + filtrados)
    
    // definicion de los operadores
    let opSum = filtrados.reduce(function(a, b){ return a + b; });;
    let opRest = filtrados.reduce(function(a, b){ return a - b; });;
    let opMult = filtrados.reduce(function(a, b){ return a * b; });;
    let opDiv = filtrados.reduce(function(a, b){ return a / b; });;
    let opRaiz = Math.sqrt(filtrados);

    
   

    // array resultado

    let resultado =[];
    resultado.push(opSum)
    resultado.push(opRest)
    resultado.push(opMult)
    resultado.push(opDiv)
    //resultado.push(opRaiz)

    // operaciones

    if  (filtrados.length === 1){
      console.log("Este es el resultado de tu raíz cuadrada " + opRaiz.toFixed(3))
    } else {
        if (Number.isInteger(opSum)){
          console.log("Este es el resultado de tu suma " + resultado[0]);
        } else {
          console.log("Este es el resultado de tu suma " + resultado[0].toFixed(3));
        }

        if  (Number.isInteger(opRest)){
          console.log("Este es el resultado de tu resta " + resultado[1]);
        } else {
          console.log("Este es el resultado de tu resta " + resultado[1].toFixed(3));
        } 
        
        if (Number.isInteger(opMult)){
          console.log("Este es el resultado de tu multiplicación " + resultado[2]);
        } else {
          console.log("Este es el resultado de tu multiplicación " + resultado[2].toFixed(3));
        } 
        
        if (Number.isInteger(opDiv)){
          console.log("Este es el resultado de tu división " + resultado[3]);
        } else {
          console.log("Este es el resultado de tu división " + resultado[3].toFixed(3));
        }


    }

    // Nueva operación
    nuevaOp();
    function nuevaOp(){
    let newOp = prompt("¿Desea hacer otra operación? Escriba 'si' o 'no");
    
  
      switch(newOp) {
        case "si":
          calculadoraPro();
          break;
       case "no":
          alert("Gracias por usar esta calculadora");
          break;
        default:
            alert("Por favor escriba 'si' o 'no'");
            nuevaOp();
        }
    }
          
       
    

}

calculadoraPro();

    

    
    
  
