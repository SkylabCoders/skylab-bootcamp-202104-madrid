function calculadora(n1,n2){
   
    // definicion de los operadores
    let opSum = n1 + n2;
    let opRest = n1 - n2;
    let opMult = n1 * n2;
    let opDiv = n1 / n2;
    let opRaiz = Math.sqrt(n1);

    

    // array resultado

    let resultado =[];
    resultado.push(opSum)
    resultado.push(opRest)
    resultado.push(opMult)
    resultado.push(opDiv)
    //resultado.push(opRaiz) 

    // operaciones

    if  (typeof n1 === 'number' && typeof n2 === 'undefined'){
      console.log("Este es el resultado de tu raíz cuadrada " + opRaiz.toFixed(3)) // no se si la raíz también tiene que estar acotada a 3 decimales. En caso de que no sea necesario quitar el toFixed(3)
    } else if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        console.log("Por favor, introduce solo numeros")
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

    



}    

calculadora(0, 1)
