function calculadora(num1, num2 = 'empty') {
    var sum = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    
    if(typeof num1 === 'number' && num2 === 'empty' ) {
        var square = Math.sqrt(num1);
        if (Number.isInteger(square)) {
            return square;
        } else {
            return square.toFixed(3);
        }

    } else if (typeof num1 === 'number' && typeof num2 === 'number') {
        var arrResult = ['Results:']

        if(Number.isInteger(sum)) {
            arrResult.push('The result of the sum is:', sum);
        } else {
            arrResult.push('The result of the sum is:', sum.toFixed(3));
        }

        if(Number.isInteger(sub)) {
            arrResult.push('The result of the rest is:', sub);
        } else {
            arrResult.push('The result of the rest is:', sub.toFixed(3));
        }

        if(Number.isInteger(mul)) {
            arrResult.push('The result of the product is:', mul);
        } else {
            arrResult.push('The result of the product is:', mul.toFixed(3));
        }

        if(Number.isInteger(div)) {
            arrResult.push('The result of the division is:', div);
        } else {
            arrResult.push('The result of the division is:', div.toFixed(3));
        }

        return arrResult.join('\n');

    } else {
        return 'Please use JUST numbers (:';
    }    
}
