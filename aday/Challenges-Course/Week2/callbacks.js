let num1 = 5
let num2 = 5

function sumar(num1, num2, callback){
    return callback(num1 + num2)
}

sumar(num1, num2, function(result){
    console.log(`El resultado es ${result}`)
})