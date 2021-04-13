
var results = [];//Array done se almacenarán los diferentes resultados
var numb1 = "";//Primer número introducido
var numb2 = "";//Segundo número introducido
let resultSum = "";//Resultado de la suma
let resultRest = "";//Resultado de la resta
let resultMult = "";//Resultado de la multiplicación
let resultDiv = "";//Resultado de la división

numb1 = parseFloat(numb1);
numb2 = parseFloat(numb2);

const raiz = (numb1) => numb1*numb1;//Obtiene la raíz cuadrada de un numero introducido
const operations = (numb1, numb2) =>{//Obtiene los resultados de las cuatro operaciones básicas con los dos números introducidos
    resultSum = numb1+numb2;
    resultRest = numb1-numb2;
    resultMult = numb1*numb2;
    resultDiv = numb1/numb2;
}
const agregarResult = () => {//Agrega cada resultado al array 'results'
    results.push(resultSum);
    results.push(resultRest);
    results.push(resultMult);
    results.push(resultDiv);
}

const calculator = (numb1, numb2) => {//Evalua si solo se ha introducido un número , para realizar la raíz o las operaciones básicas.
    if(numb2 === null || numb1 === null){
        raiz
    }else{
        operations;
        agregarResult;
        console.log(results);
    }
}

calculator(5, 5);
debugger


