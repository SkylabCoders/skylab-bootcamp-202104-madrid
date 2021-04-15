const questions = [
    [
        { letter: "a", answer: "africa", status: 0, question: "CON LA A. Continente que te crees que es un solo país, pero resulta que no, que tiene 54"},
        { letter: "a", answer: "andorra", status: 0, question: "CON LA A. País al que se van los youtubers"},
        { letter: "a", answer: "agora", status: 0, question: "CON LA A. Plaza pública en las ciudades de la antigua Grecia"},
    ],
    [
        { letter: "b", answer: "bronte", status: 0, question: "CON LA B. Apellido de tres famosas hermanas inglesas escritoras"},
        { letter: "b", answer: "bojack", status: 0, question: "CON LA B. El caballo de Netflix mas famoso de los 90"},
        { letter: "b", answer: "bustamante", status: 0, question: "CON LA B. Cantante que luchaba 'por el amor de esa mujer'"},
    ],
    [
        { letter: "c", answer: "carcel", status: 0, question: "CON LA C. Donde Iñaki Urdangarin duerme pero no hace vida"},
        { letter: "c", answer: "coen", status: 0, question: "CON LA C. Apellido de unos famosos hermanos directores y guionistas de cine. Con 'Fargo' se llevaron un Oscar"},
        { letter: "c", answer: "cantar", status: 0, question: "CON LA C. Lo que hacemos todos en la ducha, pero por suete, no todos fuera de ella"},
    ],
    [
        { letter: "d", answer: "distopia", status: 0, question: "CON LA D. Sociedad imaginaria bajo un poder totalitario, opuesta a, según quien la relate, la sociedad perfecta"},
        { letter: "d", answer: "difamar", status: 0, question: "CON LA D. Decir en público o escribir cosas negativas en contra del buen nombre, la fama y el honor de una persona"},
        { letter: "d", answer: "desaparecer", status: 0, question: "CON LA D. Dejar de estar a la vista o de ser perceptible. Lo que hace el dinero de las arcas públicas"},
    ],
    [
        { letter: "e", answer: "eminem", status: 0, question: "CON LA E. Slim Shady, Marshall Mathers, 8 millas"},
        { letter: "e", answer: "emperatriz", status: 0, question: "CON LA E. Cargo que ocupaba María Teresa de Austria"},
        { letter: "e", answer: "ecuador", status: 0, question: "CON LA E. Círculo imaginario máximo en la esfera terrestre, que equidista de los polos de la Tierra"},
    ],
    [
        { letter: "f", answer: "fuera", status: 0, question: "CON LA F. Como te sientes cada vez que la gente habla de terminologia de programación que aun no ha salido en la teoría del precurso"},
        { letter: "f", answer: "filantropo", status: 0, question: "CON LA F. Supuesto amante del ser humano, que en realidad no hace nada. Se dice de todas las estrellas de Hollywood y grandes empresarios"},
        { letter: "f", answer: "fantasia", status: 0, question: "CON LA F. Que Scarlett Johansson te pida una cita, que Brad Pitt te invite a cenar a su casa."},
    ],
    [
        { letter: "g", answer: "golondrinas", status: 0, question: "CON LA G. Sabina y Bécquer estaban obsesionados con ellas"},
        { letter: "g", answer: "gibraltar", status: 0, question: "CON LA G. Territorio que España jamás debió regalar a Inglaterra"},
        { letter: "g", answer: "gafe", status: 0, question: "CON LA G. Cuando tienes el 'Blitz' en 'Como conocí a vuestra madre' eres esto"},
    ],
    [
        { letter: "h", answer: "hacha", status: 0, question: "CON LA H. Lo que Gimli llevaba en el señor de los anillos"},
        { letter: "h", answer: "hulk", status: 0, question: "CON LA H. Bicho verde que a nadie le importaba cuando lo interpretaba Edward Norton"},
        { letter: "h", answer: "horario", status: 0, question: "CON LA H. El que te planificas para estudiar pero nunca cumples"},
    ],
    [
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Lugar de culto cristiano que pagamos todos con nuestros impuestos"},
        { letter: "i", answer: "icaro", status: 0, question: "CON LA I. Héroe griego encerrado en el laberinto de Creta que logró salir de él, con unas alas hechas de plumas pegadas con cera"},
        { letter: "i", answer: "inception", status: 0, question: "CON LA I. Nombre en inglés de la pelicula dirigida por Christopher Nolan dedicada al mundo de los sueños"},
    ],
    [
        { letter: "j", answer: "jornada", status: 0, question: "CON LA J. En el ámbito laboral aquello que debería durar 8 horas al día, pero si trabajas en hosteleria dura 16"},
        { letter: "j", answer: "jardineria", status: 0, question: "CON LA J. Habilidad que descubriste que no era lo tuyo cuando se te murió aquel cactus del Verdecora"},
        { letter: "j", answer: "justicia", status: 0, question: "CON LA J. Que el rey emérito fuese a la carcel"},
    ],
    [
        { letter: "k", answer: "kelloggs", status: 0, question: "CON LA K. Marca de cereales con la que todos hemos aprendido portugues mientras desayunabamos"},
        { letter: "k", answer: "ketchup", status: 0, question: "CON LA K. Alimento que causa confusión al Señor Burns en el supermercado"},
        { letter: "k", answer: "punk", status: 0, question: "CONTIENE LA K. Estilo de Sid Vicious que Jared Leto creía que tenía en 2010"},
    ],
    [
        { letter: "l", answer: "loteria", status: 0, question: "CON LA L. Aquello que nunca te va a tocar"},
        { letter: "l", answer: "lucas", status: 0, question: "CON LA L. Apellido que comparten un pato y el creador de chewaka"},
        { letter: "l", answer: "libre", status: 0, question: "CON LA L. Canción de Nino Bravo dedicada a la primera víctima del intento de saltar el muro de Berlín."},
    ],
    [
        { letter: "m", answer: "mierda", status: 0, question: "CON LA M. Lo que hace Bad Bunny"},
        { letter: "m", answer: "mantenido", status: 0, question: "CON LA M. Lo que eres hasta los 35 porque en España no queda otra"},
        { letter: "m", answer: "mentir", status: 0, question: "CON LA M. Lo que hacen los ingleses respecto a la historia de la inquisición española"},
    ],
    [
        { letter: "n", answer: "namaste", status: 0, question: "CON LA N. Saludo en hindi, se utiliza al terminar la clase de yoga"},
        { letter: "n", answer: "nobel", status: 0, question: "CON LA N. Premio que han ganado 891 hombres y 54 mujeres, es muy famoso"},
        { letter: "n", answer: "ninguna", status: 0, question: "CON LA N. Ganas que tienes de pasar un verano en Madrid con 42 grados a la sombra"},
    ],
    [
        { letter: "ñ", answer: "añoranza", status: 0, question: "CONTIENE LA Ñ. Lo que sientes cuando te vuelves vegano respecto al cocido de tu abuela"},
        { letter: "ñ", answer: "paño", status: 0, question: "CONTIENE LA Ñ. La segunda vida de tus camisetas, esta vez en la cocina"},
        { letter: "ñ", answer: "moño", status: 0, question: "CONTIENE LA Ñ. Hasta dónde me tiene pensar en palabras y sus definiciones"},
    ],
    [
        { letter: "o", answer: "ostracismo", status: 0, question: "CON LA O. Aislamiento voluntario o forzoso de la vida pública que sufre una persona"},
        { letter: "o", answer: "oligarquia", status: 0, question: "CON LA O. Sistema de gobierno en el que el poder está en manos de unas pocas personas pertenecientes a una clase social privilegiada."},
        { letter: "o", answer: "oprah", status: 0, question: "CON LA O. Nombre de una de las mujeres más influyentes del mundo, presentadora de su programa homónimo"},
    ],
    [
        { letter: "p", answer: "problemas", status: 0, question: "CON LA P. Lo único que te da el pasapalabra de SkyLab"},
        { letter: "p", answer: "precision", status: 0, question: "CON LA P. Lo que te falta cuando vas piripi y haces pipí en el baño de una discoteca"},
        { letter: "p", answer: "pirarse", status: 0, question: "CON LA P. Forma coloquial de describir lo que hicieron los ingleses cuando vieron que la cosa se ponía chunga en Dunkerque"},
    ],
    [
        { letter: "q", answer: "quebrar", status: 0, question: "CON LA Q. Lo que hizo Blockbuster con la aparición de Netflix"},
        { letter: "q", answer: "quitar", status: 0, question: "CON LA Q. verbo. Lo que hizo Estados Unidos a España con Cuba"},
        { letter: "q", answer: "tequeños", status: 0, question: "CONTIENE LA Q. plural. Palitos de queso originarios de Venezuela, que saben a cielo"},
    ],
    [
        { letter: "r", answer: "ritmo", status: 0, question: "CON LA R. Lo que crees que tienes cuando bailas, pero en realidad te falta"},
        { letter: "r", answer: "rasputin", status: 0, question: "CON LA R. Señor que puso patas arriba a la sociedad noble de la última época zarista"},
        { letter: "r", answer: "refranes", status: 0, question: "CON LA R. Plural. Funte de sabiduría en todos los pueblos españoles"},
    ],
    [
        { letter: "s", answer: "shakira", status: 0, question: "CON LA S. Artista colombiana que lo petó en la superbowl de 2020"},
        { letter: "s", answer: "spiderman", status: 0, question: "CON LA S. Superheroe que ha salido del pozo gracias a Tom Holland"},
        { letter: "s", answer: "sucumbir", status: 0, question: "CON LA S. Lo que haces cuando estás a dieta pero hay un helado llamándote a gritos en la nevera"},
    ],
    [
        { letter: "t", answer: "timar", status: 0, question: "CON LA T. Lo que hicieron los franceses a los españoles cuando dijeron que solo querían meter sus tropas a España para conquistar Portugal"},
        { letter: "t", answer: "trampas", status: 0, question: "CON LA T. Plural. Lo que hizo Lance Armstrong para llevarse 7 tours de Francia"},
        { letter: "t", answer: "tacos", status: 0, question: "CON LA T. Plural. Base de la pirámide alimenticia mexicana"},
    ],
    [
        { letter: "u", answer: "ubud", status: 0, question: "CON LA U. Ciudad de Bali famosa por sus retiros espirituales"},
        { letter: "u", answer: "unicornio", status: 0, question: "CON LA U. Animal que, según cuentan, le regaló Pablo Escobar a su hija juntando un caballo y un cuerno de rinoceronte"},
        { letter: "u", answer: "ubicación", status: 0, question: "CON LA U. Lo que google sabe de ti en todo momento"},
    ],
    [
        { letter: "v", answer: "vietnam", status: 0, question: "CON LA V. Uno de los muchos lugares donde Estados Unidos se inventó una guerra"},
        { letter: "v", answer: "vacio", status: 0, question: "CON LA V. Lo que sentimos existencialmente los humanos"},
        { letter: "v", answer: "vencer", status: 0, question: "CON LA V. Lo que hizo Rusia en la segunda guerra mundial"},
    ],
    [
        { letter: "w", answer: "wisconsin", status: 0, question: "CON LA W. Estado del medio oeste de Estados Unidos, que por lo visto es muy grande"},
        { letter: "w", answer: "wonderwoman", status: 0, question: "CON LA W. Superheroína proviniente de una estirpe de amazonas"},
        { letter: "w", answer: "waterloo", status: 0, question: "CON LA W. Batalla donde Napoleón fue derrotado, a ABBA le encantaba"},
    ],
    [
        { letter: "x", answer: "matrix", status: 0, question: "CONTIENE LA X. Ambiente de relación entre cosas y sucesos creado y controlado artificialmente."},
        { letter: "x", answer: "xena", status: 0, question: "CON LA X. La princesa guerrera"},
        { letter: "x", answer: "ortodoxo", status: 0, question: "CONTIENE LA X. Persona que sigue fielmente los principios de una doctrina o que cumple unas normas o prácticas tradicionales"},
    ],
    [
        { letter: "y", answer: "yakarta", status: 0, question: "CON LA Y. Capital de Indonesia"},
        { letter: "y", answer: "britney", status: 0, question: "CONTIENE LA Y. Famosa que necesita ser liberada de la tutela de su padre"},
        { letter: "y", answer: "yoda", status: 0, question: "CON LA Y. 'Hazlo o no lo hagas, pero no lo intentes'"},
    ],
    [
        { letter: "z", answer: "zugarramurdi", status: 0, question: "CON LA Z. Lugar famoso por sus brujas"},
        { letter: "z", answer: "zoo", status: 0, question: "CON LA Z. Cárcel de animales"},
        { letter: "z", answer: "zapato", status: 0, question: "CON LA Z. Lo que le tiraron a Bush"},
    ],  
];


let thisTimeQuestions = [];
let userRanking = [];
let positives = 0;
let negatives = 0;
let timeleft = 200;
let letterPosition = 0;
let stillToAnswer = false;
let fullRound = false;
let hasEndTheGame = false;
let thisLetter;
let timer;

//selectores de los div de la pantalla de normas e introducción de nombre.
let infoScreenOne = document.querySelector('.info');
let nameScreenOne = document.querySelector('.getname');
let nameButton = document.getElementById('name-button');
let playerNameForm = document.getElementById('addPlayer');
let fullTimeScreen = document.querySelector('.timer');
let timeScreen = document.querySelector('.time');

//selectores de los div de la pantalla de juego, letras, definiciones y respuestas.
let infoScreenTwo = document.querySelector('.round');
let answerScreenTwo = document.querySelector('.getanswer');
let answerButton = document.getElementById('answer-button');
let answerForm = document.getElementById('answers');
let letterInUse = document.querySelector('.letter-in-use');
let definition = document.querySelector('.definition');

//selectores de los div de la pantalla de finalizacion, rankings y vuelta al juego.
let infoScreenThree = document.querySelector('.ranking');
let tryAgainScreenThree = document.querySelector('.tryagain');
let tryAgainButton = document.getElementById('try-again-button');
let playAgainForm = document.getElementById('playAgain');
let rankingList = document.querySelector('.ranking-list');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');

//selectores ultima pantalla
let winnerScreenFour = document.querySelector('.winner');
let finalWinner = document.getElementById('champion');
let rightScreen = document.querySelector('.screentwo')

//selectores del rosco
let roscoLetters = document.querySelectorAll('.letter');

function gameQuestions(){
    for(let i = 0; i < questions.length; i ++){
        let num = Math.floor(Math.random() * 3);
        thisTimeQuestions.push(questions[i][num]);
    };
} ;

function checkStatus(){
    for(let i; i < thisTimeQuestions; i++){
        thisTimeQuestions[i]['status'] = 0;
    };
} ;

function startTimer() {
    timer = setInterval(function(){
    if(timeleft <= 0){
        document.querySelector(".time").innerHTML = "0";
        return endGame();
        } else {
        document.querySelector(".time").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
} ;

function stopTimer(){
    clearInterval(timer);
} ;

function addUser(userName){
    let obj = {
        userName : userName,
        score : 0,
    };
    userRanking.push(obj); 
} ;

function addScore() {
    let last = userRanking.length - 1;
    userRanking[last]['score'] = positives;
} ;

function getRanking(){
    userRanking.sort(function (a, b) {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
    });
} ;

function createRankingItem(user, points) {
    let li = document.createElement('li');
    li.innerText = user + '  ' +  '--->' + points + ' puntos';
    return li;
} ;

function reloadRanking(){
    rankingList.innerHTML = '';
    for(let i = 0; i < userRanking.length; i++){
        rankingList.appendChild(createRankingItem(userRanking[i]['userName'], userRanking[i]['score']));
    };
} ;

function resetRosco(){
    roscoLetters.forEach (element => {
        element.className = 'letter unanswered';
    });
} ;

function resetAll(){
    thisTimeQuestions = [];
    positives = 0;
    negatives = 0;
    timeleft = 200;
    letterPosition = 0;
    stillToAnswer = false;
    fullRound = false;
    thisLetter = '';
} ;

function getWinner(){
    let winner = document.createElement('span');
    winner.innerText = userRanking[0]['userName'].toUpperCase() +'!!!';
    finalWinner.appendChild(winner);
} ;

function endGame(){
    if(hasEndTheGame === false){
        addScore();
    };
    stopTimer();
    getRanking();
    reloadRanking();
    resetAll();
    answerScreenTwo.style.display = 'none';
    infoScreenTwo.style.display = 'none';
    infoScreenThree.style.display = 'flex';
    tryAgainScreenThree.style.display = 'flex';
} ;

function checkAnswer(thisAnswer) {
    thisLetter = document.getElementById(thisTimeQuestions[letterPosition]['letter']);
    if ( thisAnswer === thisTimeQuestions[letterPosition]['answer']){
        thisTimeQuestions[letterPosition]['status'] = 1;
        positives++;
        thisLetter.className = "letter correct";
    } else if ( thisAnswer === 'pasapalabra' ){
        thisTimeQuestions[letterPosition]['status'] = 0;
        thisLetter.className = "letter unanswered";
    } else if ( thisAnswer === 'end' ){
        hasEndTheGame = true;
        userRanking.pop();
        return endGame();
    } else {
        thisTimeQuestions[letterPosition]['status'] = -1;
        negatives++;
        thisLetter.className = "letter incorrect"
    };
} ;

function secondChance() {
    let isAnyElseP = false;
    for(let i = 0; i < thisTimeQuestions.length; i++){
        if(thisTimeQuestions[i]['status'] === 0){
            stillToAnswer = true;
        };
    };
    if(stillToAnswer === true) {
        for(let i = letterPosition; i < thisTimeQuestions.length; i++){
            if(thisTimeQuestions[i]['status'] === 0 && i > letterPosition){
                isAnyElseP = true;
            };
        };
        if(isAnyElseP === true){
            for(let i = letterPosition; i < thisTimeQuestions.length; i++){
                if(thisTimeQuestions[i]['status'] === 0 && i > letterPosition){
                    letterPosition = i;
                    letterInUse.innerText = thisTimeQuestions[letterPosition]['letter'].toUpperCase();
                    definition.innerText = thisTimeQuestions[letterPosition]['question'];
                    document.getElementById(thisTimeQuestions[letterPosition]['letter']).className = "letter inuse";
                    stillToAnswer = false;
                    isAnyElseP = false;
                    break;
                };
            };
        } else {
            for(let i = 0; i < thisTimeQuestions.length; i++){
                if(thisTimeQuestions[i]['status'] === 0){
                    letterPosition = i;
                    letterInUse.innerText = thisTimeQuestions[letterPosition]['letter'].toUpperCase();
                    definition.innerText = thisTimeQuestions[letterPosition]['question'];
                    document.getElementById(thisTimeQuestions[letterPosition]['letter']).className = "letter inuse";
                    stillToAnswer = false;
                    break;
                };
            };
        };
    } else {
        return endGame();
    };
} ;

answerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let thisAnswer = event.target.answer.value;
    thisAnswer = thisAnswer.toLowerCase();
    answer.value = '';
    if(fullRound === false) {
        if(letterPosition < 26) {
            checkAnswer(thisAnswer);
            if(hasEndTheGame === false){
                letterPosition++;
                letterInUse.innerText = thisTimeQuestions[letterPosition]['letter'].toUpperCase();
                definition.innerText = thisTimeQuestions[letterPosition]['question'];
                thisLetter = document.getElementById(thisTimeQuestions[letterPosition]['letter'])
                thisLetter.className = "letter inuse";
                answer.value = '';
            };    
        }else if(letterPosition = 26){
            checkAnswer(thisAnswer);
            if(hasEndTheGame === false){
                secondChance();
                fullRound = true;
            };  
        };
    } else {
        checkAnswer(thisAnswer);
        if(hasEndTheGame === false){
            secondChance(); 
        }; 
    }; 
});

playerNameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    hasEndTheGame = false;
    gameQuestions();
    checkStatus();
    addUser(event.target.name.value);
    nameScreenOne.style.display = 'none';
    infoScreenOne.style.display = 'none';
    answerScreenTwo.style.display = 'flex';
    infoScreenTwo.style.display = 'flex';
    event.target.name.value = '';
    startTimer();
    letterInUse.innerText = thisTimeQuestions[letterPosition]['letter'].toUpperCase();
    definition.innerText = thisTimeQuestions[letterPosition]['question'];
    document.getElementById(thisTimeQuestions[letterPosition]['letter']).className = "letter inuse";
}) ;

yesButton.addEventListener('click', function(){
    infoScreenThree.style.display = 'none';
    tryAgainScreenThree.style.display = 'none';
    timeScreen.innerText = '200';
    resetRosco();
    nameScreenOne.style.display = 'flex';
    infoScreenOne.style.display = 'flex';  
}) ;

noButton.addEventListener('click', function(){
    infoScreenThree.style.display = 'none';
    tryAgainScreenThree.style.display = 'none';
    fullTimeScreen.style.display = 'none';
    resetRosco();
    getWinner();
    rightScreen.style.justifyContent = 'center';
    winnerScreenFour.style.display = 'flex';
}) ;
