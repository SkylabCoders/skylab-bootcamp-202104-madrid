function createList(arr) {
  let mainContainerList = document.querySelector(".list");
  for (let i = 0; i < arr.length; i++) {
    let newAnchor = document.createElement("a");
    console.log(arr[i]["name"]);
    newAnchor.href =
      "http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=" +
      arr[i]["id"] +
      "&index=" +
      i;
    newAnchor.innerHTML = arr[i].id + " " + arr[i].name;
    mainContainerList.appendChild(newAnchor);
  }
}

describe("given a function createList", () => {
  describe("when calling it with an array", () => {
    test("then it will return a serie of anchors and attach them to the DOM", () => {
      //arrange
      document.body.innerHTML = '<div class="list"></div>';
      const heroes = [
        { id: 11, name: "Dr Nice" },
        { id: 12, name: "Narco" },
      ];
      //act
      createList(heroes);
      //assert
      expect(document.body.innerHTML).toContain(
        '<div class="list">' +
          '<a href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=11&amp;index=0">11 Dr Nice</a>' +
          '<a href="http://127.0.0.1:5500/componentes/hero-detail/detail.html?id=12&amp;index=1">12 Narco</a>' +
          "</div>"
      );
    });
  });
});
