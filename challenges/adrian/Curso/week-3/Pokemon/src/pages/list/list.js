(function listPage() {
  getPokes(10, 0).then((pokeResponse) => {
    const [countSpan] = document.getElementsByClassName('total-pokes');
    countSpan.textContent = pokeResponse.count;

    const pokeList = document.getElementById('poke-list');

    pokeResponse.results.forEach((poke) => {
      const element = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.innerText = poke.name;
      anchor.href = `http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Pokemon/src/pages/detail/detail.html?name=${poke.name}`;
      element.appendChild(anchor);
      pokeList.appendChild(element);
    });
  });
}());
