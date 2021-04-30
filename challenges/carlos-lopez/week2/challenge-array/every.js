let myArr = [1, 2, 3, 4, 5];
let juicioFinal;

function comprobar(x) {
  return x < 10;
}
  function everyear(array, callback) {
    let contador = 0;
    let acumulador = 0;
    for (let item of array) {
      contador++;
    }
    for (let i = 0; i < contador; i++) {
      let resultado = callback(array[i]);
      if (resultado) {
          acumulador++;
      }
    }
    if(contador === acumulador){
        juicioFinal = true;
    } else{
        juicioFinal = false;
    }
    return juicioFinal;
  }
  let prueba = everyear(myArr, comprobar);

  module.exports = {everyear:everyear}

// expected output: true
