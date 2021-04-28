describe("Given an ..", () => {
  describe("When a ...", () => {
    test("Then should be...", () => {
      //Settear el JDom.
      document.body.innerHTML = `
        <div class="wrapper"></div>
        `;
      const { createSpan } = require("./span");

      //arrange
      let tag = "span";
      let id = "reto";
      let innerHTML = "reto";
      let div = document.querySelector(".wrapper");
      //act
      createSpan(tag, id, innerHTML, div);

      //Tener claro lo que renderiza
      let result = '<span id="reto">reto</span>';

      //Llamar a la funcion
      //   importFunction.createSpan(id, innerText);
      console.log(div.innerHTML);
      // assert;
      expect(div.innerHTML).toContain(result);
    });
  });
});
