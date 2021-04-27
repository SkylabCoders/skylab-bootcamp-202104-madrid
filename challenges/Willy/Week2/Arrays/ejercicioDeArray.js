// map

let arr = [1, 2, 3]
function mapa(array, callbackFunct){
    let arrResult = [];
    let contador = -1;
    for (let item of array){
        contador++;
        arrResult[contador] = callbackFunct(item);
    } return arrResult;
}
function multiplicar(num1){
return num1 *= 2
}
function restar(num1) {
    return num1 -= 1 
}

// filter

let arr = [1,2,5,6]

function filter(array, callbackFunct){
    let arrResult = [];
    let contador = 0;
    for (let item of array){
        if (callbackFunct(item)){
            arrResult[contador] = item;
            contador++;
        } else {
            console.log("No se cumple la condicion")

        }
    } return arrResult;
}

function comprobacion(num){
    if (num > 3){
        return true
    } else {
        return false
    }
}

// find

let arr = [3,2,3,6]

function finder(array, callbackFunct){
    let valor = 0;
    let contador = 0;
    for (let item of array){
        if (callbackFunct(item)){
            valor = item;
            
        } else {
            console.log("No se cumple la condicion")

        }
    } return valor;
}

function comprobacion(num){
    if (num === 3){
        return true
    } else {
        return false
    }
}

//index

let arr = [1,2,3,6]

function index(array, callbackFunct){
    
    let contador = 0;
    primerValor;
    for (let item of array){
       
            
            contador++
        
    } 

    for (let i = 0; i < contador; i++){
        let valor = callbackFunct(array[i])
        if (valor){
            primerValor = i;
            break;
           
    }else {
        valor = -1
    }
    }

    return valor;
}

index(arr, (x) =>{
    return x = 2
})


// reduce

let arr = [3,2,3,6]

function reduce(array, callbackFunct){
    let valor = 0;
    let contador = 0;
    for (let item of array){
        if (callbackFunct(item)){
            valor = item;
            
        } else {
            console.log("No se cumple la condicion")

        }
    } return valor;
}

function comprobacion(value){
    this.sum += value
    
}


let array = [1,2,3,4]

console.log(array[2])

/// imdex2

let arr = [4,2,3,6]

function index(array, callbackFunct){
    let valor = 0;
    let contador = 0;
    
    for (let item of array){
        if (callbackFunct(item)){
            
            contador++
        } 
    } 
    for (let i = 0; i < contador; i++){
        if (valor === -1){
            valor = i
            
    }else {
        valor = -1
    }
    }

    return valor;
}



function comprobacion(num){
    if (num === 3){
        return true
    } else {
        return false
    }
}



// some

let arr = [3,3,3,6]

function some(array, callbackFunct){
    let valor;
    let contador = 0;
    for (let item of array){
        if (callbackFunct(item)){
            return true;
            
        } else {
            return false
        }
    } return valor;
}

function comprobacion(num){
    if (num === 3){
        return true
    } else {
        return false
    }
}

// every

let arr = [3,3,3,6]

function every(array, callbackFunct){
    let valor;
    let contador = 0;
    for (let item of array){
        if (callbackFunct(item)){
            return true;
            
        } else {
            return false
        }
    } return valor;
}

function comprobacion(num){
    if (num > 2 || num === []){
        return true
    } else {
        return false
    }
}

//solo funciona cuando no tiene en cuenta el array vacio xD

// reduce

function reducer(accumulator, currentValue)

comprobarLength(){
    let theLenght() = 0
    for (let element of ar)


}

module.exports = {mapa:mapa, callbackFunct: multiplicar}