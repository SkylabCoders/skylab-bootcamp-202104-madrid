function calculatorPro() {
      let newInput;
      let results = [];
      let numbers = [];
      let firstSta = alert("Hola, sus operaciones serán +, -, * y / con cada número introducido. Y en el caso de introducir un único número será la raíz cuadrada del mismo.");
      console.log(firstSta);
      do {
        newInput = prompt("Introduce un número o presiona cancelar para finalizar");
        if (newInput === null) {
        } else if (Number.isNaN(parseFloat(newInput))) {
        console.log("Por favor introduce un número");
    } else {
           numbers.push(parseFloat(newInput))
        }
      } while (newInput !== null)
 if (numbers.length === 1) {
    let raizCuadrada = Math.sqrt(numbers[0])
     console.log(`Raíz cuadrada de ${numbers[0]} es ${raizCuadrada.toFixed(3)}`)
 } else {
      function sumar(a , b){
        return a + b;
      }
      function restar(a , b){
        return a - b; 
      }
      function dividir(a , b){
        return a / b; 
      }
      function multiplicar(a , b){
        return a * b; 
      }
      let sum = numbers.reduce(sumar);
      let sub = numbers.reduce(restar);
      let division = numbers.reduce(dividir);
      let multiply = numbers.reduce(multiplicar);
      results.push(sum);
      results.push(sub);
      results.push(multiply);
      results.push(division);
      if (Number.isInteger(results[0])) {
        console.log(`El resultado de la suma es: ${results[0]}`)
    } else {
       console.log(`El resultado de la suma es: ${results[0].toFixed(3)}`)
    } if (Number.isInteger(results[1])) {
     console.log(`El resultado de la resta es: ${results[1]}`)
 } else {
     console.log(`El resultado de la resta es: ${results[1].toFixed(3)}`)
 } if (Number.isInteger(results[2])) {
     console.log(`El resultado de la multiplicación es: ${results[2]}`)
 } else {
     console.log(`El resultado de la multiplicación es: ${results[2].toFixed(3)}`)
 } if (Number.isInteger(results[3])) {
     console.log(`El resultado de la división es: ${results[3]}`)
 } else {
     console.log(`El resultado de la división es: ${results[3].toFixed(3)}`)
 }
 }
 let esoEsTodo = prompt("Quieres realizar más operaciones?", "si/no");
 switch(esoEsTodo) {
     case "si": 
     return calculatorPro()
     break;
     case "no":
    console.log("Byee")
    break;
    default: 
    console.log('Ciao')
 }
}
calculatorPro();

     
  