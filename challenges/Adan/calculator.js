function calculator(num1, num2) {
   let sum = num1 + num2;
   let subtract = num1 - num2;
   let multiply = num1 * num2;
   let division = num1 / num2; 
   let raizCuadrada = Math.sqrt(num1).toFixed(3)

   let results = [];
   results.push(sum);
   results.push(subtract);
   results.push(multiply);
   results.push(division);
   

   if (typeof num1 !== "number" || typeof num2 !== "number") {
       console.log("Por favor introduzca únicamente números.")
   }
   else if (typeof num1 === "number" && num2 === undefined) {
      console.log(`El resultado de la raiz cuadrada es: ${raizCuadrada}`);
   } else { 
       if (Number.isInteger(sum)) {
       console.log(`El resultado de la suma es: ${results[0]}`)
   } else {
      console.log(`El resultado de la suma es: ${results[0].toFixed(3)}`)
   } if (Number.isInteger(subtract)) {
    console.log(`El resultado de la resta es: ${results[1]}`)
} else {
    console.log(`El resultado de la resta es: ${results[1].toFixed(3)}`)
} if (Number.isInteger(multiply)) {
    console.log(`El resultado de la multiplicación es: ${results[2]}`)
} else {
    console.log(`El resultado de la multiplicación es: ${results[2].toFixed(3)}`)
} if (Number.isInteger(division)) {
    console.log(`El resultado de la división es: ${results[3]}`)
} else {
    console.log(`El resultado de la división es: ${results[3].toFixed(3)}`)
}
}
} 
calculator(7, 8);



