const { getPokes } = require('../../services/pokemon');

(function () {
  getPokes(10, 0).then((pokeRes) => {
    console.log(pokeRes);

    const [button] = document.getElementsByTagName('button');
    button.onclick = getPokes(pokeRes.next);

    // const pokeList = document.getElementById('li');
    // pokeRes.result.forEach((poke) => {
    //   const li = document.createElement('li');

    });
  });
}());
