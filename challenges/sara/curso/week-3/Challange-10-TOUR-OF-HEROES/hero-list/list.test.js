const listJS = require("./list");
const HEROES = [
  { id: 11, name: "Dr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];

beforeEach(() => {
  document.body.innerHTML = '<div class="list-main__container--first"></div>';
});

describe("given a function createAnchor()", () => {
  describe("when calling it", () => {
    test("Then the anchor will be truthy", () => {
      //arrange
      //act
      listJS.createTheList(HEROES);
      let result = document.getElementsByTagName("a");
      //assert
      expect(result).toBeTruthy();
    });
  });
});
