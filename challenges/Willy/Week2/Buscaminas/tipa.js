

const grid = document.querySelector('.cont-mesa')
let width = 10
let squares = []
let bombas = 10

function crearTablero(){
    let bombetas = Array(bombas).fill('bomba')
    let vacio = Array(100 - bombas).fill('valid')
    let juego = vacio.concat(bombetas);
    let barajar = juego.sort(()=> Math.random() -0.5)
    console.log(barajar)


    for (let i=0; i < 100; i++){
            square = document.createElement('div')
            square.id = i;
            square.classList.add(barajar[i])
            grid.appendChild(square);
            squares.push(square);
            square.addEventListener('click', jugar)
    }
}

crearTablero()
function jugar(){
    alert("hola")
}