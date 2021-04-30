const Detail = require('./detailsclass')

describe('Given a Detail class', () => {
    describe('when is invoked without argument', () => {
        const page = new Detail()
        test(`then return an object`, () => {
            expect(page).toEqual({})
        })
    })
})

describe('Given a function', () =>{
    describe('When is invoked', () =>{
        test('Then return an object "p"', () =>{
            document.body.innerHTML = '<div id="pokemon__container"></div>'
            let container = document.querySelector('#pokemon__container')
            let prueba = new Detail('pokemon');
            prueba.drawName();
            
            expect(container.innerHTML).toContain('<p></p>')
        })
    })
})