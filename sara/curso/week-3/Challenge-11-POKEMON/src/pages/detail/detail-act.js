(function () {
  const params = new URLSearchParams(window.location.search);
  const pokeName = params.get('name');

  getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then((pokemon) => {
    const newDetail = new DetailPage(pokemon);
    newDetail.paintName();
    newDetail.paintImg();
    newDetail.addAditionalInfo();
  });
}());
