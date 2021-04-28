async function fetchHeroes(url) {
  return fetch(url).then((response) => response.json());
}

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

function mouseOver(name) {
  const title = document.querySelector(".title");
  if (name) {
    title.innerHTML = `${name} is my hero`;
  } else {
    title.innerHTML = "";
  }
}

module.exports = { createElement, mouseOver, fetchHeroes };
