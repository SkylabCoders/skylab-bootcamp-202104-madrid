function sumar(a,b){
    return a+b;
}

function main(nombre){
    return 'hola que tal ' + nombre;
}

function crearArray(){
    return new Array();
}

function containsWord(){
    return [1, 2, 3, 'pepe', 'string'];
}
module.exports = {main: main, sumar:sumar, crearArray:crearArray, containsWord:containsWord}

