(function listPage() {
  getPokes(10, 0).then((pokeResponse) => {
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
