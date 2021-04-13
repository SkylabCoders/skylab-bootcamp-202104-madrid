let bingoCard = [

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    //next line

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    //next line

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false } 
];
let userArr = [];
let arrNum = [];
let turnos = 0;
let linea = false;
let ganaBingo = false;
let arrLine1 = [];
let arrLine2 = [];
let arrLine3 = [];
 

function printScoreSistem(){
    console.log('El sistema de puntos es:\n\n-De 0 a 30 turnos:\t->180 pt\n\n-De 31 a 70 turnos:\t->120 pt\n\n-De 71 a 80 turnos:\t->90 pt\n\n-De 81 a 84 turnos:\t->60 pt\n\n-De 85 a 86 turnos:\t->40 pt\n\n-De 87 a 88 turnos:\t->30 pt\n\n-De 89 a 90 turnos:\t->15 pt\n\n-Si te retiras tu puntuación será 0!\n\n');
} ;

function getUsers(userName){
    let obj = {
        userName,
        score : 0,
    };
userArr.push(obj);
} ;

function puntuacion(numTur){
    if(numTur <= 30){
        return 180;
    } else if(numTur <= 70){
        return 120;
    } else if(numTur <= 80){
        return 90;
    } else if(numTur <= 84){
        return 60;
    } else if(numTur <= 86){
        return 40;
    } else if(numTur <= 88){
        return 30;
    } else if(numTur <= 90){
        return 15;
    } else if(numTur === 100){
        return 0;
    };
} ;

function addRank(numTur , usName){
    let score = puntuacion(numTur);
    for(let i = 0; i < userArr.length; i++){
        if(userArr[i]['userName'] === usName){
            userArr[i]['score'] = score;
        };
    };
} ;

function printRank(){
    userArr.sort(function (a, b) {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
    });
    for(let i = 0; i < userArr.length; i++){
        console.log('\n\t-' + userArr[i]['userName'] + ' tiene una puntuacion de: ' + userArr[i]['score'] + ' puntos.\n')
    };
} ;

function printCard(){
    arrLine1 = [];
    arrLine2 = [];
    arrLine3 = [];

    for(let i = 0; i < bingoCard.length; i++){
        if( i < 5){
            if(bingoCard[i]['matched'] === false){
                arrLine1.push(bingoCard[i]['number']);
            } else {
                arrLine1.push('X');
            };
        } else if (i < 10){
            if(bingoCard[i]['matched'] === false){
                arrLine2.push(bingoCard[i]['number']);
            } else {
                arrLine2.push('X');
            };
        } else {
            if(bingoCard[i]['matched'] === false){
                arrLine3.push(bingoCard[i]['number']);
            } else {
                arrLine3.push('X');
            };
        };
    };
    console.log('\n\t' + arrLine1.join('   |   ') + '\n');
    console.log('\n\t' + arrLine2.join('   |   ') + '\n');
    console.log('\n\t' + arrLine3.join('   |   ') + '\n');
} ;

function randomNumCard(){
    let alreadyIn = false;
    let num = Math.floor(Math.random() * 90);
    num = num + 1;
    for(let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i]['number'] === num){
            alreadyIn = true;
        };
    };
    if(alreadyIn === true){
        return randomNumCard();
    } else {
        return num;
    };
} ;

function generateCard(){
    let numToAdd = randomNumCard();
    let isCompleted = true;
    for(let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i]['number'] === 'randomNumber'){
            isCompleted = false;
        };
    };
    if(isCompleted === false){
        for(let i = 0; i < bingoCard.length; i++){
            if(bingoCard[i]['number'] === 'randomNumber'){
                bingoCard[i]['number'] = numToAdd;
                break;
            };
        };
        return generateCard();
    } else if(isCompleted === true){
        console.log('\nEste es tu cartón:\n');
        printCard();
        let eleccion = confirm('Te gusta este carton?');
        switch(eleccion){
            case true :
                console.log('\n\t\tQUE LA SUERTE TE ACOMPAÑE\n');
            break;
            case false :
                console.log('\nVamos a probar con otro.\n');
                for(let i = 0; i < bingoCard.length; i++){
                    if(typeof bingoCard[i]['number'] === 'number'){
                        bingoCard[i]['number'] = 'randomNumber';
                    };
                };
                generateCard();
            break;
        };
    };
} ;

function randomNunGame(){
    let inAlready = false;
    let number = Math.floor(Math.random() * 90);
    number = number + 1;
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] === number){
            inAlready = true;
        };
    };
    if(inAlready === true){
        return randomNunGame();
    } else {
        arrNum.push(number);
        return number;
    };
} ;

function lineAndBingo(){
    const isX = (val) => val === 'X';
    let isLine1 = arrLine1.every(isX);
    let isLine2 = arrLine2.every(isX);
    let isLine3 = arrLine3.every(isX);
    if(linea === false){
        if(isLine1 === true || isLine2 === true || isLine3 === true){
            console.log('\n\n\t\tLINEA!!!!!!!!!\n\n');
            linea = true;
        };
    } else {
        if(isLine1 === true && isLine2 === true && isLine3 === true){
            console.log('\n\n\t\tBINGOOOOOO!!!\n\n');
            ganaBingo = true;
        };
    };
} ;

function game(){
    let numGame = randomNunGame();
    console.log('\nHa tocado el número: ' + numGame + '\n')
    let isInCard = false;
    for(let i = 0; i < bingoCard.length; i++){
        if(bingoCard[i]['number'] === numGame){
            bingoCard[i]['matched'] = true;
            isInCard = true;
        };
    };
    if(isInCard === true){
        turnos++;
        console.log('\nEnhorabuena! El número está en tu carton!\n');
        printCard();
        lineAndBingo();
    } else {
        turnos++;
        console.log('\nEsta vez la suerte no ha estado contigo.\n');
    };
    if(ganaBingo === false){
        let playAgain = confirm('\nQuieres seguir jugando?\n');
        switch(playAgain){
            case true:
                game();
            break;
            case false:
                console.log('Hay que saber perder!');
                turnos = 100;
            break;
        };
    } else {
        console.log('\nPor Fin!!!!\n\nHAS GANADO!!\n\n');
    }
} ;

function reset(){
    linea = false;
    ganaBingo = false;
    turnos = 0;
    arrNum = [];
    for(let i = 0; i < bingoCard.length; i++){
        bingoCard[i]['number'] = 'randomNumber';
        bingoCard[i]['matched'] = false;
    };
} ;

function bingo(){
    let thisUser = prompt('Introduce tu nombre de usuario');
    if(thisUser === null){
        return 'BYE!!';
    } else if(thisUser === ''){
        console.log('Necesito un nombre para identificarte más tarde.');
        return bingo();
    } else {
        getUsers(thisUser);
        console.log('\nBienvenido ' + thisUser + '!\n\n');
        printScoreSistem();
        generateCard();
        console.log('\n\n\t\t\tEMPIEZA EL JUEGO\n\n');
        game();
        let puntos = puntuacion(turnos);
        console.log('\nHas tardado ' + turnos + ' turnos.\n\nTu puntuacion es de:\n\t->' + puntos + ' puntos.\n\n' );
        addRank(turnos, thisUser);
        console.log('\n\nEl ranking actual es:\n\n')
        printRank();
        let playBingAgain = confirm('Quieres volver a jugar?');
        switch(playBingAgain){
            case true:
                reset();
                return bingo();
            break;
            case false:
                console.log('\n\nGracias por jugar!\n')
                return 'BYE!!';
            break;
        };
    };
} ;


bingo();