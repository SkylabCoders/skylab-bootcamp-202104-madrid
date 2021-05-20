const detailsContainer = document.getElementsByClassName('main__hero-details');

const params = new URLSearchParams(window.location.search);
let nameHero = params.get('name');
let idHero = params.get('id');

let nombre = document.createElement('h2');
let id = document.createElement('h3');

nombre.innerText = HEROES['name']
id.innerText = HEROES['id'];

detailsContainer[0].appendChild(nombre);
detailsContainer[0].appendChild(id);
