const Details = require('./details.component');

describe('Given a htmlTagGenerator method', () => {
  describe('When is invoked', () => {
    test('Then should return an Html Element', () => {
      document.body.innerHTML = `
        <div id="wrapper-details"></div>
        `;

      const parent = document.getElementById('wrapper-details');
      const details = new Details('img');
      const createHtmlTag = details.htmlTagGenerator(null, 'wrapper-details__img', null, './img/picture.png');

      parent.appendChild(createHtmlTag);

      const result = '<img class="wrapper-details__img" src="./img/picture.png">';
      expect(parent.innerHTML).toContain(result);
    });
  });
});
