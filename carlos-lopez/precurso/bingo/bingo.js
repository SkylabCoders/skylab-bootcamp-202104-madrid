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
let linea = false;
const sistPuntos = 'El sistema de puntuacion es el siguiente:\n\n  0 - 30 turnos: 180 pts\n 31 - 70 turnos: 120 pts\n 71 - 75 turnos: 90 pts\n 76 - 79 turnos: 60 pts\n 80 - 82 turnos: 30 pts\n 83 - 85 turnos: 15 pts\n 86 - 88 turnos: 10 pts\n 89 - 90 turnos: 5pts\n\n';
let arrayNum = [];
let turno = 0;
let linea1 = [];
let linea2 = [];
let linea3 = [];
let singLinea = false;
let finish = false;

function getPlayer(name){
    let obj = {
        name,
        score: 0
    };
    userArr.push(obj);
};

function score(times){
    if(times <= 30){
        return 180;
    } else if (times <= 70){
        return 120;
    } else if (times <= 75) {
        return 90;
    } else if (times <= 79) {
        return 60;
    } else if (times <= 82) {
        return 30;
    } else if (times <= 85) {
        return 15;
    } else if (times <= 88) {
        return 10;
    } else if (times <= 90) {
        return 5;
    } else if (times === 100){
        return 0;
    }
};

function addScore(times, nombre){
    let points = score(times);
    for(let i = 0; i < userArr.length; i++){
        if (userArr[i]['name'] === nombre){
            userArr[i]['score'] = points;
        };    
    };
};

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
    console.log('\n\nLa puntuación quedaría: \n\n');
    for(let i = 0; i < userArr.length; i++){
        console.log(userArr[i]['name'] + ': ' + userArr[i]['score'] + ' puntos');
    };
};

function printCard(){
    linea1 = [];
    linea2 = [];
    linea3 = [];
    for(let i = 0; i < bingoCard.length; i++){
        if (i < 5){
            if(bingoCard[i]['matched'] === false){
                linea1.push(bingoCard[i]['number']);
            } else {
                linea1.push('X');
            };   
        } else if (i < 10) {
            if(bingoCard[i]['matched'] === false){
                linea2.push(bingoCard[i]['number']);
            } else {
                linea2.push('X');
            };   
        } else {
            if(bingoCard[i]['matched'] === false){
                linea3.push(bingoCard[i]['number']);
            } else {
                linea3.push('X');
            };   
        };
    };
    console.log(linea1.join(' | '));
    console.log(linea2.join(' | '));
    console.log(linea3.join(' | '));
};

function randomNumCard(){
    let checkNum = false;
    let num = Math.floor(Math.random() * 90);
    num += 1;
    for(let i = 0; i < bingoCard.length; i++){
        if (bingoCard[i]['number'] === num){
            checkNum = true;
        };
    };
    if (checkNum === true) {
        return randomNumCard();
    } else {
        return num;
    };
};

function generateCard(){
    let number = randomNumCard();
    let completada = true;
    for(let i = 0; i < bingoCard.length; i++){
        if (bingoCard[i]['number'] === 'randomNumber'){
            completada = false;
        };
    };
    if (completada === false){
        for(let i = 0; i < bingoCard.length; i++){
            if (bingoCard[i]['number'] === 'randomNumber'){
                bingoCard[i]['number'] = number;
                break;
            };
        }; 
        generateCard();   
    } else if (completada === true){
        console.log('Tu carton es: \n');
        printCard();
        let choose = confirm('¿Quieres jugar con este cartón?');
        switch (choose){
            case true:
                console.log('SUERTE\n');
            break; 
            case false:
                for(let i = 0; i < bingoCard.length; i++){
                    if (typeof bingoCard[i]['number'] === 'number'){
                        bingoCard[i]['number'] = 'randomNumber';
                    };
                };
                generateCard(); 
            break;    
        };
    };
};

function randomNumBola(){
    let checkNumBola = false;
    let numBola = Math.floor(Math.random() * 90);
    numBola = numBola + 1;
    for(let i = 0; i < arrayNum.length; i++){
        if (arrayNum[i] === numBola){
            checkNumBola = true;
        };
    };
    if (checkNumBola === true) {
        return randomNumBola();
    } else {
        arrayNum.push(numBola);
        console.log('\nEl número que ha salido es: ' + numBola + '\n');
        return numBola;
    };
};

function lineaBingo(){
    const tachado = (value) => value === 'X';
    let line1 = linea1.every(tachado);
    let line2 = linea2.every(tachado); 
    let line3 = linea3.every(tachado); 

    if(singLinea === false){
        if (line1 === true || line2 === true || line3 === true){
            singLinea = true;
            console.log('\n\n\n\t LINEA!!!!!\n\n\n');
            console.log('\n\t SEGUIMOS PARA BINGO \n\n\n');
        };
    } else {
        if(line1 === true && line2 === true && line3 === true){
            console.log('\n\n\n\t ¡¡¡¡¡BINGO!!!!!\n\n\n');
            finish = true;
        };  
    };   
};

function juego(){
    let bolaBombo = randomNumBola();
    let haveIt = false;
    for(let i = 0; i < bingoCard.length; i++){
        if (bolaBombo === bingoCard[i]['number']){
            bingoCard[i]['matched'] = true;
            haveIt = true;
        };
    };
    if (haveIt === true) {
        console.log('PAAAAAAM!!!!\n');
        printCard();
        lineaBingo();
    } else if (haveIt === false){
        console.log('Sin suerte....de momento\n');
    };
    turno++;
    console.log('Turno número: ' + turno + '\n');
    if (finish === false) {
        let nextRound = confirm('¿Nuevo turno?');
        if(nextRound === true){
            lineaBingo();
            juego();
        } else if (nextRound === false){
            turno = 100;
            console.log('\nFIN DE LA PARTIDA');
        }; 
    } else {
        console.log('\nFIN DE LA PARTIDA');
    };
};

function resetAll(){
    bingoCard = [

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
    arrayNum = [];
    turno = 0;
    linea1 = [];
    linea2 = [];
    linea3 = [];
    singLinea = false;
    finish = false;
    linea = false;
};

function bingo() {
    let user = prompt('Escriba su nombre');
    if (user === null) {
        return 'Bye';
    } else if (user === ''){
        console.log('\n\nIntroduce al menos un caracter para identificarte más adelante\n\n');
        return bingo();
    } else {
        getPlayer(user);
        console.log('Bienvenido SkyLab Bingo, ' + user + '\n')
        console.log(sistPuntos);
        generateCard();
        console.log('\nEmpezamos!!\n');
        juego();
        let scoring = score(turno);
        console.log('\n\tTu puntuación ha sido de: ' + scoring + ' puntos');
        addScore(turno, user);
        printRank();
        let again = confirm('¿Nueva partida?');
        if (again === false){
            return 'Vuelva pronto. Queremos personas ludópatas y nos va a dar totalmente igual si te arruinas :----)';
        } else {
            resetAll();
            bingo();
        };
    };    
};

bingo();