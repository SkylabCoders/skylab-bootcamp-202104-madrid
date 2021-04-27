function createList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let newAnchor = document.createElement("a");
    newAnchor.innerText = arr[i]["id"] + " " + arr[i]["name"];
    newAnchor.href =
      "http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=" +
      arr[i]["id"] +
      "&index=" +
      i;
    mainContainerList.appendChild(newAnchor);
  }
}

describe("given a function createList", () => {
  describe("when calling it with an array", () => {
    test("then it will return a serie of anchors and attach them to the DOM", () => {
      //arrange
      document.innerHTML = <div class="list-main__container--first"></div>;
      let mainContainerList = document.querySelector(
        ".list-main__container--first"
      );
      const heroes = [
        { id: 11, name: "Dr Nice" },
        { id: 12, name: "Narco" },
      ];
      //act
      createList(heroes);
      //assert
      expect(mainContainerList.innerHTML).toBe(
        '<a href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=11&index=0">11 Dr Nice</a>' +
          '<a href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=12&index=1">12 Narco</a>'
      );
    });
  });
});

// beforeEach(() => {
//   document.body.innerHTML = "";
// });
// test("it should render a heroes list", () => {
//   // Set up our document body
//   document.body.innerHTML = '<div class="list-main__container--first"></div>';
//   const list = require("./list");
//   const mainContainerList = document.querySelector(
//     ".list-main__container--first"
//   );
//   list.createTheList(heroMock);
//   expect(mainContainerList.innerHTML).toBe(
//     '<a href="http://127.0.0.1:5500/hero-detail/detail.html?id=1&amp;index=0"></a>'
//   );
//   expect(mainContainerList.children[0].innerText).toBe("1 Bombasto");
// });
