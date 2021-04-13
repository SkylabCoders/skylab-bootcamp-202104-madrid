let arrNum = [];

function squareOfNum(arr){
    let num1 = arr[0];
        let square = Math.sqrt(num1);
        if (Number.isInteger(square)) {
            console.log('\nResults: \n\tThe square root of ' + num1 + ' is: ' + square);
        } else {
            console.log('\nResults: \n\tThe square root of ' + num1 + ' is: ' + square.toFixed(3));
        } ;
} ;

function sumar(arr){
    let sum = arr.reduce((acc, currVa) => { 
        return acc + currVa;
    });
    if(Number.isInteger(sum)) {
        console.log('\tThe result of the sum is:', sum.toFixed(0));
    } else {
        console.log('\tThe result of the sum is:', sum.toFixed(3));
    } ;
} ;

function restar(arr){
    let rest = arr.reduce((acc, currVa) => { 
        return acc - currVa;
    });
    if(Number.isInteger(rest)) {
        console.log('\tThe result of the rest is:', rest.toFixed(0));
    } else {
        console.log('\tThe result of the rest is:', rest.toFixed(3));
    } ;

} ;

function multiplicar(arr){
    let mult = arr.reduce((acc, currVa) => { 
        return acc * currVa;
    });
    if(Number.isInteger(mult)) {
        console.log('\tThe result of the product is:', mult.toFixed(0));
    } else {
        console.log('\tThe result of the product is:', mult.toFixed(3));
    } ;

} ;

function dividir(arr){
    let div = arr.reduce((acc, currVa) => { 
        return acc / currVa;
    });
    if(Number.isInteger(div)) {
        console.log('\tThe result of the division is:', div.toFixed(0));
    } else {
        console.log('\tThe result of the division is:', div.toFixed(3));
    } ;

};

function calculos(arr){
    if(arr.length === 0){
        console.log('\nI need at least one number pls\n');
    } else if(arr.length === 1){
        squareOfNum(arrNum);
    } else {
        console.log('\nYour numbers are:\n');
        console.log(arr.join(', '));
        console.log('\nResults:\n')
        sumar(arr);
        restar(arr);
        multiplicar(arr);
        dividir(arr);
    } ;
} ;

function calculadoraPro() {
    let num = window.prompt('Enter a number or press cancel to stop.');
    if(num === null || num === 'undefined'){
        calculos(arrNum);     
    } else {
        num = parseFloat(num);
        if(isNaN(num)){
            calculos(arrNum);
        } else {
            arrNum.push(num);
            return calculadoraPro();
        } ;
    } ;

    let retry = prompt('New numbers? y/n');
    switch(retry){
        case 'y':
            arrNum = [];
            return calculadoraPro();
        break;
        case 'n':
            return 'Bye!';
        break;
        default:
            return 'Bye!';
        break;
    };
} ;

calculadoraPro();


