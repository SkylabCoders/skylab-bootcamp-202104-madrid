const retrieveDataUsingPromise = () => {
  return new Promise((res, rej) => {
    function sum(a, b) {
      return a + b;
    }
    setTimeout(() => {
      res(sum(1, 5));
    }, 10000);
  });
};

// retrieveDataUsingPromise().then((res) => console.log(res));
const heroes = [
  { id: 11, name: "Dr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};

const mapData = (arr) => {
  array.forEach((element) => {
    createElement(
      "div",
      document.body,
      `${element.name} and ${element.id}`,
      "haha",
      null
    );
  });

  // for (let i = 0; i < arr.length; i++) {
  //   createElement(
  //     "div",
  //     document.body,
  //     `${arr[i].name} and ${arr[i].id}`,
  //     "haha",
  //     null
  //   );
  // }
};

const renderData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(heroes);
    }, 5000);
  });
};
renderData().then((data) => {
  console.log(data);
  return mapData(data);
});
/*
Crear una funcion pintar datos y en el resolve invoke la funcion
*/
