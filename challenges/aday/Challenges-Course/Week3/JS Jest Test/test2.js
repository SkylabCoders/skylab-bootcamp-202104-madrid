/// Para convertirlo en lista, se crea class lista y se borra "function" y las "const". Se accede con this

class Lista {

    constructor(){};
    
    sumar(numero1, numero2) {
        return numero1 + numero2;
    };
    
    saludar(objeto) {
        return (`Hola ${objeto.nombre}!`);
    };
    
    restar(a,b) {
        return a-b;
    }    
}

// Constructor para recoger el JS en un objeto
const claseLista = new Lista();


/// ESTRUCTURA DE UNA CLASE: Para acceder a un método (función) dentro de la clase -> THIS. Al pulsar this. aparecen las opciones
/// Las variables funcionan como una propiedad (no necesitan let ni const)
/// Las funciones funcionan como métodos


class Coche {

/// PROPIEDADES DE LA CLASE (color, marca, puertas, etc.)

/// CONSTRUCTOR

/// MÉTODOS

}