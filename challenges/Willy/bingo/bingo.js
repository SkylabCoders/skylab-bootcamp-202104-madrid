
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
let bombo = [];
let turno = 0;
let endGame = false;

function bingo(){
    formaPuntuarYWelcome();
    newPlayer();
    createCard(); 
    showBingoCard(); 
    newBingoCard()
    
}



 //Creación de jugadores
playerList=[];


function newPlayer(){
    let player = prompt("Escribe tu nombre")
    if(player !== ""){
        players(player);
    } else if (player === null){
        console.log("Gracias por usar este bingo");
    }else{
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
//console.log(playerList)

} ;




// Creación del cartón
function randomNumber(){
    return Math.floor((Math.random() * 15) + 1)
};

function createCard(){ 
    for (let i = 0; i < bingoCard.length;i++){
        if(bingoCard[i].number === 'randomNumber'){
            bingoCard[i].number = randomNumber();
        }
    }
}




let fila1 = [];
let fila2 = [];
let fila3 = [];


function showBingoCard(){
    fila1 = [];
    fila2 = [];
    fila3 = [];

    for(let i = 0; i < bingoCard.length; i++){
        if( i < 5){
            if(bingoCard[i].matched === false){
                fila1.push(bingoCard[i].number);
            } else {
                fila1.push('X');
            };
        } else if (i < 10){
            if(bingoCard[i].matched === false){
                fila2.push(bingoCard[i].number);
            } else {
                fila2.push('X');
            };
        } else {
            if(bingoCard[i].matched === false){
                fila3.push(bingoCard[i].number);
            } else {
                fila3.push('X');
            };
        };
    };
    console.table(fila1.join('  -  '));
    console.table(fila2.join('  -  '));
    console.table(fila3.join('  -  '));
}
// Cambio de cartón
function randomBingoCard(){
    for (let i = 0; i < bingoCard.length;i++){
        if(bingoCard[i].number !== 'randomNumber'){
            bingoCard[i].number = randomNumber();
        }
    }
        showBingoCard();
}


function newBingoCard(){
    let nuevoCarton = confirm("¿Te gusta este cartón?")
        if(nuevoCarton === false){
            console.clear(showBingoCard);
            randomBingoCard();
            newBingoCard();
        } else {
            askTurn();
            
}
}


// Bingo workflow


function bomboNum(){ 
    let haSalido = false
    let num = randomNumber();
    for (let i = 0; i < bombo.length; i++){
            if(bombo[i] === num){
                haSalido = true
            };
     
     };
     if(haSalido === true){
         return bomboNum();
     } else { 
         bombo.push(num);
         
     };
 };
    
function askTurn(){
    let pregunta;

    if (endGame === true){
         despedida();
    } else if (endGame === false){
        pregunta = confirm("¿Quieres jugar?");
    };

    if (pregunta === true){
        turno++;
        //score(turno);
        puntuando();
    } else if (pregunta === false){
        
        console.log("\n Te has retirado, consigues 0 puntos y no eres digno de estar en el ranking");
        score(turno);
        retry();
        
    } else {
        despedida();
        //stemaPuntos();
        //ranking();
       
    }

};

    

 function puntuando(){
     bomboNum();
     let coincidencia = false;
     let numBombo = bombo[bombo.length - 1];

     for (let i = 0; i < bingoCard.length; i++){
         if(numBombo === bingoCard[i].number){
            coincidencia = true
         };
    };    
     if  (coincidencia === true && endGame === false){
         for (let i = 0; i < bingoCard.length; i++ ){
             if (bingoCard[i].number === numBombo){
                 bingoCard[i].number = 'X'
             };
         };
         
         showBingoCard();
         console.log("El número " + numBombo + " está en el cartón.¡Qué suerte!");
         lineaYBingo();
         
         
         //console.log(turno);
         askTurn();
     } else {
        
         console.log("El número " + numBombo + " no está en el cartón.¡Mala suerte amigo!");
         askTurn();
     }


     
};

function lineaYBingo(){
    const tachado = (a) => a === 'X'
    let linea1 = fila1.every(tachado);
    let linea2 = fila2.every(tachado);
    let linea3 = fila3.every(tachado);
    if (linea1 === true && linea2 === true && linea3 === true){
        
        console.log("¡Has hecho BINGO!¡ENHORABUENA! en " + turno + " turnos");
        endGame = true;
        stemaPuntos();
        score(turno);
         ranking();
        
    } else {
        if(linea1 === true || linea2 === true || linea3 === true){
            console.log("Has hecho línea");
        }
    }    
};


   
        
 
 // Sistema de puntos

 function formaPuntuarYWelcome(){
    console.log("BIENVENIDO AL BINGO DE SKYLAB \n\n\n")
    console.log('El sistema de puntos es muy simple:\n\n -De 1 a 25 turnos conseguirás 4 puntos \n\n -De 26 a 50 turnos conseguirás 3 puntos\n\n -De 51 a 75 turnos conseguirás 2 puntos\n\n -De 76 a 99 turnos conseguirás 1 puntos\n\n -Si te retiras o llegas al turno 100 tu puntuación será 0 puntos\n\n');
} ;


 function score(turno){
    
    
         for (let i = 0; i < playerList.length; i++){
            if (endGame === false && playerList[i].puntos === 0){
                playerList[i].puntos = 0;
                playerList[i].player = "Cobarde";
        
            } else if (playerList[i].puntos === 0 && endGame === true && playerList[i].player !== "Cobarde") {
                    if  (turno <= 25){
                    playerList[i].puntos = 4
                    } else if (turno <= 50){
                    playerList[i].puntos = 3
                    } else if (turno <= 75){
                    playerList[i].puntos = 2
                    } else if (turno <= 99){
                    playerList[i].puntos = 1
                    } else{
                    playerList[i].puntos = 0
                    }
                };
    
        } ;          
    
        
};

    
 
 function stemaPuntos(){
     
     console.log("Gracias  por jugar a este excelente bingo. Consulta tu puntuación el ranking\n")
    };
    
function ranking(){
    console.log("\n\t-Ranking de jugadores:\n") 

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
        if(endGame === true && playerList[i].player !== "Cobarde"){

        console.log( playerList[i].player + ' ' + playerList[i].puntos + '\n' )
        } else {
            console.log( 'Cobarde 0 \n' )
        }
    } ;  
     retry();
};
    
bingo();
 // Reinicio
 
 function retry(){ 
    bombo = [];
    turno = 0;
    for(let i = 0; i < bingoCard.length; i++){
        bingoCard[i].number = 'randomNumber';
        bingoCard[i].matched = false;
    };
    
    let reiniciar = confirm("¿Deseas jugar otra partida?");
    if (reiniciar === true){
        endGame = false;
       bingo();
        
    } else{
        
       endGame = true;
        despedida();
    }
};
    

function despedida(){
    console.log("Gracias por jugar");
};
     


