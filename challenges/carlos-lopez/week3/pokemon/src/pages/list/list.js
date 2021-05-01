(function listPage() {
  const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  getPokes(urlApi).then((pokeResponse) => {
    const [countSpan] = document.getElementsByClassName('total-pokes');
    countSpan.textContent = pokeResponse.count;
    const pokeList = document.getElementById('poke-list');
    pokeResponse.results.forEach((poke) => {
      const element = document.createElement('a');
      element.innerText = poke.name;
      pokeList.appendChild(element);
      element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}`;
    });
  });
}());
