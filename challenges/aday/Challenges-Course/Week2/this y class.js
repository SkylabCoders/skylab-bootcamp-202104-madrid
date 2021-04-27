let usuario = {nombre: 'Robin', apellido: 'Hood', dni: '85294256R', func: function() {return this.dni;}};

let hacienda = {

    id: 1,
    buscarInfractores(dni) {console.log(usuario.dni)}

}

hacienda.buscarInfractores();



let FERRARI = {marca: 'Ferrari', modelo: 'To guapo', cilindrada: 'V8', color: 'rojo', constructor: function(marca, modelo, cilindrada, color) {this.marca = marca; this.modelo = modelo; this.cilindrada = cilindrada; this.color = color}};
let LAMBORGHINI = {marca: 'Lamborghini', modelo: 'molon', cilindrada: 'V10', color: 'negro'};

function info() {
    console.log(this.marca + ' ' + this.modelo + ' ' + this.cilindrada + ' ' + this.color)
};

function constructor(marca, modelo, cilindrada, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.color = color;
}

FERRARI.ff = constructor;

FERRARI.f = info;
LAMBORGHINI.f = info;

FERRARI.f();
LAMBORGHINI.f();

// FERRARI.constructor('Honda', 'PX70', '1200CV', 'gris')

let coche = {
    marca: undefined, 
    modelo: undefined, 
    cilindrada: undefined, 
    color: undefined,
    constructor: function(marca, modelo, cilindrada, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.color = color;
        return JSON.parse(JSON.stringify(this))
    }};

    let coche2 = coche.constructor('Toyota', 'Corolla', '1600CV', 'Azul');

/////////////////////////

class cochazo {
    constructor(marca, modelo, cilindrada, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
        this.color = color;
    }
  }


  let ferrari = new cochazo('Ford', 'Mustang', '2000CV', 'Negro');



  /////// Hacer una functión que tenga un callback:

function multiplicar(numero, callback) {
    let num = numero * 10;
    callback(num);
};

function tabla(numero) {

    console.log(numero * 1);
    console.log(numero * 2);
    console.log(numero * 3);
    console.log(numero * 4);
    console.log(numero * 5);
    console.log(numero * 6);
    console.log(numero * 7);
    console.log(numero * 8);
    console.log(numero * 9);
    console.log(numero * 10);
};