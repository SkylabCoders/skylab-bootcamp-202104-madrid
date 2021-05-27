const rock = (who, city) => {
    console.log(who + ' Rocks ' + city)
}

setTimeout(rock, 2*1000, 'Skylab', 'Madrid') 
// los parámetros después del delay son los que se pasan al callback


const hello = (number) => {
    console.log('Hello after ' + number + ' secs')
}

setTimeout(hello, 4*1000, '4')
setTimeout(hello, 8*1000, '8')