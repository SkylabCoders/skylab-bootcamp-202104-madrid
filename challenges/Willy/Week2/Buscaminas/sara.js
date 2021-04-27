let bombs = 20
shuffleArr = []
arrOfSquares = []
index = 0;




function shuffleTheArray() {
    for (let i = 0; i < 100; i++) {
      if (i < bombs) {
        shuffleArr.push("bomb");
      } else {
        shuffleArr.push("empty");
      }
    }
    shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
  }
  
  function create() {
    const tablero = document.getElementById('container__mesa');
    shuffleTheArray();
    for (let i = 0; i < 10; i++) {
      arrOfSquares[i] = [];
      for (let j = 0; j < 10; j++) {
        let square = document.createElement("div");
        square.id = index;
        square.className = shuffleArr[index];
        tablero.appendChild(square);
        arrOfSquares[i].push(square);
        index++;
      }
    }
  }

  create()