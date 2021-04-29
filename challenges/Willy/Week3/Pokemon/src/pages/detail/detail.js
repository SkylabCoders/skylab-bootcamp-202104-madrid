const { getPokemon } = require("../../services/pokemon");

(function listPage() {
    const charizard = "https://pokeapi.co/api/v2/pokemon/charizard"
    getPokemon(charizard).then(pokeResponse => {
        console.log(pokeResponse)


        const firePok = document.getElementById('fire-pokemon') 
          
        pokeResponse.forEach(poke => {
            const element = document.createElement('h1')
            element.innerText = poke.name
            firePok.appendChild(element);
        })
    });
}());