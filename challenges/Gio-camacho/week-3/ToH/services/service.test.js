describe("Given an ..", () => {
  describe("When a ...", () => {
    test("Then should be...", () => {
      //Settear el JDom.
      document.body.innerHTML = `
        <div class="wrapper"></div>
        `;
      const { createElement } = require("./services");

      //arrange
      let div = document.querySelector(".wrapper");
      let tag = "a";
      let parent = div;
      let innerHTML = "heroes";
      let className = "link";
      let href = "https://www.google.es/";
      //act
      createElement(tag, parent, innerHTML, className, href);

      //Tener claro lo que renderiza
      let result = '<a class="link" href="https://www.google.es/">heroes</a>';

      //Llamar a la funcion
      createElement("a", div, "heroes", "link", "https://www.google.es/");
      console.log(div.innerHTML);
      // assert;
      expect(div.innerHTML).toContain(result);
    });
  });
});

describe("Given an ..", () => {
  describe("When a ...", () => {
    test("Then should be...", () => {
      //arrange
      document.body.innerHTML = `
      <div class="title"></div>
      `;
      const { mouseOver } = require("./services");
      let nombre = "renszo";
      let div = document.querySelector(".title");
      //act

      let result = "renszo is my hero";
      mouseOver(nombre);
      console.log(div.innerHTML);
      console.log(result);
      // assert;
      expect(div.innerHTML).toBe(result);
    });
  });
});

describe("Given an ..", () => {
  describe("When a ...", () => {
    test("Then should be...", async () => {
      const promesa = require("./services");
      promesa.fetchHeroes().then(async (data) => {
        await expect(data).toEqual(promesa.fetchHeroes);
      });
    });
  });
});

/*
 * toHaveBenCalled: Utilizalo par simular una llamada a un mock
 */
