const heroMock = [{id:'1',name:'Bombasto'}]
test('it should render a heroes list', () => {
    // Set up our document bodyç
    beforeEach(()=>{
        document.body.innerHTML = '';
    });
    document.body.innerHTML = '<div class="main__list"></div>';
    const list = require('./hero_list');
    const container = document.querySelector('.main__list')
    list.createHerosList(heroMock);
    expect(container.innerHTML).toBe('<a href="http://127.0.0.1:5500/hero-detail/detail.html?id=1&amp;index=0"></a>');
    expect(container.children[0].innerText).toBe('1 Bombasto')
    });