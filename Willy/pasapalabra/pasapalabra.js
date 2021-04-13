/*Haz el juego del Pasapalabra. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo:
 '>>>'With the letter "M", Capital of Spain, located in the center of the country. '>>>' "Madrid" '>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, 
deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender 
que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. 
El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

● El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" === "ANIMAL" // "Animal" // "aNiMal"...

● El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, 
el programa dirá cuántas letras ha acertado pero no entrará en el ranking.

● Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.

● Tener en cuenta que al hacer pasapalabra en una pregunta, si usais distintas preguntas para una misma letra, al dar la vuelta al rosco la pregunta deberia ser la misma.

● Si el usuario falla la pregunta debeis mostrar la respuesta, ya sea en consola, en prompt o alert. */

let preguntas = [

    [{ letter: "a", answer: "atenas", status: 0, question: "CON LA A. Ciudad griega donde se encuentra el Partenon"},
    { letter: "a", answer: "ares", status: 0, question: "CON LA A. Dios griego de la guerra" },
    { letter: "a", answer: "armada", status: 0, question: "CON LA A. Completa la frase relativa a una flota española: la _______ Invencible" }],

    [{ letter: "b", answer: "bronce", status: 0, question: "CON LA B. Aleación de cobre y estaño"},
    { letter: "b", answer: "blitzkrieg", status: 0, question: "CON LA B. Táctica militar alemana inventada en la II Guerra Mundial. En español significa 'guerra relámpago'."},
    { letter: "b", answer: "berlin", status: 0, question: "CON LA B. Ciudad alemana en la que se levantó un muro durante la Guerra Fría "}],

    [{ letter: "c", answer: "coliseo", status: 0, question: "CON LA C. Monumento romano construido por la dinstanía Flavia en Roma donde se realizaban combates gladiatorios entre otros espectáculos"},
    { letter: "c", answer: "castillo", status: 0, question: "CON LA C. Fortificación medieval por excelencia"},
    { letter: "c", answer: "catapulta", status: 0, question: "CON LA C. Instrumento militar utilizado desde la antigüedad para el lanzamiento a distancia de grandes objetos a modo de proyectiles"}],

    [{ letter: "d", answer: "democracia", status: 0, question: "CON LA D. Forma de gobierno surgida en la Grecia Clásica"},
    { letter: "d", answer: "diarquia", status: 0, question: "CON LA D. Forma de gobierno con dos reyes"},
    { letter: "d", answer: "dolmen", status: 0, question: "CON LA D. Construcción megalítica consistente, generalmente, en varias losas clavadas en la tierra en posición vertical y una o más losas, a modo de cubierta, apoyadas sobre ellas en posición horizontal"}],

    [{ letter: "e", answer: "esparta", status: 0, question: "CON LA E. Ciudad griega de la que provenían los protagonistas de la película 300"},
    { letter: "e", answer: "eris", status: 0, question: "CON LA E. Diosa de la discordia"},
    { letter: "e", answer: "eubea", status: 0, question: "CON LA E. Isla griega cuya capital es Calcis"}],

    [{ letter: "f", answer: "faraon", status: 0, question: "CON LA F. Nombre que recibía el gobernante de Egipto en la Antigüedad "},
    { letter: "f", answer: "felipe", status: 0, question: "CON LA F. Nombre muy típico de la monarquía española y que coincide con el del monarca español actual (omita el número) "},
    { letter: "f", answer: "flamen", status: 0, question: "CON LA F. Sacerdote romano"}],

    [{ letter: "g", answer: "gato", status: 0, question: "CON LA G. Animal adorado en Egipto y en la iconografía suele representar a la diosa Bastet"},
    { letter: "g", answer: "gladius", status: 0, question: "CON LA G. Tipo de espada romana. "},
    { letter: "g", answer: "gestapo", status: 0, question: "CON LA G. Nombre que recibía la policía secreta oficial de la Alemania nazi con sede en Berlín"}],

    [{ letter: "h", answer: "heracles", status: 0, question: "CON LA H. Héroe griego famoso por sus doce trabajos. Escriba el nombre griego"},
    { letter: "h", answer: "hitita", status: 0, question: "CON LA H. Imperio que se asentó en la actual Turquía hasta aproximadamente el 1200 A.C"},
    { letter: "h", answer: "hitler", status: 0, question: "CON LA H. Apellido del dictador alemán más infame de todos los tiempos"}],

    [{ letter: "i", answer: "inuit", status: 0, question: "CON LA I. Tribu esquimal"},
    { letter: "i", answer: "india", status: 0, question: "CON LA I. Cristóbal Colón buscaba una nueva ruta marítima para ir a este destino"},
    { letter: "i", answer: "ivan", status: 0, question: "CON LA I. Nombre del un zar ruso conocido como 'el Terrible' (omita el número)"}],

    [{ letter: "j", answer: "jupiter", status: 0, question: "CON LA J. Equivalencia romana del dios griego Zeus. También es un planeta de nuestro sistema solar."},
    { letter: "j", answer: "judaismo", status: 0, question: "CON LA J. Religión mayoritaria en Israel"},
    { letter: "j", answer: "jonas", status: 0, question: "CON LA J. Personaje bíblico que fue engullido por una ballena"}],

    [{ letter: "k", answer: "tokio", status: 0, question: "CONTIENE LA K. Capital de Japón"},
    { letter: "k", answer: "kamakura", status: 0, question: "CON LA K. Nombre que recibe el periodo de la historia japonesa entre 1192-1333"},
    { letter: "k", answer: "kelvin", status: 0, question: "CON LA K. Unidad de medida de la temperatura diferente del grado Celsius "}],

    [{ letter: "l", answer: "londinium", status: 0, question: "CON LA L. Nombre romano que recibió la actual Londrés"},
    { letter: "l", answer: "luis", status: 0, question: "CON LA L. Nombre extremadamente repetido en la monarquía francesa a lo largo de la historia"},
    { letter: "l", answer: "labarna", status: 0, question: "CON LA L. Título que recibía el rey hitita. También coincide con el nombre del primer rey de esa civilización"}],

    [{ letter: "m", answer: "menhir", status: 0, question: "CON LA M. Piedra grande que suele llevar Obelix en la espalda"},
    { letter: "m", answer: "mamut", status: 0, question: "CON LA M. Animal prehistórico similar a los elefantes actuales"},
    { letter: "m", answer: "mongol", status: 0, question: "CON LA M. Gengis Khan fundó el primer Imperio _____"}],

    [{ letter: "n", answer: "neolitico", status: 0, question: "CON LA N. Periodo de la prehistoria que literalmente significa 'piedra nueva'"},
    { letter: "n", answer: "normandia", status: 0, question: "CON LA N. El día D también es conocido como el desembarco de ____"},
    { letter: "n", answer: "nefertiti", status: 0, question: "CON LA N. Famosa reina de Egipto cuyo busto más conocido está hoy en Berlin"}],

    [{ letter: "ñ", answer: "españa", status: 0, question: "CONTIENE LA Ñ. País actual de la Península Ibérica"},
    { letter: "ñ", answer: "año", status: 0, question: "CONTIENE LA Ñ. Unidad de tiempo que tiene 365 días y a veces 366"},
    { letter: "ñ", answer: "nuñez", status: 0, question: "CONTIENE LA Ñ. Completa el siguiente nombre: Vasco ____ de Balboa"}],

    [{ letter: "o", answer: "odiseo", status: 0, question: "CON LA O. Protagonista de la Odisea. Escriba el nombre griego"},
    { letter: "o", answer: "odin", status: 0, question: "CON LA O. Dios principal de la mitología nórdica"},
    { letter: "o", answer: "olimpo", status: 0, question: "CON LA O. Monte de referencia donde habitan los principales dioses del panteón griego"}],

    [{ letter: "p", answer: "paleografia", status: 0, question: "CON LA P. Estudio de la escritura y signos de los libros y documentos antiguos"},
    { letter: "p", answer: "paleolitico", status: 0, question: "CON LA P. Periodo de la prehistoria que literalmente significa 'piedra antigua'"},
    { letter: "p", answer: "panzer", status: 0, question: "CON LA P. En aleman abreviado significa 'carro de combate"}],

    [{ letter: "q", answer: "iroquesa", status: 0, question: "CONTIENE LA Q. Famosa confederación nororiental de nativos americanos"},
    { letter: "q", answer: "quetzalcoatl", status: 0, question: "CON LA Q. Dios de las culturas precolombinas con forma de serpiente "},
    { letter: "q", answer: "inquisicion", status: 0, question: "CONTIENE LA Q. Conjunto de instituciones dedicadas a la supresión de la herejía, mayoritariamente en la Iglesia católica."}],

    [{ letter: "r", answer: "ronin", status: 0, question: "CON LA R. Samurai sin señor "},
    { letter: "r", answer: "ragnarok", status: 0, question: "CON LA R. Batalla del fin del mundo en la mitología nórdica "},
    { letter: "r", answer: "remo", status: 0, question: "CON LA R.  Hermano de Rómulo. También es un instrumento que sirve para remar"}],

    [{ letter: "s", answer: "safo", status: 0, question: "CON LA S. Famosa poetisa de la grecia arcaica"},
    { letter: "s", answer: "satrapias", status: 0, question: "CON LA S. Nombre que recibían las provincias gobernadas por un sátrapa en el imperio persa aqueménmida. Escríbelo en plural"},
    { letter: "s", answer: "salarium", status: 0, question: "CON LA S. Pago que se hacía antiguamente en sal. Escríbalo en latín"}],


    [{ letter: "t", answer: "teseo", status: 0, question: "CON LA T. Héroe ateniense de la mitología griega que venció al minotauro"},
    { letter: "t", answer: "tracia", status: 0, question: "CON LA T. Región de la que era originario Espartaco"},
    { letter: "t", answer: "taifas", status: 0, question: "CON LA T. Pequeños reinos que se formaron en la Península Ibérica tras la división del califato de Córdoba. Escríbalo en plural"}],

    [{ letter: "u", answer: "utrecht", status: 0, question: "CON LA U. El Tratado de ______ puso fin a la  Guerra de Sucesión Española el siglo XVIII"},
    { letter: "u", answer: "ulises", status: 0, question: "CON LA U. Nombre latino de Odiseo, protagonista de la Odisea"},
    { letter: "u", answer: "urano", status: 0, question: "CON LA U. Nombre del titán personificador del cielo. También es el nombre de un planeta de nuestro sistema solar."}],

    [{ letter: "v", answer: "vercingetorix", status: 0, question: "CON LA V. Caudillo galo de la tribu de los avernos que se rindió a Julio César tras el sitio de Alesia "},
    { letter: "v", answer: "victoria", status: 0, question: "CON LA V. Signficado de la palabra griega Niké."},
    { letter: "v", answer: "valentia", status: 0, question: "CON LA V. Nombre romano de la actual Valencia"}],

    [{ letter: "w", answer: "westfalia", status: 0, question: "CON LA W. Lugar donde se firmó la paz que puso fin a la Guerra de los Treinta Años"},
    { letter: "w", answer: "wallace", status: 0, question: "CON LA W. Apellido del caballero escocés protagonista de la película Braveheart"},
    { letter: "w", answer: "william", status: 0, question: "CON LA W. Nombre de pila del caballero escocés protagonista de la película Braveheart"}],

    [{ letter: "x", answer: "x", status: 0, question: "CON LA X. Expresa el 10 en número romano"},
    { letter: "x", answer: "xi", status: 0, question: "CON LA X. Expresa el 11 en número romano"},
    { letter: "x", answer: "xii", status: 0, question: "CON LA X. Expresa el 12 en número romano"}],

    [{ letter: "y", answer: "yen", status: 0, question: "CON LA Y. Moneda corriente de Japón"},
    { letter: "y", answer: "yucatan", status: 0, question: "CON LA Y. Península mesoamericana donde se localiza la zona arqueológica de Chichén Itzá."},
    { letter: "y", answer: "maya", status: 0, question: "CONTIENE LA Y. Antigua civilización que habitó la región mesoamericana antes de la llegada de los europeos. Escríbalo en singular."}],

    [{ letter: "z", answer: "zaragoza", status: 0, question: "CON LA Z. Ciudad española que conquistó Alfonso I el Batallador el 18 de diciembre de 1118"}, 
    { letter: "z", answer: "zeus", status: 0, question: "CON LA Z. Dios principal del panteón olímpico"},
    { letter: "z", answer: "zoroastrismo", status: 0, question: "CON LA Z. Religión fundada por Zoroastro"}],
];

let questionList = [];
let vuelta1;
let aciertos = 0;
let fallos = 0;
let respondidas = false


 //Creación de jugadores
 playerList=[];

 
 function newPlayer(){
     let player = prompt("Escribe tu nombre")
     if(player !== "" && player !== null){
         players(player);
     } else{
         alert("Por favor, introduce un nombre");
         newPlayer();
     }
 };
 
 
 function players(player){
     let jugadores = {
         player,
         puntos: 0,
         
         
     };
 playerList.push(jugadores);
 } ;

 // Instrucciones y otras funciones de utilidad

 function instrunctions(){
     alert("Por favor, lee las instrucciones en la consola");
     console.log("El juego es muy sencillo:\n-Consigues 1 punto por cada palabra que aciertes y pierdes 1 punto por cada fallo.\n-Escribe las palabras sin tilde.\n-Escribe 'pasapalabra' para pasar a la siguiente pregunta (válido solo una vez).\n-Escribe salir en cualquier pregunta para abandonar el juego.\n-Las preguntas son de Geografía, Historia o vida cotidiana.")
 }
 
 function salida(){
    alert("Has abandonado, no te quiero ni en el ranking, pero has acertado " + aciertos + " palabra/s")
}
 

 // Pasapalabra workflow


 function start(){
     let welcome = confirm("BIENVENIDO a este pasapalabras History Edition.")
     if (welcome === true){
         alert("Eres más valiente que Leónidas en las Termópilas");
         preguntaRandom();
         primeraVuelta();
     } else {
         alert("Vuélvete a casa a llorar");
         return retry();
     }
 }

 function preguntaRandom(){
     let randomQuestion = Math.floor((Math.random()* 3))
     for (let i = 0; i < preguntas.length; i++){
         questionList.push(preguntas[i][randomQuestion])

     }
 }
 //console.log(questionList)

 function primeraVuelta(){
      
    for (let i = 0; i < questionList.length; i++){
        vuelta1 = prompt(questionList[i].question)
     if (vuelta1 === null || vuelta1 === ''){
        //salida();
        //break;
    } else {
        
        vuelta1 = vuelta1.toLowerCase()    
        }if (vuelta1 === questionList[i].answer){
            console.log("CORRECTO");
            questionList[i].status = 1
            aciertos++
        } else if (vuelta1 === "salir"){
            alert("Has abandonado, no te quiero ni en el ranking, pero has acertado " + aciertos + " palabra/s");
            break;
        } else if (vuelta1 === "pasapalabra"){
            console.log("PASAPALABRA")
            questionList[i].status = 0
        } else {
            console.log("¡Pedazo de burro! La respuesta era " + questionList[i].answer);
            questionList[i].status = -1
            fallos++
        
        };
    };
    
    segundaVuelta();
 };



function segundaVuelta(){
    if (vuelta1 === "salir"){
        return retry();
        
    };
    
    for (let i = 0; i < questionList.length; i++){
        if (questionList[i].status === 0){
            respondidas = true
        };   
    };
    if (respondidas === true){
            alert("Empieza la segunda vuelta")
            for (let i = 0; i < questionList.length; i++ ){
                
                if(questionList[i].status === 0){
                    let vuelta2 = prompt(questionList[i].question);

                    if (vuelta2 === null || vuelta2 === ''){
                    salida();
                    break;
                    }else {
                    vuelta2 = vuelta2.toLowerCase() 

                }       if (vuelta2 === questionList[i].answer){
                        console.log("CORRECTO");
                        questionList[i].status = 1
                        aciertos++

                }       else if (vuelta2 === "salir"){
                        alert("Has abandonado, no te quiero ni en el ranking, pero has acertado " + aciertos + " palabra/s");
                         break;
                }       else if (vuelta2 === "pasapalabra"){
                        console.log("Ya no puedes pasar palabra, la respuesta era " + questionList[i].answer)
                        questionList[i].status = -1
                        fallos++
                }       else if (vuelta2 !== questionList[i].answer){
                        console.log("¡Pedazo de burro! La respuesta era " + questionList[i].answer);
                        questionList[i].status = -1
                        fallos++
                }        else{
                        
                         }; 

                }
            }
    }
    puntuacion(aciertos, fallos);
    ranking();
};   

// Puntuacion y ranking

function puntuacion(aciertos, fallos){
    
     let tuPuntuacion;
     tuPuntuacion = aciertos - fallos
     
     for (let i = 0; i < playerList.length; i++){
         if(playerList[i].puntos === 0 && playerList[i].player !== undefined){
         playerList[i].puntos = tuPuntuacion
         
         }; 
        
     };
     //console.log(playerList)
};

function ranking(){

    console.log("\n\n RANKING DE JUGADORES \n")

    playerList.sort(function (a, b) {
        if (a.puntos < b.puntos) {
          return 1;
        }
        if (a.puntos > b.puntos) {
          return -1;
        }
        return 0;
    });
    
    for (let i = 0; i < playerList.length; i++){
        if(playerList[i].puntos > 0){
        console.log("\n\t-" + playerList[i].player + " has conseguido " + playerList[i].puntos + " puntos. Enhorabuena.")
        } else {
            console.log("\n\t-" + playerList[i].player + " has conseguido " + playerList[i].puntos + " puntos. Estudia un poco más")
        };
    };
    retry();
};

// Reinicio

function retry(){
 questionList = [];
 vuelta1;
 aciertos = 0;
 fallos = 0;
 respondidas = false
 let reinicio = prompt("¿Quieres jugar otra partida?. Escriba 'si' o 'no'");
 
 switch (reinicio){
     case "si":
         newPlayer();
         start();
    break;
   
    case "no":
        console.log("Gracias por haber jugado al pasapalabra History Edition");
    break;
    default:
        alert("Escribe si o no por favor");
        retry();
 };
};

function pasapalabra(){
    instrunctions();
    newPlayer();
    start();
};

pasapalabra();