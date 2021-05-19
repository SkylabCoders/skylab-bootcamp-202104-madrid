const params = new URLSearchParams(window.location.search);
const pokeName = params.get('name');
const detailDiv = document.getElementById('poke-details');
const nameH1 = document.createElement('h1');
nameH1.classList = 'pokemon-name';
const heigthSpan = document.createElement('span');
heigthSpan.classList = 'pokemon-heigth';
const widthSpan = document.createElement('span');
widthSpan.classList = 'pokemon-width';

(function () {
  getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((pokemon) => {
    detailDiv.innerHTML = (pokemon.name);
    detailDiv.appendChild(heigthSpan);
    heigthSpan.innerHTML = `heigth: ${pokemon.heigth}`;
    detailDiv.appendChild(widthSpan);
    widthSpan.innerHTML = `width: ${pokemon.width}`;
  });
}());
