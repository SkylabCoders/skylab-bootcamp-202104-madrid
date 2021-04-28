const createSpan = (tag, id, innerHTML, parent) => {
  const getTag = document.createElement(tag);
  getTag.id = id;
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  return getTag;
};

module.exports = { createSpan };
