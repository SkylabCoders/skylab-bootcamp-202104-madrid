
//Test passed
describe('given a prinRandomNumbers()', () => {
    describe('when calling it', () => {
        test('then it should return 1', () => {
            let num1 = Math.floor(Math.random() * 11);
            expect(num1).not.toBe(12);
        })
    })
})

// Test passed

function renderNames(arr,num1){
   return arr[num1];
  }

describe('given a renderNames()', () => {
    describe('when calling it with 2 parameters (arr, 3)', () => {
        test('then it should log 4', () => {
            //arrange
            let arr = [1, 2, 3, 4];
            //act
            let result = renderNames(arr, 3);
            //assert
            expect(result).toBe(4);
        })
    })
})


//Test in progress

function renderListHeroes() {
    let newAnchor = document.createElement("newAnchor");
    newAnchor.id = "hola";
    newAnchor.innerHTML = "frase + frase";
    let result = newAnchor.innerHTML;
    document.body.appendChild(newAnchor);
    return result;
  };

describe("Given function renderListHeroes", () => {
  describe("When calling renderListHeroes", () => {
    test("It should return <newAnchor id=hola>frase + frase</newAnchor>", () => {
      let newAnchor = document.createElement("newAnchor");
      document.body.innerHTML = `<div id="contenedor"></div>`;
      let div1 = document.getElementById("contenedor");
      renderListHeroes();
      console.log(div1.innerHTML)
      console.log(newAnchor.innerHTML)
      expect(div1.innerHTML).toContain(newAnchor.innerHTML);
    });
  });
});


