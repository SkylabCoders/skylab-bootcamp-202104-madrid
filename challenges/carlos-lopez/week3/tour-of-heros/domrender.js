class Dom-Renderer{
  // properties {id:'span1', class:'red'}
  /**
   * @param  {} selectorParent
   * @param  {} tag
   * @param  {} properties An object with HTML Element properties
   * @description append an element in dom with passed properties
   */
  static appendElementInParent(selectorParent, tag, properties) {
    const parent = document.querySelector(selectorParent);
    const child = document.createElement(tag);
    for (item in properties) {
      child[item] = properties[item];
    }
    parent.appendChild(child);
  };
};

class Dom-Renderer2{
  // properties {id:'span1', class:'red'}
  /**
   * @param  {} selectorParent
   * @param  {} tag
   * @param  {} properties An object with HTML Element properties
   * @description append an element in dom with passed properties
   */
  static appendElementInParent(selectorParent, tag, properties) {
    const parent = document.querySelector(selectorParent);
    const child = document.createElement(tag);
    if (typeof properties === 'object'){
      const props = Object.keys(properties);
      props.forEach((item) => {
        child[item] = props[item];
      });
      
    }
    parent.appendChild(child);
  };
};


class Dom-Renderer2{
  // properties {id:'span1', class:'red'}
  /**
   * @param  {} selectorParent
   * @param  {} tag
   * @param  {} properties An object with HTML Element properties
   * @description append an element in dom with passed properties
   */
  static appendElementInParent(selectorParent, tag, properties) {
    const parent = document.querySelector(selectorParent);
    const child = document.createElement(tag);
    if (typeof properties === 'object'){
      const entries = Object.entries(properties);
      entries.forEach(([key, value]) => {
      child[key] = item[value];
      });
      
    }
    parent.appendChild(child);
  };
};


class Dom-Renderer3{
  // properties {id:'span1', class:'red'}
  /**
   * @param  {} selectorParent
   * @param  {} tag
   * @param  {} properties An object with HTML Element properties
   * @description append an element in dom with passed properties
   */
  static appendElementInParent(selectorParent, tag, properties) {
    const parent = document.querySelector(selectorParent);
    const child = document.createElement(tag);
    if (typeof properties === 'object'){
      child = {
        ...child, ...properties
      }
      
    }
    parent.appendChild(child);
  };
};