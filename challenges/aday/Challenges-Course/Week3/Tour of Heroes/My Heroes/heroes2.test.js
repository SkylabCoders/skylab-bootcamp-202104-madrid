

const heroMock = {id: 12, name: 'Narco'};

test('it should render a heroes list', () => {
    // Set up our document body
    beforeEach(() => {
        document.body.innerText = '';
    });
    document.body.innerHTML = '<div id="heroes"></div>';
    const list = require('./heroes2')
    const container = document.getElementById('heroes')
    list.printItem(heroMock)
    expect(container.innerHTML).toBe('<a href="file://Users/aday/Documents/aday/Challenges-Course/Week3/Tour%20of%20Heroes/My%20Heroes/my-heroes.html?id=12&amp;name=Narco">ID: 12 Nombre: Narco</a>');
    expect(container.children[0].innerText).toBe('12 Narco');
});
