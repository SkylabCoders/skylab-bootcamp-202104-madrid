const heroMock = [{ id: "1", name: "Bombasto" }];

beforeEach(() => {
  document.body.innerHTML = "";
});
test("it should render a heroes list", () => {
  // Set up our document body
  document.body.innerHTML = '<div class="list-main__container--first"></div>';
  const list = require("./list");
  const mainContainerList = document.querySelector(
    ".list-main__container--first"
  );
  list.createTheList(heroMock);
  expect(mainContainerList.innerHTML).toBe(
    '<a href="http://127.0.0.1:5500/hero-detail/detail.html?id=1&amp;index=0"></a>'
  );
  expect(mainContainerList.children[0].innerText).toBe("1 Bombasto");
});
