document.addEventListener("DOMContentLoaded", () => {
  const cuadricula = document.querySelector(".div__cuadricula");
  let width = 10;
  let bombAmount = 20;
  let isGameOver = false;
  let grid = [];
  function createSquares() {
    for (let i = 0; i < width; i++) {
      const container = document.createElement("div");
      cuadricula.appendChild(container);
      container.classList.add(`row`);
      grid[i] = container;

      for (let j = 0; j < width; j++) {
        const square = document.createElement("div");
        grid[i][j] = square;
        square.classList.add(createRandomClass()[j]);
        square.setAttribute('id', j);
        container.appendChild(square);
      }
    }
  }
  createSquares();

  function checkBombs() {
    for (let i; i < grid.length; i++) {
      for (let j; j< grid[i].length; j++) {
        total = 0;
        const isLeftEdge = (j === 0)
        const isRightEdge = (j === 9)
        if (grid[i][j].classList.contains("ok")) {
          if (!isLeftEdge && grid[i][j].contains('bomb') && grid[i][j] - 1) total++;
        
        }
      }
    }
  }
  checkBombs()
  function createRandomClass() {
    const bombsArr = Array(2).fill("bomba");
    const okArr = Array(8).fill("ok");
    const fullArr = okArr.concat(bombsArr);
    const randomArr = fullArr.sort(() => Math.random() - 0.5);
    return randomArr;
  }
});
