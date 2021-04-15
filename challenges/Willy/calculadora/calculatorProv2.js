
function calculadoraPro(){
    let n1;
    let n2;
    let resultado =[];
  
    adquirirNum();
    function adquirirNum() {

        n1 = parseFloat(prompt('Por favor, introduzca el primer número'));
    
        if(n1 === '' || n1 === null || isNaN(n1)) {
        alert('Por favor, introduce solo números');
        adquirirNum();
        } 

        n2 = parseFloat(prompt('Por favor, introduzca el segundo número'));

        if(n2 === '' || n2 === null || isNaN(n2)){
        alert('Por favor, introduce solo números');
        adquirirNum();
        } 
        
    };
    
    // definicion de los operadores
    let opSum = parseInt(n1) + parseInt(n2);
    let opRest = n1 - n2;
    let opMult = n1 * n2;
    let opDiv = n1 / n2;
    let opRaiz = Math.sqrt(n1);
    let opRaiz2 = Math.sqrt(n2);
    
    
    
    
    // array resultado
    
    resultado.push(opSum)
    resultado.push(opRest)
    resultado.push(opMult)
    resultado.push(opDiv)
    

    // operaciones

    if  (n1 !== 0 && n2 === 0){
      console.log("Este es el resultado de tu raíz cuadrada " + opRaiz.toFixed(3))
    } else if  (n2 !== 0 && n1 === 0){
        console.log("Este es el resultado de tu raíz cuadrada " + opRaiz2.toFixed(3))
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
          resultado = [];  
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

    

    
    
  
if(isNaN(n2) || n2 === '' || n2 === null || n2 === undefined) {
    alert('Por favor, introduce solo números');
    adquirirNum();