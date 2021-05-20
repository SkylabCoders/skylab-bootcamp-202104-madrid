let arrNum = [];
let resultados = [];

function suma(){
    const sum = arrNum.reduce((a, b) => {
        return a + b;
    })
    resultados.push(sum);    
};
function resta(){
    const rest = arrNum.reduce((a, b) => {
        return a - b;
    })
    resultados.push(rest);   
};
function multiplicacion(){
    const mult = arrNum.reduce((a, b) => {
        return a * b;
    })
    resultados.push(mult);   
};
function division(){
    const div = arrNum.reduce((a, b) => {
        return a / b;
    })
    resultados.push(div);   
};
function print() {
    let mult = resultados[0]
    let sum = resultados[1];
    let rest = resultados[2];
    let div = resultados[3];

    console.log('tus números son: ' + arrNum.join(', '));
    console.log('\nLos resultados:\n')
    
    if (Number.isInteger(mult)) {
        console.log('multiplicados igual a ' + mult);
    } else {
        console.log('multiplicados igual a ' + mult.toFixed(3));
    };

    if (Number.isInteger(sum)) {
        console.log('sumados igual a ' + sum);
    } else {
        console.log('sumados igual a ' + sum.toFixed(3));
    };

    if (Number.isInteger(rest)) {
        console.log('restados igual a ' + rest);
    } else {
        console.log('restados igual a ' + rest.toFixed(3));
    };

    if (Number.isInteger(div)) {
        console.log('divididos igual a ' + div);
    } else {
        console.log('divididos igual a ' + div.toFixed(3));
    };
};
function moreOperation(){

    let pregunta3 = window.prompt('¿Quieres realizar otra operación? Contesta si o no');

    if (pregunta3 === 'si') {
        arrNum.splice(0, arrNum.length);
        resultados.splice(0, resultados.length);
        return calculadoraPro();
    };
};

function operaciones() {
    if (arrNum.length === 0) {
        console.log('Necesito al menos un número');
        moreOperation();
    } else if (arrNum.length === 1) {
        let raiz = arrNum[0];
            raiz = Math.sqrt(raiz);
        if (Number.isInteger(raiz)){
            console.log(raiz);
        } else {
            console.log(raiz.toFixed(3));
        };    
    } else {
        multiplicacion();
        suma();
        resta();
        division();
        print();
        moreOperation();
    }
};

function calculadoraPro() {
    
    let pregunta1 = window.prompt('Introduce un numero');
    if (pregunta1 === null || pregunta1 === 'undefined') {
        operaciones();
    } else {
        pregunta1 = parseFloat(pregunta1);
        if (isNaN(pregunta1)){
            operaciones();
        } else {
            arrNum.push(pregunta1);
            calculadoraPro();
        };
    };
    return 'Bye!';
};

calculadoraPro();