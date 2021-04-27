let matriz = []
let table;
let bombas;
let shuffleArr = []
let index = 0;

const buscaminas = {
    
    numMinasEncontradas: 0,
    numFilas: 10,
    numColumnas: 10,
    CampoMinas: matriz
};
preguntas()

function preguntas(){
let askBomb = prompt("Cuantas bombas quieres que haya")

switch(askBomb){
    
    case null:
        preguntas()
        break;
    case isNaN(askBomb):
        confirm("Introduce solo números")
        preguntas();
        break;
    default:
    bombas = parseInt(askBomb);
    /*for (let i = 0; i < 10; i++){
        askBomb[i] = i;
        for (let j =0; j)
        bombas.push(askBomb[i]);
        bombas.fill('bomb')
    }*/
    
}
}
/*
function shuffleTheArray() {
    for (let i = 0; i < 100; i++) {
      if (i < bombas) {
        shuffleArr.push("bomb");
      } else {
        shuffleArr.push("empty");
      }
    }
    shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
  }
*/

function shuffleTheArray() {
    for (let i = 0; i < 100; i++) {
      if (i < bombas) {
        shuffleArr.push("bomb");
      } else {
        shuffleArr.push("empty");
      }
    }
    shuffleArr = shuffleArr.sort(() => Math.random() - 0.5);
  }
  

  

function crearTablero() {

    const tablero = document.getElementById('container__mesa');
    tablero.innerHTML = ""
    shuffleTheArray()

    for(let f = 0; f <10; f++) {
    matriz[f] = [];
        for(let c = 0; c < 10; c++) {
            let table = document.createElement('div');
            table.id = "f"+f+"_c"+c;
            table.className = shuffleArr[index]
            //table.dataset.fila = f;
            //table.dataset.columna = c;
           // matriz[f][c] = "empty";
           // table.addEventListener('click', jugar(table))
           // table.addEventListener('contextmenu', bandera);
            tablero.appendChild(table);
            matriz[f].push(table)
            index++
        }
    }
    
    
};
crearTablero()

/*
shuffleTheArray()
function shuffleTheArray() {
    for (let i = 0; i < matriz.length; i++) {
       // shuffleArr[i] = []
        for (let j = 0; j < matriz[i].length; j++) { 
            if (j < bombas) {
                matriz[i][j].fill("bomb");
            } else {
                matriz[i][j].fill("empty");
            }
        }    
    }
    matriz = matriz.sort(() => Math.random() - 0.5);
  }
*/

function esparcirMinas(){

    let numMinasEsparcidas = 0;
    
    while (numMinasEsparcidas < bombas){

        let fila = Math.floor(Math.random() * buscaminas.numFilas);

        let columna = Math.floor(Math.random() * buscaminas.numColumnas);
 
        if (buscaminas.CampoMinas[fila][columna] != "B"){
 
            buscaminas.CampoMinas[fila][columna] = "B";
            

            numMinasEsparcidas++;
        } 
            
    }
    

}

   



function jugar() {
    
}



     

/*
for (let i = 0; i < matriz.length; i++){
    debugger
    for (let j = 0; j < matriz[i].length; j++){
        if (matriz[i, j] === "B"){
            alert("estas muerto")
            return crearTablero()
            
        } else {
            alert("sigue jugando")
            break;
        }
    }
}
*/


function bandera(){
    let casilla;
}


/*
function jugar(){
   alert("hola")
};*/



let posicion1 = document.getElementById('f0_c0')
posicion1.innerText = matriz[0][0];




/*
function crearTablero(){
    let tablero = document.getElementById('container__mesa')
    
    for (let i=0; i < 100; i++){
        table = document.createElement('div')
        table.addEventListener('click', jugar);
        table.id = i;
        tablero.appendChild(table);
        
        /*for (let j = 0; j < 10; j++){ 
            table.setAttribute("fila" + j)

            for (let k = 0;k < 10; k++){
                
                table.dataset.columna = k;
            }
        }
    */
       // crearTablero()  
/*
    }
}    
/*
for(let f=0; f<numFilas; f++){
    for(let c=0; c<numColumnas; c++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id","f" + f + "_c" + c );
        newDiv.dataset.fila = f;
        newDiv.dataset.columna = c;


pintar()

function pintar(){
    for (let j = 0; j < 10; j++){ 
            
        matriz[j] = [];
        //table.dataset.fila = j;

        for (let k = 0;k < 10; k++){
         matriz[j][k] = k
         //table.dataset.columna = k;
        }     
    }
}




   
     


/*
function llenarTablero(){
    let matriz = [];
    for (let i = 0; i < 10; i++){
        matriz[i] = [];
        for (let j = 0; i < 10; i++){
            matriz[i][j] = j
        }
    }
    table.push(matriz)
    }

*/

