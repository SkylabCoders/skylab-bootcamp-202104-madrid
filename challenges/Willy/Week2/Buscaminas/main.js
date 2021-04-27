let matriz = []
let table;
let bombas;
let shuffleArr = []
let randomBomb = 0;
let total = 0;


welcome()

function welcome(){
let askBomb = prompt("¿Cuantos cazas TIE te persiguen?")

switch(askBomb){
    
    case null:
        welcome()
        break;
    case isNaN(askBomb):
        confirm("Introduce solo números")
        welcome();
        break;
    default:
    bombas = parseInt(askBomb);
}
}

function shuffleTheArray() {
    for (let i = 0; i < 100; i++) {
      if (i < bombas) {
        shuffleArr.push("bomb");
      } else {
        shuffleArr.push("empty");
      }
    }
    shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
  }
  

function crearTablero() {

    const tablero = document.querySelector('#container__mesa');
    tablero.innerHTML = ""
    shuffleTheArray()

    for(let f = 0; f <10; f++) {
    matriz[f] = [];
        for(let c = 0; c < 10; c++) {
            let table = document.createElement('div');
            table.id = "f"+f+"_c"+c;
            table.classList.add(shuffleArr[randomBomb]) 
            table.addEventListener('click', jugar)
            table.addEventListener('contextmenu', bandera);
            tablero.appendChild(table);
            matriz[f].push(table)
            randomBomb++
        }
    }

console.log(matriz) 

};
crearTablero()


function jugar(){
    
    let shoot = new Audio()
    shoot.src = "xwing_fire.mp3"
    shoot.play()
}

function bandera(evento){
    
    if (evento.type === "contextmenu"){
        evento.preventDefault();
        let tieSound = new Audio();
        tieSound.src = "tie.mp3";
        tieSound.play()
    }
}

   
    
        
            
 