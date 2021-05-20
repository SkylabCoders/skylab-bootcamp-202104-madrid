const boton = document.getElementById('boton');
const userName = document.getElementById('name-form');
const pantalla2 = document.querySelector('.right2');
const pantalla1 = document.querySelector('.right1');
const normas = document.querySelector('.normas');
const nameForm = document.querySelector('#name-form');
const answerForm = document.querySelector('#answer-form');
const timerContainer = document.querySelector('.timer-container');
const textoPregunta = document.querySelector('.textoPregunta');
const buttonEnd = document.querySelector('.end');
const ranking = document.querySelector('.ranking');
const pantalla3 = document.querySelector('.right3');
const buttonYes = document.querySelector('.si');
const buttonNo = document.querySelector('.no');
const letras = document.querySelectorAll('.letras');
const pantalla4 = document.querySelector('.right4');
const winner = document.querySelector('.winner');

let arrQuestions = [

    [{ letter: "a", answer: "argentina", status: 0, question: "CON LA A. País cuya capital es Buenos Aires."},
    { letter: "a", answer: "antman", status: 0, question: "CON LA A. Best Avenger 4evah interpretado por Paul Rudd" },
    { letter: "a", answer: "armageddon", status: 0, question: "CON LA A. Película de Bruce Willis y Ben Affleck en la que solo se salva la BSO de Aerosmith" }],

    [{ letter: "b", answer: "barcelona", status: 0, question: "CON LA B. Capital de Cataluña"},
    { letter: "b", answer: "bizantino", status: 0, question: "CON LA B. Relativo al antiguo imperio romano de Oriente o a la ciudad de Bizancio, capital de aquel imperio, o a sus habitantes"},
    { letter: "b", answer: "bascular", status: 0, question: "CON LA B. Moverse de un lado a otro girando sobre un eje vertical "}],

    [{ letter: "c", answer: "circo", status: 0, question: "CON LA C. Espectáculo formado por actuaciones muy variadas en que intervienen payasos, acróbatas, fieras amaestradas, ejercicios de magia, etc."},
    { letter: "c", answer: "capitan", status: 0, question: "CON LA C. Rango militar que tiene Chris Evans en el Marvel Comic Universe"},
    { letter: "c", answer: "caspa", status: 0, question: "CON LA C. Lo que muchos champús te dicen que combaten, pero te generan más."}],

    [{ letter: "d", answer: "dublin", status: 0, question: "CON LA D. Capital de la Irlanda republicana"},
    { letter: "d", answer: "descubrimiento", status: 0, question: "CON LA D. Lo que se dice que hizo Colón cuando llegó a América."},
    { letter: "d", answer: "dado", status: 0, question: "CON LA D. Elemento con seis lados que tiramos cuando jugamos al parchís"}],

    [{ letter: "e", answer: "equidistancia", status: 0, question: "CON LA E. Igualdad de distancia entre dos o más puntos o cosas."},
    { letter: "e", answer: "estupefaciente", status: 0, question: "CON LA E. Palabra técnica que se usa para definir la droga"},
    { letter: "e", answer: "estanteria", status: 0, question: "CON LA E. Donde colocas todos los libros (incluidos los que te regala la Tita Pili y nunca te vas a leer"}],

    [{ letter: "f", answer: "fregar", status: 0, question: "CON LA F. Verbo que se usa para limpiar el suelo o lavar los platos "},
    { letter: "f", answer: "filipinas", status: 0, question: "CON LA F. Una de las últimas colonias españolas "},
    { letter: "f", answer: "falcon", status: 0, question: "CON LA F. Best friend del capi America, y no es Soldado de Invierno"}],

    [{ letter: "g", answer: "gestapo", status: 0, question: "CON LA G. Policía secreta oficial de la Alemania nazi"},
    { letter: "g", answer: "galicia", status: 0, question: "CON LA G. Comunidad autónoma española muy familiarizada con el narcotráfico "},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Lo que protegen los guardianes en el Marvel Universe Comic"}],

    [{ letter: "h", answer: "house", status: 0, question: "CON LA H. Doctor insoportable y déspota de la ficción estadounidense"},
    { letter: "h", answer: "hospital", status: 0, question: "CON LA H. Donde acudes a que te hagan exploraciones o pruebas médicas"},
    { letter: "h", answer: "hecho", status: 0, question: "CON LA H. Que está acabado o terminado "}],

    [{ letter: "i", answer: "islandia", status: 0, question: "CON LA I. País cuya capital es Reikiavik. Donde un 54% de la población cree que los elfos existen"},
    { letter: "i", answer: "incluir", status: 0, question: "CON LA I. Poner una cosa en el interior de otra o dentro de sus limites"},
    { letter: "i", answer: "ironia", status: 0, question: "CON LA I. Figura literaria mediante la que se da a entender algo muy distinto o lo contrario a lo que se hace o se dice"}],

    [{ letter: "j", answer: "jamon", status: 0, question: "CON LA J. Pata del cerdo curada"},
    { letter: "j", answer: "jesus", status: 0, question: "CON LA J. Único ser humano cuyo padre es una paloma"},
    { letter: "j", answer: "judias", status: 0, question: "CON LA J. Mirad pa arriba, que caen ......, mirad pa bajo que caen garbanzos "}],

    [{ letter: "k", answer: "kilimanjaro", status: 0, question: "CON LA K. Famosa montaña de Tanzania. Y juraría la única que conoces. No pienses tanto..."},
    { letter: "k", answer: "kilos", status: 0, question: "CON LA K. Lo que te sobra o falta cuando no estás en tu peso ideal. RESPUESTA EN PLURAL"},
    { letter: "k", answer: "karate", status: 0, question: "CON LA K. Arte marcial muy famoso. Creo que es marcial...pista: <Dar cera, pulir cera>"}],

    [{ letter: "l", answer: "liam", status: 0, question: "CON LA L. Nombre del cantante y fundador de Oasis"},
    { letter: "l", answer: "laxante", status: 0, question: "CON LA L. Medicamento que tomas cuando llevas varios días sin ir al baño a hacer un número 2 "},
    { letter: "l", answer: "lisa", status: 0, question: "CON LA L. Nombre de la autora y compositora del mítico << Jueeeego con mi melocotonerooooo >>"}],

    [{ letter: "m", answer: "madrid", status: 0, question: "CON LA M. Ciudad infravalorada internacionalmente, y el único argumento para negarlo es decir que no tiene playa :)"},
    { letter: "m", answer: "marca", status: 0, question: "CON LA M. Periódico más leído en España durante tropecientos años seguidos"},
    { letter: "m", answer: "merienda", status: 0, question: "CON LA M. Comida donde el plato principal son donetes, bollicaos o palmeras"}],

    [{ letter: "n", answer: "nigeria", status: 0, question: "CON LA N. País en  África Occidental cuya capital es Abuya"},
    { letter: "n", answer: "nissan", status: 0, question: "CON LA N. Marca de coches japonesa. Algunos de sus modelos favoritos son: Qashqai o x-trail"},
    { letter: "n", answer: "nipon", status: 0, question: "CON LA N. Que es de Japón"}],

    [{ letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Único animalito que se te ocurre que empieza por la letra ñ "},
    { letter: "ñ", answer: "año", status: 0, question: "CONTIENE LA Ñ. Lo que termina el 31 de Diciembre y vuelve a empezar cada 1 de Enero en Occidente"},
    { letter: "ñ", answer: "araña", status: 0, question: "CONTIENE LA Ñ. Lo que le pica a Peter Parker antes de recibir los poderes"}],

    [{ letter: "o", answer: "ornitorrinco", status: 0, question: "CON LA O. El detective de Phineas y Ferb. También es un mamífero semiacuático endémico del este de Australia y de la isla de Tasmania"},
    { letter: "o", answer: "oslo", status: 0, question: "CON LA O. Capital de Noruega"},
    { letter: "o", answer: "ojo", status: 0, question: "CON LA O. Órgano de la visión, que en los seres humanos es par"}],

    [{ letter: "p", answer: "pamplona", status: 0, question: "CON LA P. Palabra que te hacen decir cuando tienes la boca llena y estás masticando. Tambíen es la capital de Navarra"},
    { letter: "p", answer: "penelope", status: 0, question: "CON LA P. Nombre de la única actriz española que ha ganado un Oscar (creo que es la única xD)"},
    { letter: "p", answer: "pirata", status: 0, question: "CON LA P. Persona que navega sin licencia y se dedica a asaltar los barcos en alta mar o a robar en las costas."}],

    [{ letter: "q", answer: "quique", status: 0, question: "CON LA Q. Diminutivo de Enrique"},
    { letter: "q", answer: "quesos", status: 0, question: "CON LA Q. Roquefort, havarti, philadelphia, jack, curado, gouda... "},
    { letter: "q", answer: "qatar", status: 0, question: "CON LA Q. Nombre en ingles del país cuya capital es Doha"}],

    [{ letter: "r", answer: "roma", status: 0, question: "CON LA R. Ciudad a la que to quisqui ha ido y es famosa por la fontana di trevi "},
    { letter: "r", answer: "rap", status: 0, question: "CON LA R. Género musical aburrido que se creen que hacen arte por rimar tomate con aguacate "},
    { letter: "r", answer: "remo", status: 0, question: "CON LA R. El hermano de Rómulo, con el cuál, se puso ciego a leche de loba"}],

    [{ letter: "s", answer: "sabina", status: 0, question: "CON LA S. Músico y cocaínomano reconocido. Cantante de 19 días y 500 noches entre otras tantas"},
    { letter: "s", answer: "sevilla", status: 0, question: "CON LA S. Ciudad donde se ubica la Plaza de España que se usó como escenario para una de las películas de Star Wars"},
    { letter: "s", answer: "sal", status: 0, question: "CON LA S. Ingrediente que se le echa a la comida cuando no sabe a nada"}],


    [{ letter: "t", answer: "timon", status: 0, question: "CON LA T. Best friend de Pumba en El rey león"},
    { letter: "t", answer: "tratra", status: 0, question: "CON LA T. Onomatopeya que puso de moda Rosalía"},
    { letter: "t", answer: "trompa", status: 0, question: "CON LA T. Parte característica de los elefantes"}],

    [{ letter: "u", answer: "uruguay", status: 0, question: "CON LA U. País del que fue presidente Pepe Mújica"},
    { letter: "u", answer: "ulular", status: 0, question: "CON LA U. Acción que hacen los búhos para emitir sonidos"},
    { letter: "u", answer: "upadance", status: 0, question: "CON LA U. Nombre del grupo épico musical que salió de la serie Un paso adelante con Miguel Angel Muñoz y Beaatriz Luengo"}],

    [{ letter: "v", answer: "viena", status: 0, question: "CON LA V. Capital de Austria "},
    { letter: "v", answer: "vale", status: 0, question: "CON LA V. OK en español"},
    { letter: "v", answer: "volcan", status: 0, question: "CON LA V. Monte con un cráter en su cima, generalmente de forma cónica, formado a partir de la solidificación de materiales incandescentes"}],

    [{ letter: "w", answer: "wilson", status: 0, question: "CON LA W. Nombre que recibe la pelota de voleyball en la película Naúfrago"},
    { letter: "w", answer: "wolowitz", status: 0, question: "CON LA W. Apellido del judío más famoso de la sitcom Big Bang Theory"},
    { letter: "w", answer: "wakanda", status: 0, question: "CON LA W. País y hogar de Black Panther"}],

    [{ letter: "x", answer: "ex", status: 0, question: "CONTIENE LA X. Persona a la que le se le escribe cuando bebiste demasiado y y no has ligado esa noche"},
    { letter: "x", answer: "xmen", status: 0, question: "CON LA X. Equipo de mutantes que reúne el profesor Charles Xavier. (Respuesta en una única palabra sin guiones)"},
    { letter: "x", answer: "rex", status: 0, question: "CONTIENE LA X. El puto mejor perro policía de la historia"}],

    [{ letter: "y", answer: "yugular", status: 0, question: "CON LA Y. Parte del cuerpo que atacan las leonas cuando cazan gacelas"},
    { letter: "y", answer: "yellowcard", status: 0, question: "CON LA Y. Grupo de pop punk famoso por su canción < Ocean avenue >"},
    { letter: "y", answer: "yugoslavia", status: 0, question: "CON LA Y. Antiguo país que desapareció. Fue presidido por el dictador Josip Broz Tito"}],

    [{ letter: "z", answer: "zoco", status: 0, question: "CON LA Z. Mercadillo tradicional en países árabes"}, 
    { letter: "z", answer: "zapatero", status: 0, question: "CON LA Z. Apellido del presidente de España durante el periodo 2004-2011"},
    { letter: "z", answer: "zara", status: 0, question: "CON LA Z. Tienda de ropa. Tambíen es conocida por ser el buque insignia de Inditex"}],
];
let arrQuestionsTurn = [];
let aciertos = 0;
let fallos = 0;
let totalContestadas = 0;

let players = [];
let totalTime = 200;
let temporizador;
let pregunta;
let respuesta;
let indexArrQuestion = 0;
let letra;
let checkStatus = false;
let primeraVuelta = false;

function reloj() {
    temporizador = setInterval(function(){
        if (totalTime <= 0){
            timerContainer.innerText = '0';
            pantalla2.style.display = 'none';
            score();
            printRank();
            stopReloj();
            reset();
            pantalla3.style.display = 'flex';
        } else {
            timerContainer.innerText = totalTime;
        };
        totalTime -= 1;
    }, 1000);
};

function stopReloj() {
    clearInterval(temporizador);
};

function backToUnanswered() {
    letras.forEach(element => {
        element.className = 'letras unanswered';
    });
};

function score(){
    let player = players.length - 1;
    players[player]['score'] = aciertos;
};

function createList(name, puntos){
    let li = document.createElement('li');
    li.innerText = name + ': ' + puntos + ' pts';
    return li;   
};

function printRank() {
    players.sort(function (a, b) {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
    });
    ranking.innerHTML = '';
    for(let i = 0; i < players.length; i++){
        ranking.appendChild(createList(players[i]['name'], players[i]['score']))
    };
};

function preguntasTurno(){
    for(let i = 0; i < arrQuestions.length; i++){
        let randomQuestion = Math.floor(Math.random()* 3);
        arrQuestionsTurn.push(arrQuestions[i][randomQuestion]);
    };
};

function segundaVuelta(){   
    let filtro = false;
    for(let i = 0; i < arrQuestionsTurn.length; i++){
        if (arrQuestionsTurn[i]['status'] === 0){
            checkStatus = true;
        };
    };

    if(checkStatus === true){
        for(let j = indexArrQuestion; j < arrQuestionsTurn.length; j++){
            if (arrQuestionsTurn[j]['status'] === 0 && j > indexArrQuestion) {
                filtro = true;  
            };
        };
        if(filtro === false){
            for(let i = 0; i < arrQuestionsTurn.length; i++){
                if(arrQuestionsTurn[i]['status'] === 0){
                    pregunta = arrQuestionsTurn[i]['question'];
                    textoPregunta.innerHTML = pregunta;
                    indexArrQuestion = i;
                    checkStatus = false;
                    break;
                };
            };
        } else {
            for(let i = indexArrQuestion; i < arrQuestionsTurn.length; i++){
                if(arrQuestionsTurn[i]['status'] === 0 && i > indexArrQuestion){
                    pregunta = arrQuestionsTurn[i]['question'];
                    textoPregunta.innerHTML = pregunta;
                    indexArrQuestion = i;
                    checkStatus = false;
                    break;
                };
            };

        };
    } else {
        pantalla2.style.display = 'none';
        score()
        printRank();
        stopReloj();
        pantalla3.style.display = 'flex';
    };
};

function juego(){
    if(indexArrQuestion < 26) {
        indexArrQuestion++; 
        pregunta = arrQuestionsTurn[indexArrQuestion]['question'];
        textoPregunta.innerHTML = pregunta;
    } else if (indexArrQuestion === 26) {
        primeraVuelta = true;
        segundaVuelta(); 
    };
} ;

function check(){
    letra = document.getElementById(arrQuestionsTurn[indexArrQuestion]['letter']);

    if (arrQuestionsTurn[indexArrQuestion]['status'] === 1) {
        letra.className = 'letras success';
        totalContestadas++;
        
    } else if (arrQuestionsTurn[indexArrQuestion]['status'] === -1) {
        letra.className = 'letras failure';
        totalContestadas++;
    };
};

function reset(){
    arrQuestionsTurn = [];
    aciertos = 0;
    fallos = 0;
    totalContestadas = 0;
    totalTime = 200;
    temporizador;
    pregunta;
    respuesta;
    indexArrQuestion = 0;
    letra;
    checkStatus = false;
    primeraVuelta = false;
};

userName.addEventListener('submit', (event) => {
    event.preventDefault();
    let obj = {
        name: event.target.nombre.value,
        score: 0,
    };
    players.push(obj);
    pantalla1.style.display = 'none';
    event.target.nombre.value = '';
    pantalla2.style.display = 'flex';
    reloj();
    preguntasTurno();
    pregunta = arrQuestionsTurn[indexArrQuestion]['question'];
    textoPregunta.innerHTML = pregunta;
    
});

answerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    respuesta = event.target.respuesta.value;
    respuesta = respuesta.toLowerCase();
    console.log(respuesta);
    console.log(totalContestadas);
    if (primeraVuelta === true) {
        if (arrQuestionsTurn[indexArrQuestion]['answer'] === respuesta){
            arrQuestionsTurn[indexArrQuestion]['status'] = 1;
            aciertos++;
            check();
            event.target.respuesta.value = "";
        } else if (respuesta === 'pasapalabra'){
            arrQuestionsTurn[indexArrQuestion]['status'] = 0;
            event.target.respuesta.value = "";
        } else {
            arrQuestionsTurn[indexArrQuestion]['status'] = -1;
            fallos++;
            check();
            event.target.respuesta.value = "";
        };
        segundaVuelta();

    } else {

        if (arrQuestionsTurn[indexArrQuestion]['answer'] === respuesta){
            arrQuestionsTurn[indexArrQuestion]['status'] = 1;
            aciertos++;
            check();
            event.target.respuesta.value = "";
        } else if (respuesta === 'pasapalabra'){
            arrQuestionsTurn[indexArrQuestion]['status'] = 0;
            event.target.respuesta.value = "";
        } else {
            arrQuestionsTurn[indexArrQuestion]['status'] = -1;
            fallos++;
            check();
            event.target.respuesta.value = "";
        };
        juego();
    };
});

buttonEnd.addEventListener('click', (event) => {
    event.preventDefault();
    pantalla2.style.display = 'none';
    timerContainer.style.display = 'none';
    timerContainer.innerText = '200';
    players.pop();
    printRank();
    stopReloj();
    reset();
    pantalla3.style.display = 'flex';
});

buttonYes.addEventListener('click', () => {
    reset();
    pantalla3.style.display = 'none';
    backToUnanswered();
    pantalla1.style.display = 'flex';
    timerContainer.innerText = '200';
    timerContainer.style.display = 'flex';
});

buttonNo.addEventListener('click', () => {
    backToUnanswered();
    timerContainer.style.display = 'none';
    pantalla3.style.display = 'none';
    if(players.length === 0){
        pantalla4.style.display = 'flex';
    } else {
        winner.innerText = players[0]['name'];
        pantalla4.style.display = 'flex';
    };
});



