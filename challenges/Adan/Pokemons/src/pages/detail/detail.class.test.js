const Detailpage = require('./detail.class');

const pokemonImage = {
  sprites: 'url', name: 'ditto', height: '10', weight: '20'
};

describe('Given a method printName in a object', () => {
  describe('When its called', () => {
    test('then it should print "<span>ditto</span>"', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [nameContainer] = document.getElementsByClassName('pokemonDetail');
      const span = document.createElement('span');
      const detailpage = new Detailpage("{ name: 'ditto' }");
      nameContainer.appendChild(span);
      detailpage.printName();

      expect(nameContainer.innerHTML).toContain(span.innerHTML);
    });
  });
});
describe('Given a method printImage', () => {
  describe('When its called', () => {
    test('then it should create and print and image', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [imageContainer] = document.getElementsByClassName('pokemonDetail');
      const image = document.createElement('img');
      const detailpage = new Detailpage(pokemonImage);

      image.src = pokemonImage.sprites;
      imageContainer.appendChild(image);
      detailpage.printImage();

      expect(imageContainer.innerHTML).toContain(image.innerHTML);
      expect(image.src).toContain('url');
    });
    test('Then it should print the properties taken through the object', () => {
      document.body.innerHTML = '<div class="pokemonDetail"></div>';
      const [imageContainer] = document.getElementsByClassName('pokemonDetail');
      const properties = document.createElement('div');
      imageContainer.appendChild(properties);
      properties.innerText = `Name: ${pokemonImage.name}, Height: ${pokemonImage.height}, Weight: ${pokemonImage.weight}`;
      expect(properties.innerText).toBe('Name: ditto, Height: 10, Weight: 20');
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
