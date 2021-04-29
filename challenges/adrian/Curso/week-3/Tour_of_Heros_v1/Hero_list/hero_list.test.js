// let principal = require("./hero_list");

function printHerosDetails(item) {
  const listHeros = document.getElementById('main__list');
  const anchorHero = document.createElement('a');
  listHeros.appendChild(anchorHero);
  anchorHero.innerHTML = `${item.id} ${item.name}`;
  anchorHero.href = `http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Details/details.html?id=${item.id}&name=${
    item.name}`;
}

describe('Given a function printDetails', () => {
  describe('When calling it with an array', () => {
    test('It should create an anchor and printing the dom', () => {
      // arrange
      const heros = [{ id: 11, name: 'Adrian' }];
      document.body.innerHTML = "<div id='main__list'></div>";
      //   let listHeros = document.getElementById("main__list");
      // act
      printHerosDetails(heros[0]);
      // assert

      expect(document.body.innerHTML).toContain('<div id="main__list"><a href="http://127.0.0.1:5500/challenges/adrian/Curso/week-3/Tour_of_Heros_v1/Details/details.html?id=11&amp;name=Adrian">11 Adrian</a></div>');
    });
  });
});
