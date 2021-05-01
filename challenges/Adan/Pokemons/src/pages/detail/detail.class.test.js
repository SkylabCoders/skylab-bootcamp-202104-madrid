const Detailpage = require('./detail.class');

describe('Given a method printName in a object', () => {
  describe('When its called', () => {
    test('then it should print "<span class="pokemonDetail">ditto</span>"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const span = document.createElement('span');
      jest.mock('./detail.class');
      const detailpage = new Detailpage("{ name: 'ditto' }");

      detailpage.printName();

      expect(nameContainer.innerHTML).toContain(span.innerHTML);
    });
  });
});
describe('Given a method printName in a object', () => {
  describe('When its called', () => {
    test('then it should print "<span class="pokemonDetail">ditto</span>"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const span = document.createElement('span');
      jest.mock('./detail.class');
      const detailpage = new Detailpage("{ name: 'ditto' }");

      detailpage.printName();

      expect(nameContainer.innerHTML).toContain(span.innerHTML);
    });
  });
});
// describe("Given function renderSpan", () => {
//     describe("When calling renderSpan", () => {
//       test("It should return <span iwd=hola>frase + frase</span>", () => {
//         let span = document.createElement("span");
//         document.body.innerHTML = `<div id="contenedor"></div>`;
//         let div1 = document.getElementById("contenedor");
//         principal.renderSpan();
//         console.log(div1.innerHTML)
//         console.log(span.innerHTML)
//         expect(div1.innerHTML).toContain(span.innerHTML);
//       });
//     });w
//   });
