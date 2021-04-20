function calcular() {

    let num1 = Number(prompt('Por favor, introduzca el primer número'));
    
    if(isNaN(num1) || num1 === '' || num1 === null || num1 === undefined) {
        alert('Por favor, asegúrate de que introduces valores numéricos');
        calcular();
    };

    let num2 = Number(prompt('Por favor, introduzca el segundo número'));

    if(isNaN(num2) || num2 === '' || num2 === null || num2 === undefined) {
        alert('Por favor, asegúrate de que introduces valores numéricos');
        calcular();
    };
    
console.log('Los números que has introducido son: ' + num1 + ' y ' + num2);
        
        let sumar = num1 + num2;
        let restar = num1 - num2;
        let multiplicar = num1 * num2;
        let dividir = num1 / num2;
        
        let resultados = [];
        resultados.push(sumar);
        resultados.push(restar);
        resultados.push(multiplicar);
        resultados.push(dividir);
    
       if(typeof num1 === 'number' && num2 === 0) {
            console.log('La raíz cuadrada de ' + num1 + ' es ' + Math.sqrt(num1));
        } else if(isNaN(num1) && isNaN(num2)) {
            alert('Por favor, asegúrate de que introduces valores numéricos');
        } else if(num1 === 0 && num2 === 0) {
            alert('Hasta pronto!');
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
    
        let retry = prompt('Quieres realizar otro cálculo? y/n');
    
    if(retry == 'y') {
        return calcular();
    } else {
        alert('Hasta pronto!');
    }
    
    };
    
    calcular();