
let prueba;
function goToList() {
    prueba =
      "https://www.google.es/";
  }

  describe('Given goToList function', () => {
      describe('when calling it', () =>{
          test('It should return a url', ()=>{
            goToList();
            expect(prueba).toBe("https://www.google.es/"
            )
          })
      })
  })