let myArr = [5, 12, 8, 130, 44];

function comprobar(x) {
    return x > 10;
  }

function findear(array, callback) {
  let contador = 0;
  let primerValor;
  for (let item of array) {
    contador++;
  }
  for (let i = 0; i < contador; i++) {
    let resultado = callback(array[i]);
    if (resultado) {
        primerValor = array[i];
        break;
    }
  }
  return primerValor;
}
let prueba = findear(myArr, comprobar);
