const iniciar = document.getElementById('caca');
iniciar.addEventListener('click', createUser);

let userName;
let cuadricula = document.getElementsByClassName('id');
let matriz = [];

const buscaminas = {
    numMinasTotales: 0,
    numMinasEncontradas: 0,
    numFilas: 10,
    numColumnas: 10,
    CampoMinas: matriz
};

function createUser() {
        userName = prompt('Escribe tu nombre de usuario'); {
        if(userName === "") {
            alert('Por favor, escribe tu nombre de usuario');
            createUser();
        } else if(userName === null) {
            alert('Hasta la próxima!')
        } else {
            alert('Mucha suerte ' + userName + '!')
            newGame(); };
        }; };

function newGame() {
     let nuevaPartida = prompt('Selecciona el nivel de dificultad ("Fácil", "Medio", "Difícil")');
        if(nuevaPartida === '') {
            alert('Selecciona "Fácil", "Medio" o "Difícil"');
            newGame();
        } else if(nuevaPartida === null) {
            alert('Hasta la próxima!')
        } else {
            alert('Que empiece el juego ' + userName + '!')
        }
    
        switch(nuevaPartida) {
            case 'facil':
                buscaminas.numMinasTotales = 15;
                break;
            case 'medio':
                buscaminas.numMinasTotales = 30;
                break;
            case 'dificil':
                buscaminas.numMinasTotales = 50;
                break;
        };
        crearTablero();
        esparcirMinas();
    };

function crearTablero(e) {
    event.preventDefault();
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = "";
    for(let f = 0; f <10; f++) {
    matriz[f] = [];
        for(let c = 0; c < 10; c++) {
            let cuadricula = document.createElement('div');
            cuadricula.setAttribute('id', 'f' + f + '_c' + c);
            cuadricula.dataset.fila = f;
            cuadricula.dataset.columna = c;
            matriz[f][c] = c;
            cuadricula.addEventListener('click', jugar);
            tablero.appendChild(cuadricula);
        }
    }
};

function esparcirMinas(){

    let numMinasEsparcidas = 0;
    
    while (numMinasEsparcidas < buscaminas.numMinasTotales){
        let fila = Math.floor(Math.random() * buscaminas.numFilas);
        let columna = Math.floor(Math.random() * buscaminas.numColumnas);
        if (buscaminas.CampoMinas[fila][columna] != "X"){
            buscaminas.CampoMinas[fila][columna] = "X";
            numMinasEsparcidas++;
        }
    }
};

function jugar(e) {
    // Navegador de Microsoft no reconoce evento, creamos un if statement
    if(!e) {e = window.event};

        let casilla = e.currentTarget;
        let fila = parseInt(casilla.dataset.fila, 10);
        let columna = parseInt(casilla.dataset.columna, 10);
    
        destapar(fila, columna);   
};

function destapar(fila, columna) {
    alert("Has hecho click en la casilla con fila " + fila + " y columna " +columna);
};

// let bomba = document.getElementById('f0_c7');
// bomba.innerText = matriz[0][7];


