//const { getPokemon } = require("../../services/pokemon");

(async function detailPage() {
    const pokeRef = window.location.search.substr(6);
    const pokeUrl =  `https://pokeapi.co/api/v2/pokemon/${pokeRef}`
    const getPokeFetch = await getPokemon(pokeUrl)
    console.log(getPokeFetch)
    const PokeContainer = document.getElementById('pokemon__container') 
    const pokeDetail = document.createElement('p')
    pokeDetail.innerText = `\tId: ${getPokeFetch.id} \n\tName: ${getPokeFetch.name} \n\tHeight: ${getPokeFetch.height} \n\tWeight: ${getPokeFetch.weight}`;
    pokeImg = document.createElement('img');
    pokeImg.src = getPokeFetch.sprites.front_default;
    
    PokeContainer.appendChild(pokeDetail);
    PokeContainer.appendChild(pokeImg);
      
  }());


    
    





      
          
        