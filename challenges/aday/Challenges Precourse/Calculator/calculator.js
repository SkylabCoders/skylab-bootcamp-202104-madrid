function calcular(num1, num2 = 'blank') {
    
    let sumar = num1 + num2;
    let restar = num1 - num2;
    let multiplicar = num1 * num2;
    let dividir = num1 / num2;
    
    let resultados = [];
    resultados.push(sumar);
    resultados.push(restar);
    resultados.push(multiplicar);
    resultados.push(dividir);

    if(typeof num1 === 'number' && num2 === 'blank') {
        console.log(Math.sqrt(num1));
    } else if(isNaN(num1) && typeof num2 === 'number') {
        console.log('Por favor, asegúrate de que introduces valores numéricos');
    } else if(typeof num1 === 'number' && isNaN(num2)) {
        console.log('Por favor, asegúrate de que introduces valores numéricos');
    } else {
        if(Number.isInteger(sumar)) {
            console.log('El resultado de la suma es: ' + resultados[0]);
        } else {
            console.log('El resultado de la suma es: ' + resultados[0].toFixed(3));
        };
    
        if(Number.isInteger(restar)) {
            console.log('El resultado de la resta es: ' + resultados[1]);
        } else {
            console.log('El resultado de la resta es: ' + resultados[1].toFixed(3));
        };
    
        if(Number.isInteger(multiplicar)) {
            console.log('El resultado de la multiplicación es: ' + resultados[2]);
        } else {
            console.log('El resultado de la multiplicación es: ' + resultados[2].toFixed(3));
        };
    
        if(Number.isInteger(dividir)) {
            console.log('El resultado de la división es: ' + resultados[3]);
        } else {
            console.log('El resultado de la división es: ' + resultados[3].toFixed(3));
        };
    }
};