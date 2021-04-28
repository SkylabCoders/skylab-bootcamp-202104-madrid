let arr = ["palabra", "roca", "sal", "extremadura"];

function comprobar(word) {
  return word.length > 4;
}

function filtrar(array, callback) {
  let newArr = [];
  let contador = 0;
  let indexNew = 0;
  for (let item of array) {
    contador++;
  }
  for (let i = 0; i < contador; i++) {
    let resultado = callback(array[i]);
    if (resultado) {
      newArr[indexNew] = array[i];
      indexNew++;
    }
  }
  return newArr;
}
let prueba = filtrar(arr, (x) => {
    return x.length < 5;
})

module.exports = {filtrar:filtrar};