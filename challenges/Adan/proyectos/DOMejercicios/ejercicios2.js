    let list =[]
  function add(){
  
    let titulo = document.getElementById("titulo").value;
    console.log(titulo)
        let descripcion = document.getElementById("descripcion").value;
        let imagen = document.getElementById("imagen").value;
           let obra = {title: titulo,
               description: descripcion,
               image: imagen}
        list.push(obra)
        print()
            }
function print(){
let encabezado = document.querySelector('#section__parte2')
console.log(encabezado)
encabezado.innerHTML = ""
for(i=0; i<list.length;i++){

let newTitulo = document.createElement("div")
newTitulo.innerHTML += `<h1>Titulo: ${list[i].title} </h1>`

let newDescription = document.createElement("div")
newDescription.innerHTML += `<h1>Description: ${list[i].description} </h1>`


let newImage = document.createElement("div")
newImage.innerHTML += `<h1>Image: ${list[i].image} </h1>`

encabezado.appendChild(newTitulo)
encabezado.appendChild(newDescription)
encabezado.appendChild(newImage)
}
}

let coche1 = {
    marca: "BMW",
modelo: "X2",
    motor: "300HP",
}
let coche2 = {
    marca: "VW",
    modelo: "Z1",
    motor: "400HP",
    }
  function referencia(marca, modelo, motor) {
       this.marca = marca;
       this.modelo = modelo;
       this.motor = motor;
       return JSON.parse(JSON.stringify(this))       
    }
coche1.f = referencia
coche2.f = referencia

class Coche{
    marca = undefined;
    modelo = undefined;
    motor = undefined;
    color = undefined;
    constructor(marca, modelo, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.color = color;
     }
}
function principal(num1, num2, callback) {
  let result = num1 * num2
  callback(result)
 }
 function operacion(num){
  for (let i=1; i<11; i++){
      console.log(`El resultado de ${num} * ${i} = ${num * i}`)
  }
 }
 
 


// generar un objeto que tenga un contructor y que acepte como parametros las propiedadsa