//MAP

let arr = [1, 2, 3]
function mapa(array, callbackFunct){
    let arrResult = [];
    let contador = -1;
    for (let item of array){
        contador++;
        arrResult[contador] = callbackFunct(item);
    } return arrResult;
}
function multiplicar(num1){
return num1 *= 2
}
function restar(num1) {
    return num1 -= 1 
}
let prueba = mapa(arr, (x) => { return x*3});


//MAP

//FILTER







//FILTER
























let prueba = mapa(arr, (num1) => {
  return num1 * 4;
});

function multiplicacion(num1, num2, callback) {
  callback(num1, num2);
}

function operacion(num1, num2) {
  let resultado = num1 * num2;
  for (let i = 0; i < 10; i++) {
    console.log(
      `${resultado} multiplicado por ${i} es igual a ${resultado * i}`
    );
  }
}
multiplicacion(2, 3, operacion);

//  let coche1 = {
//     marca: "BMW",
//     modelo: "X2",
//     motor: "300HP",
//    };
//  let coche2 = {
//      marca: "VW",
//      modelo: "Z1",
//      motor: "400HP",
//    };

//    function mostrarCoche(callback, objeto, propiedad){
//     return callback(objeto, propiedad);
//    }

//    function mostarParametro(coche, propiedad){
//        return  `hola ${coche[propiedad]}`;
//    }

//    mostrarCoche(mostarParametro, coche1, 'marca')

// function ejemplo (num1, num2, callback){
//     num1 = num1+10;
//     num2 = num2+10;
//     setTimeout(()=>{
//     callback(num1,num2)
//     },4000);
// }
// function callback(num1,num2){ console.log(num1+num2)}
