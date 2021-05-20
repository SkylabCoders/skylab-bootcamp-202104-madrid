function addRandomHeroes(newArr, originalArr) {
  let mainContainer = document.querySelector(".list");
  newArr.forEach((element) => {
    let hero = originalArr[element]["name"];
    let newCardHero = document.createElement("a");
    newCardHero.classList.add("main-container__anchor--card");
    newCardHero.innerHTML = hero;
    newCardHero.href =
      "http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=" +
      originalArr[element]["id"] +
      "&index=" +
      element;
    mainContainer.appendChild(newCardHero);
  });
}

describe("given a function addRandomHeroes", () => {
  describe("when calling it with two arrays", () => {
    test("then it will return a serie of anchors and attach them to the DOM", () => {
      //arrange
      document.body.innerHTML = '<div class="list"></div>';
      const heroes = [
        { id: 11, name: "Dr Nice" },
        { id: 12, name: "Narco" },
      ];
      const numArr = [1, 0];
      //act
      addRandomHeroes(numArr, heroes);
      //assert
      expect(document.body.innerHTML).toContain(
        '<div class="list">' +
          '<a class="main-container__anchor--card" href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=12&amp;index=1">Narco</a>' +
          '<a class="main-container__anchor--card" href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=11&amp;index=0">Dr Nice</a>' +
          "</div>"
      );
    });
  });
});
