class Helper {
  constructor(tag) {
    this.tag = tag;
  }

  htmlTagGenerator(innerText, className, href, src) {
    const createTag = document.createElement(this.tag);
    createTag.innerText = innerText;
    createTag.classList = className;
    createTag.href = href;
    createTag.src = src;
    return createTag;
  }
}

// module.exports = Helper;
