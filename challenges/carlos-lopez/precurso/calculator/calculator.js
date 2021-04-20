function calculadora(a, b = 'sn') {
    
    var mult = a * b;
    var sum = a + b;
    var rest = a - b;
    var div = a / b;

    var resultados = [];
    resultados.push(mult);
    resultados.push(sum);
    resultados.push(rest);
    resultados.push(div);

    if (typeof a === 'number' && b === 'sn') {
        return Math.sqrt(a).toFixed(3);

    } else if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Introduzca numeros pls!!';
    
    } else if (typeof a === 'number' && typeof b === 'number') {
        
        if (Number.isInteger(sum) || Number.isInteger(mult) || Number.isInteger(rest) || Number.isInteger(div)) {
            return 'Los resultados son:\n multiplicados igual a ' + resultados[0] + '\n sumados igual a ' + resultados[1] + '\n restados igual a ' + resultados[2] + '\n divididos igual a ' + resultados[3];
        } else {
            return 'Los resultados son:\n multiplicados igual a ' + resultados[0].toFixed(3) + '\n sumados igual a ' + resultados[1].toFixed(3) + '\n restados igual a ' + resultados[2].toFixed(3) + '\n divididos igual a ' + resultados[3].toFixed(3);
        }
    } 

}
calculadora(3);


