const Heroes = require('./heroes');
const lista = new Heroes()

test('it should render a heroes list', () => {
    // Set up our document body
    beforeEach(()=>{
        document.body.innerHTML = '';
    });
    document.body.innerHTML = '<div id="main__container"></div>'; //mocking manually div in main HTML
    const container = document.getElementById('main__container')
    const heroMock = [{id:'1', name:'Bombasto'}]
    console.log(container)
    lista.createTheList(heroMock) // calling the function in test
    expect(container.innerHTML).toBe('<a href="http://127.0.0.1:5500/hero-detail/detail.html?id=1&amp;index=0"></a>');
    expect(container.children[0].innerText).toBe('1 Bombasto')
    });
