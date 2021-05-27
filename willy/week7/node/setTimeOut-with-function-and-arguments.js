const rock = (who, city) => {
    console.log(who + ' Rocks ' + city)
}

setTimeout(rock, 2*1000, 'Skylab', 'Madrid') // los parámetros después del delay son los que se pasan al callback