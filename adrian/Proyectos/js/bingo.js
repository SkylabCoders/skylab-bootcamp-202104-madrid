let randomNumber;

let bingoCard = [

    { number: randomNumber, matched: false, line: 1 },

    { number: randomNumber, matched: false, line: 1  },

    { number: randomNumber, matched: false, line: 1 },

    { number: randomNumber, matched: false, line: 1  },

    { number: randomNumber, matched: false, line: 1  },

    //next line

    { number: randomNumber, matched: false, line: 2  },

    { number: randomNumber, matched: false, line: 2  },

    { number: randomNumber, matched: false, line: 2  },

    { number: randomNumber, matched: false, line: 2  },

    { number: randomNumber, matched: false, line: 2  },

    //next line

    { number: randomNumber, matched: false, line: 3  },

    { number: randomNumber, matched: false, line: 3  },

    { number: randomNumber, matched: false, line: 3  },

    { number: randomNumber, matched: false, line: 3  },

    { number: randomNumber, matched: false, line: 3  },
    
];

let usedNumberCard = [];
let callUserLine = false;
let callUserBingo = false;
let turn = 0;
let nombreUsuario = prompt('Introduce su nombre por favor!!');
alert('Bienvenido al Skylab Bingo ' + nombreUsuario + '. El sistema de puntuación parte de un máximo de 100 puntos si completas el cartón en las 15 primeras rondas. Del turno 15 en adelante cada se restará un punto por cada turno.')
function showBingoCard(){
    for(i = 0; i < bingoCard.length; i++){
        console.log(bingoCard[i]['number'] + ", "+ bingoCard[i]['matched']);
    }
    console.log('--------------------------------')
}

function numberGenerate(){
    return Math.ceil((Math.random() * (99 - 1) + 1).toFixed(0));
} 

//He tenido que recurrir a stcakoverflow para encontrar esta función, excluye los números que ya han salido del bombo.
function getNumberRandomExcept(except) {
    except.sort(function(a, b) {
      return a - b;
    });
    var random = Math.floor(Math.random() * (99 - 1 + 1 - except.length)) + 1;
    var i;
    for (i = 0; i < except.length; i++) {
      if (except[i] > random) {
        break;
      }
      random++;
    }
    return random;
}

//Genera un cartón de 15 números sin que se repita ninguno.

function cardGenerate(){
    for(let i = 0; i < bingoCard.length; i++){
        let numberRandom = numberGenerate();
        if (checkNumberCard(numberRandom)) {
            bingoCard[i]['number'] = numberRandom;
        } else {
            i--;
        }
            
    }
    showBingoCard();      
}

//Chequea si ese parámetro ya ha salido antes, si es así retorna false. (usado en en carDGenerate9)
function checkNumberCard(number) {
    for(let i = 0; i < bingoCard.length; i++){
        if (bingoCard[i]['number'] == number) {
            return false;
        }
    }   
    return true;
}


function addNumberCard(){
    debugger
    let randomNumber = getNumberRandomExcept(usedNumberCard);
    for(let i = 0; i < bingoCard.length; i++){
        if (bingoCard[i]['number'] == randomNumber && bingoCard[i]['matched'] == false) {
            bingoCard[i]['matched'] = true;
            usedNumberCard.push(randomNumber);
            turn ++
            alert('Ronda ' + turn + ', número ' + randomNumber);
        }
    }    
}

function checkLineCard() {
    if (callUserLine == true) {
        return false;
    }

    let line = 1;
    let lineCheck1 = true;
    let lineCheck2 = true;
    let lineCheck3 = true;
    for(let line = 1; line <= 3; line++){
        for(let i = 0; i < bingoCard.length; i++){
            if (bingoCard[i]['line'] == line && bingoCard[i]['matched'] == false) {
                if (line == 1) {
                    lineCheck1 = false;
                }
                if (line == 2) {
                    lineCheck2 = false;
                }
                if (line == 3) {
                    lineCheck3 = false;
                }
            }
        }
    }
    let callLine = lineCheck1 || lineCheck2 || lineCheck3;
    if (callLine == true) {
        callUserLine = true;
        alert('¡Linea!');
    }
    return callLine;
}
function checkBingoCard() {

    let line = 1;
    let lineCheck1 = true;
    let lineCheck2 = true;
    let lineCheck3 = true;
    for(let line = 1; line <= 3; line++){
        for(let i = 0; i < bingoCard.length; i++){
            if (bingoCard[i]['line'] == line && bingoCard[i]['matched'] == false) {
                if (line == 1) {
                    lineCheck1 = false;
                }
                if (line == 2) {
                    lineCheck2 = false;
                }
                if (line == 3) {
                    lineCheck3 = false;
                }
            }
        }
    }

    let callBingo = lineCheck1 && lineCheck2 && lineCheck3;
    if (callBingo == true) {
        callUserBingo = true;
        alert('Sicusi');
    }
    return callBingo;
}

cardGenerate();
let agreeBingoCard = prompt('¿Quieres jugar con este cartón?')
while(agreeBingoCard.toUpperCase() !== 'SI'){
    cardGenerate();
    agreeBingoCard = prompt('¿Quieres jugar con este cartón?')
}

while(callUserBingo == false){
    addNumberCard();
    checkLineCard();
    checkBingoCard();
    
}

let points = 115 - turn;

alert('Has conseguido ' + points + ' puntos');







