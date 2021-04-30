function getPokes(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?${limit}=10&${offset}=0`)
    .then((respose) => respose.json());
}

async function getPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((response) => response.json());
  // const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  // const response = await fetch(url);
  // const data = await response.json();
  // return data;
}

function createElement(tag, parent, innerHTML, className, href) {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
}

module.exports = {
  getPokes,
  getPokemon,
  createElement
};
