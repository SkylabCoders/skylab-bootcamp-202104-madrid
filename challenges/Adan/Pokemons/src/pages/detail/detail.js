(function printPokemon() {
  const urlDitto = 'https://pokeapi.co/api/v2/pokemon/ditto';
  getPokemon(urlDitto).then((pokeResponse) => {
    console.log(pokeResponse);
    const [countSpan] = document.getElementsByClassName('total-pokes');
    countSpan.textContent = pokeResponse.count;

    const pokeList = document.getElementById('poke-list');

    pokeResponse.results.forEach((poke) => {
      const element = document.createElement('li');
      element.innerText = poke.name;
      pokeList.appendChild(element);
    });
  });
}());
