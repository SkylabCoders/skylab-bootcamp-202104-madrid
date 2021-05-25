function miFirstCallback(callback){
    callback();
}

miFirstCallback(function(){
   console.log('Node es cool')
})

const num1 = 5,
num2 = 5

function sumar(num1, num2, callback){
    return callback(num1 + num2)
}

sumar(num1, num2, function(result){
    console.log('El resultado es ' + result)
})

function otroCallback(callback){
    console.log(callback())
}

otroCallback(function(){
    return 'Node molaaa!'
})