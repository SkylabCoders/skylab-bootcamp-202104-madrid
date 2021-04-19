let rosco = [
    { letter: "a", answer: "abducir", status: 0, info: 'empty', question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, info: 'empty', question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, info: 'empty', question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, info: 'empty', question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, info: 'empty', question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, info: 'empty', question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, info: 'empty', question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, info: 'empty', question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, info: 'empty', question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, info: 'empty', question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, info: 'empty', question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, info: 'empty', question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, info: 'empty', question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, info: 'empty', question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, info: 'empty', question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, info: 'empty', question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, info: 'empty', question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, info: 'empty', question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, info: 'empty', question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, info: 'empty', question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, info: 'empty', question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, info: 'empty', question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, info: 'empty', question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, info: 'empty', question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, info: 'empty', question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, info: 'empty', question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, info: 'empty', question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},];

let ranking = [];
let aciertos = 0;
let errores = 0;
let sincontestar = 0;
let retirada = false;

function jugar() {
    for(let i = 0; i < rosco.length; i++) {
        let answer = prompt(rosco[i].question);
        if(answer === null || answer === '') {
            answer = 'pasapalabra';
        };
        if(answer.toLowerCase() === rosco[i].answer) {
            rosco[i].status++;
            rosco[i].info = 'correct';
            alert('Correcto!');
            aciertos++;
        } else if(answer.toLowerCase() === 'pasapalabra') {
            rosco[i].status++;
            rosco[i].info = 'pasapalabra';
            alert('PASAPALABRA!');
            sincontestar++;
        } else if(answer.toLowerCase() === 'end') {
            rosco[i].status++;
            rosco[i].info = 'end';
            console.log('\n\t- Has obtenido ' + aciertos + ' aciertos y ' + errores + ' errores.\n\n');
            retirada = true;
            break;
        } else {
            rosco[i].status++;
            rosco[i].info = 'incorrect';
            alert('La respuesta es incorrecta! La palabra correcta era: ' + rosco[i].answer);
            errores++;
        };
    };

    if(sincontestar > 0 && retirada === false) {
        segundavuelta();
    };
};

function segundavuelta() {
    for(let i = 0; i < rosco.length; i++) {
        if(rosco[i].info === 'pasapalabra') {
            let answer = prompt(rosco[i].question);
    if(answer === null || answer === '') {
        answer = 'pasapalabra';
    };
    if(answer.toLowerCase() === rosco[i].answer) {
        rosco[i].status++;
        rosco[i].info = 'correct';
        alert('Correcto!');
        aciertos++;
    } else if(answer.toLowerCase() === 'pasapalabra') {
        rosco[i].status++;
        rosco[i].info = 'pasapalabra';
        alert('PASAPALABRA!');
        sincontestar++;
    } else if(answer.toLowerCase() === 'end') {
        rosco[i].status++;
        rosco[i].info = 'end';
        console.log('\n\t- Has obtenido ' + aciertos + ' aciertos y ' + errores + ' errores.\n\n');
        retirada = true;
        break;
    } else {
        rosco[i].status++;
        rosco[i].info = 'incorrect';
        alert('La respuesta es incorrecta! La palabra correcta era: ' + rosco[i].answer);
        errores++;
    };
        };
    };
    };

function reiniciar() {
    aciertos = 0;
    errores = 0;
    sincontestar = 0;
    retirada = false;
    for(let k = 0; k < rosco.length; k++) {
        if(rosco[k].info !== 'empty') {
            rosco[k].info = 'empty';
            rosco[k].status = 0;
        };
    };
};

function rankear(player, score) {
    
    let listado = {
        player,
        score
    };

    ranking.push(listado);

    ranking.sort(function (a,b) {
        if(a.score < b.score) {
            return 1;
        }
        if(a.score > b.score) {
            return -1;
        }
        return 0;
    });

    console.log('\n\tEste es el ranking:\n\n');
    for(let i = 0; i < ranking.length; i++) {
        console.log('\n\t- ' + ranking[i].player + ' ha obtenido ' + ranking[i].score + ' aciertos y ' + errores + ' errores.\n\n');
    };

};

function pasapalabra() {
    
    let jugador = prompt('Por favor, introduzca su nombre');
    if(jugador === null || jugador === '') {
        alert('Por favor, introduzca su nombre para continuar');
        pasapalabra();
    } else {
        alert('Hola ' + jugador + '! Bienvenid@ a nuestro Pasapalabra! Mucha suerte!');
        jugar();
        if(retirada === false) {
            rankear(jugador, aciertos);
            console.log(ranking);
    };
    let nuevapartida = confirm('Quieres volver a intentarlo?');
    switch(nuevapartida) {
        case true:
            reiniciar();
            pasapalabra();
            break;
        case false:
            alert('Hasta pronto!');
            break;
    };
};
};

pasapalabra();
