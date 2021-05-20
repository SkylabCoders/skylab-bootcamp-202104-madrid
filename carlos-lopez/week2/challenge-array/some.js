let myArr = [1, 2, 3, 4, 5];

function comprobar(x) {
    return x < 10;
  }
  function somear(array, callback) {
    let contador = 0;
    let isThere;
    for (let item of array) {
      contador++;
    }
    for (let i = 0; i < contador; i++) {
      let resultado = callback(array[i]);
      if (resultado) {
          isThere = true;
          break;
      } else {
          isThere = false;
      }
    }
    return isThere;
  }
  let prueba = somear(myArr, comprobar);

// expected output: true
