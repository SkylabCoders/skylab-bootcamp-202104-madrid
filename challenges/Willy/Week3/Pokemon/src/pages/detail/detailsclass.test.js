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
        test('Then return an object "p" with a name', () =>{
            document.body.innerHTML = '<div id="pokemon__container"></div>'
            let container = document.querySelector('#pokemon__container')
            let prueba = new Detail('pokemon');
            prueba.drawName();
            
            expect(container.innerHTML).toContain('<p></p>')
        })
    })
})

describe('Given a function', () =>{
    describe('When is invoked', () =>{
        let mockPokemon2 = {name: "charmander", sprites:{front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} }
        test('Then return an object "img" with a src', () =>{
            document.body.innerHTML = '<div id="pokemon__container"></div>'
            let container = document.querySelector('#pokemon__container')
            let prueba = new Detail(mockPokemon2);
            prueba.drawImg();

            
            expect(container.innerHTML).toContain("<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png\">")
        })
    })
})