// const { TestScheduler } = require("@jest/core")
const listJs = require("./list");
describe("Given a function createAnchor()", () => {
  describe("when calling it", () => {
    test("then the anchor will be truthy", () => {
      //Arrange;
      //act;

      const result = document.getElementsByTagName("a");
      //assert;
      expect(result).toBeTruthy();
    });
  });
});

//test renderHero()

test("then it should render a hero list", () => {
  //arrange
  const heroMock = { id: "1", name: "Bombasto" };
  document.body.innerHTML = '<div class="div--listNames"></div>';
  const container = document.querySelector(".div--listNames");
  //act
  //assert;
  listJs.renderHero(heroMock, 1);
  expect(container.innerHTML).toBe(
    '<a href="http://127.0.0.1:5500/hero-detail/detail.html?id=1&amp;index=1"></a>'
  );
  expect(container.children[0].innerText).toBe("1 Bombasto");
});
