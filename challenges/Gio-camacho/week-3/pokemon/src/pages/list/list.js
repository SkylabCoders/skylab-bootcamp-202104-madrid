(function listPage() {
  getPokes(10, 0).then((pokeResponse) => {
    const [countSpan] = document.getElementsByClassName('total-pokes');
    const pokeList = document.getElementById('poke-list');
    pokeResponse.results.forEach((poke) => {
      const listElement = document.createElement('li');
      const element = document.createElement('a');
      pokeList.appendChild(listElement);
      listElement.appendChild(element);
      element.innerHTML = poke.name;
      element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}`;
    });
  });
}());
