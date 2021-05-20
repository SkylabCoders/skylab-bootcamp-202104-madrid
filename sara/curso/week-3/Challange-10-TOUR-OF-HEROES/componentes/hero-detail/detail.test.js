// const heroArr = [{ id: "1", name: "Bombasto" }];
function loadPage(arr, id, index) {
  let nameContainer = document.querySelector(".main__first--name");
  let idContainer = document.querySelector(".main__second--id");
  let heroName = document.createElement("h1");
  let heroId = document.createElement("h3");
  nameContainer.appendChild(heroName);
  idContainer.appendChild(heroId);
  heroName.innerHTML = arr[index]["name"];
  heroId.innerHTML = id;
}

describe("given a function load", () => {
  describe("when calling it with an array, the id property of an object and an index of the array", () => {
    test("then it will return an h1 and an h3 and attach them to the DOM", () => {
      //arrange
      document.body.innerHTML =
        '<div class="main__first--name"></div>' +
        '<div class="main__second--id"></div>';
      const heroes = [
        { id: 11, name: "Dr Nice" },
        { id: 12, name: "Narco" },
      ];
      //act
      loadPage(heroes, 12, 1);
      //assert
      expect(document.body.innerHTML).toContain(
        '<div class="main__first--name">' +
          "<h1>Narco</h1>" +
          "</div>" +
          '<div class="main__second--id">' +
          "<h3>12</h3>" +
          "</div>"
      );
    });
  });
});
