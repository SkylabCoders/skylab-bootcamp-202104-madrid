class Detailpage {

 mainContainer = document.querySelector('.pokemonDetail')

  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  printName() {
    const nameContainer = document.createElement('span');
    nameContainer.innerHTML = this.pokemon.name;
   this.mainContainer.appendChild(nameContainer);
  }

  printImage() {
    const imageElement = document.createElement('img');
    const imageElement2 = document.createElement('img');
    const propertiesDiv = document.createElement('div');
    propertiesDiv.innerText = `\tName: ${this.pokemon.name} \n\tHeight: ${this.pokemon.height} \n\tWeight: ${this.pokemon.weight}`;
    imageElement.src = this.pokemon.sprites.front_default;
    imageElement2.src = this.pokemon.sprites.back_default;
    this.mainContainer.appendChild(imageElement);
    this.mainContainer.appendChild(imageElement2);
    this.mainContainer.appendChild(propertiesDiv)
  }

}

function init(){
    const params = new URLSearchParams(window.location.search);
const pokemonName = params.get('name');
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    let detailPage;
    getPokemon(url).then(res=>{
        detailPage = new Detailpage(res);
        detailPage.printName();
        detailPage.printImage();
    })
}
init()



