const { expect } = require("@jest/globals");
//A la hora de hecer una iteracion, llamar a la variable que tiene el requiere. y lo usas como constructor.
const Pro = require("./index");
const Promesa = new Pro();

test("...", () => {
  /*
    Las promesas siempre tiere que tener un return, por que sino lo recoje como algo sincrono.
    */

  return Promesa.lanzarPromesa().then(async (data) => {
    await expect(data).toEqual(Promesa.heroes);
  });
});
