let bingoCard = [

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false } ];

    let line1 = [];
    let line2 = [];
    let line3 = [];
    let turns = 0
    line = false;
    bingoWinner = false;
    userList = [];

    function getUserList(userName) {
        let playerList = {
            userName,
            score: 0
        };
        userList.push(playerList);
    };

    function addRanking(userName, rounds) {
        let score = puntuacion(rounds);
        for(let i = 0; i < userList.length; i++) {
            if(userList[i].userName === userName) {
                userList[i].score = score;
            };
        };
        console.log(userList);
    };

    function printRanking() {
        userList.sort(function (a,b) {
            if(a.score < b.score) {
                return 1;
            }
            if(a.score > b.score) {
                return -1;
            }
            return 0;
        });
        /*console.log(userList);*/
         for(let i = 0; i < userList.length; i++) {
             console.log('El jugador ' + userList[i].userName + ' tiene una puntuación de: ' + userList[i].score);
         };
        };

    function puntuacion(rounds) {
        if(rounds === 0) {
            return 0;
        } else if(rounds >= 91) {
            return 25;
        } else if(rounds <= 90) {
            return 50;
        } else if(rounds <= 60) {
            return 75;
        } else if(rounds <= 30) {
            return 100;
        } else {
            return 0;
        };
    };

    function generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * (90) +1);
        return randomNumber;
    };

    function createCarton() {
        for(let i = 0; i < bingoCard.length; i++) {
            if(bingoCard[i].number === 'randomNumber') {
                bingoCard[i].number = generateRandomNumber();
                };
            };
    };

    function printCarton() {

        let line1 = [];
        let line2 = [];
        let line3 = [];
    
            for(let i = 0; i < bingoCard.length; i++) {
                if(i < 5) {
                    if(bingoCard[i].matched === false) {
                        line1.push(bingoCard[i].number);
                    } else {
                        line1.push('X');
                    };
                } else if(i < 10) {
                    if(bingoCard[i].matched === false) {
                        line2.push(bingoCard[i].number);
                    } else {
                        line2.push('X');      
                    }; 
                } else {
                    if(bingoCard[i].matched === false) {
                        line3.push(bingoCard[i].number);
                    } else {
                        line3.push('X');        
                    };
                };
            };
    
            console.log('\t\n' + line1.join('   |   ') + '\n');
            console.log('\t\n' + line2.join('   |   ') + '\n');
            console.log('\t\n' + line3.join('   |   ') + '\n\n');
    
            function lineAndBingo() {
                const isX = (value) => value === 'X';
                
                let line1isX = line1.every(isX);
                let line2isX = line2.every(isX);
                let line3isX = line3.every(isX);
          
              if(line === false) {
                    if(line1isX === true || line2isX === true || line3isX === true) {
                        console.log('\t\n\nLINEA!!!!!!!!!\n\n');
                        line = true;
                    };
              };
            
              if(line1isX === true && line2isX === true && line3isX === true){
                      console.log('\t\n\nBINGOOOOOO!!!\n\n');
                      bingoWinner = true;
                      printUserScore();
                  };
              };
    
              lineAndBingo();
        };

    function startGame() {
        alert('Estos son tus números:');
        createCarton();
        printCarton();
        let start = confirm('Quieres jugar con estos números?');
        switch(start) {
            case true:
                alert('Que empiece el juego!');
                newTurn();
                break;
            case false:
                for(let i = 0; i < bingoCard.length; i++) {
                    if(typeof bingoCard[i].number === 'number') {
                        bingoCard[i].number = 'randomNumber';
                    };
                };
                startGame();
                break;
        };
    };

    function newTurn() {

        if(bingoWinner === false) {
            let newTurn = confirm('Quieres probar suerte?');
            switch(newTurn) {
                case true:
                    turns++;
                    modifyCarton();
                    break;
                case false:
                    alert('Hasta pronto!');
                    turns = 0;
                    printUserScore();
                    break;
            };
        } else {
            alert('Has ganado!');    
        };
    };

    function modifyCarton() {
        let ball = generateRandomNumber();
        console.log('\t\nEl número que ha salido es: ' + ball + '\n\n');
        let isInCarton = false;
        for(let j = 0; j < bingoCard.length; j++) {
            if(bingoCard[j].number === ball) {
                bingoCard[j].matched = true;
                isInCarton = true;
        };
    };

        if(isInCarton === true) {
            console.log('\t\nEl número está en el cartón\n\n');
            printCarton();
            newTurn();  
        } else {
            console.log('\t\nEl número no está en el cartón\n\n');
            newTurn();
        };
};

function printUserScore() {

    console.log('\t\nHa terminado el juego en ' + turns + ' turnos\n\n');

    console.log('\t\nTu puntuación final ha sido: ' + puntuacion(turns) + ' puntos\n\n');

};

function reset(){
    line = false;
    bingoWinner = false;
    turns = 0;
    for(let i = 0; i < bingoCard.length; i++){
        bingoCard[i]['number'] = 'randomNumber';
        bingoCard[i]['matched'] = false;
    };
};

    function bingo() {
        let player = prompt('Por favor, introduzca su nombre de usuario:');
        if(player === null || player === '') {
            alert('Por favor, introduzca su nombre de usuario:');
            bingo();
        } else {     
            alert('Hola ' + player + '! Bienvenid@ a nuestro Bingo! El sistema de puntuación será el siguiente:');
            console.log('\n\t\tSISTEMA DE PUNTUACIÓN:\n\n\t- Menos de 30 intentos: 100 puntos\n\n\t- De 31 a 60 intentos: 75 puntos\n\n\t- De 61 a 90 intentos: 50 puntos\n\n\t- Más de 90 intentos: 25 puntos\n\n\t- Si te retiras antes de finalizar: 0 puntos\n\n');
        }; 
        getUserList(player);
        alert('Qué comience el juego!');
        startGame();
        addRanking(player, turns);
        console.log('\n\tEl ranking actual es:\n\n');
        printRanking();

        let newGame = confirm('Quieres volver a jugar?');
        switch(newGame) {
            case true:
                reset();
                bingo();
                break;
            case false:
                alert('Hasta pronto!');
        };

        };

    bingo();
 
    