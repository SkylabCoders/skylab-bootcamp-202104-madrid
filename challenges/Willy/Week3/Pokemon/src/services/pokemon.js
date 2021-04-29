function getPokes(limit, offset){
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
}

function getPokemon(url){
    return fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
    .then((response) => response.json())
}

module.exports = {
    getPokes,
    getPokemon,
}

