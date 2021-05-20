function saludar(nombre) {
    return "hola que tal " + nombre;
};

function sumar(a, b) {
    return a+b;
}

function crearArray() {
    return [];
}

function containWord() {
    return [1, 2, 3, 4, 'pepe', 'string'];
}

function multiplicar(numero, callback) {
    let num = numero * 10;
    return callback(num);
}

function tabla(numero) {

    return numero * 5}

    function check(cadena) {
        return cadena;
    }

module.exports = {saludar: saludar, sumar:sumar, crearArray: crearArray, containWord: containWord, multiplicar: multiplicar, tabla: tabla, check: check}