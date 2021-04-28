const heroArr = [{ id: "1", name: "Bombasto" }];

beforeEach(() => {
  document.body.innerHTML = "";
});
test("it should render a heroes list", () => {
  // Set up our document body
  document.body.innerHTML =
    "<main>" +
    '<div class="main__first--name"></div>' +
    '<div class="main__second--id"></div>' +
    "</main>";
  const detail = require("./detail");
  let idHero = 1;
  let indexHero = 0;
  const nameContainer = document.querySelector(".main__first--name");
  const idContainer = document.querySelector(".main__second--id");
  detail.loadPage(heroArr, idHero, indexHero);
  expect(nameContainer.children[0].innerText).toBe(heroArr[0]["name"]);
  expect(idContainer.children[0].innerText.toString()).toBe(heroArr[0]["id"]);
});
