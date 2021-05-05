class Coche {
    marca = ''
    modelo:string;
    vendido: boolean;
    precio:number;
    color = ''
    constructor(marca:string, modelo:string, color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    static buildCar(marca:string, modelo:string, color:string):Coche{
        this.marca = marca
        this.modelo = modelo
        return new Coche()
    }
    
}
Coche.buildCar('jaguar','bonito', 'verde')
class Vehiculo{
    ruedas:number;
    motor:string;
    constructor(ruedas:number, motor:string){
        this.ruedas = ruedas;
        this.motor = motor;
    }
}
interface concesionarioInterface { //en la interfaz no creas datos, solo defines y son obligatorias, si no lo pongo donde lo implemento, peta, a no ser que le pongamos ? a la propiedad
    nombreconcesionario:string;
    id?:number;
    getNumberSelledCars():number;
}
class Coche extends Vehiculo implements concesionarioInterface{
    nombreconcesionario = "Vendecar"
    id = 4
    getRuedas(){
        return this.ruedas
    }
    getNumberSelledCars(){
        return 1
    }
    sayBrandAndModel(brand:string, model?:string){ // model en este caso es opcional, pero sale undefined si no lo pasas. Los tienes que pasar en orden, los opcionles son los ultimos
        console.log(brand, model)
    }
}
let coche = new Coche(4,"diesel");
console.log(coche)
coche.sayBrandAndModel('toyota')
class Persona {
    nombre:string;
    apellidos:string;
    edad:number;
    dni:number;
    direccion:string;
    constructor(nombre:string,apellidos:string,edad:number,dni:number, direccion:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.direccion = direccion;
    }
}
interface Adan {
    mascarilla:boolean;
    chascarespalda():void;
}
const persona = new Persona('Raul', 'Gutierrez', 20, 1900, "calle")
class Alumno extends Persona implements Adan{
    curso:string;
    materia_cursada:string;
    notation_node:string;
    mascarilla = false;
    chascarespalda(){
        console.log("chasquido")
    }
    constructor(curso:string, materia_cursada:string, notation_node: string, people: Persona){
        super(people.nombre, people.apellidos, people.edad, people.dni, people.direccion) // con el super se pasan los argumentos del constructor de Persona
        this.curso = curso;
        this.materia_cursada = materia_cursada;
        this.notation_node = notation_node;
    }
}
interface elevador {
    metros:number;
    velocidad:number;
}
// ¿Como utilizar una interface como un tipo de objeto? El as es un casteo, convierte el {} en elevador. NO ADMITE METERLE MAS PROPIEDADES
let elevator = {} as elevador
elevator.metros = 4
elevator.velocidad = 100
console.log(elevator)