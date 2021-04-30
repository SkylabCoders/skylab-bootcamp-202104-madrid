/*

const { getPokemon } = require("../../services/pokemon");

class Detail {
    constructor(pokemon){
        this.pokemon = pokemon
    }

    drawName() {
        const parent = document.getElementById('pokemon__container'); 
        const child = document.createElement('p')
        child.innerText = this.pokemon.name;
        parent.appendChild(child)
    }

    drawImg () {
        const parent = document.getElementById('pokemon__container');
        const child = document.createElement('img');
        child.src = this.pokemon.sprites.shiny.front_default;
        parent.appendChild(child)
    }
}

getPokemon(url).then((res) =>{
    detailPage = new Detail()
})

function init (){
    detailPage;
    getPokemon(url).then((pokemon) =>
    detailPage = new Detail();

}
*/