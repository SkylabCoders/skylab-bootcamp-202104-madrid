const getUrl = (pokeName) => `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

getPokemon(getUrl('ditto')).then((pokemon) => {
  const detailPage = new DetailPage(pokemon);

  detailPage.drawName();
  detailPage.drawImage();
});
