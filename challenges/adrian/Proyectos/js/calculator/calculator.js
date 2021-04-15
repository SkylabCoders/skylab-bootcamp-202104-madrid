'use strict'

var resultados = [];
var resultSum = "";
var resultRest = "";
var resultMult = "";
var resultDiv = "";
var raiz = "";

var numero1 = parseFloat(prompt("Introduce el primer número por favor:", 0));
while(isNaN(numero1)){
    var numero1 = parseFloat(prompt("Asegurate de que el dato introducido es un número ;)", ""));
}

var numero2 = parseFloat(prompt("Introduce el segundo número", 0));
while(isNaN(numero2)){
    var numero2 = prompt("Asegurate de que lo introduces sea un número ;)", "");
}

function calculator(numero1, numero2){
    if(numero2 === null){
        raiz = Math.sqrt(numero1);
        console.log(raiz.toFixed(3)); 
    }else if(numero1 === null){
        raiz = Math.sqrt(numero2);
        console.log(raiz.toFixed(3));
    }else{
        resultados.push(numero1+numero2).toFixed(3);
        resultados.push(numero1-numero2).toFixed(3);
        resultados.push(numero1*numero2).toFixed(3);
        resultados.push(numero1/numero2).toFixed(3);
        console.log('La suma es: ' + resultados[0]);
        console.log('La resta es: ' + resultados[1]);
        console.log('La multiplicación es: ' + resultados[2]);
        console.log('La división es: ' + resultados[3]);
    } 
}

calculator(numero1, numero2);

