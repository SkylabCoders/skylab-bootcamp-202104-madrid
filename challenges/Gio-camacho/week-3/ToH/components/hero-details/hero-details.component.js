const heroes = fetchHeroes("../../store/superHeroData.json");

const mainSection = document.querySelector(".container-heroes-details");

const param = new URLSearchParams(location.search);
const paramID = param;
console.log("url", param);
const heroeName = param.get("heroeName");
console.log("heroName", heroeName);

const heroeID = paramID.get("heroeID");

createElement("h1", mainSection, "Tour of Heroes");
createElement(
  "a",
  mainSection,
  "Dashboard",
  null,
  "./../dashboard/dashboard.html"
);
createElement(
  "a",
  mainSection,
  "Heroes",
  null,
  "./../heroes-details/heroes-details.html"
);
createElement("h3", mainSection, `${heroeName} details!`);

const getContainerInfo = createElement("div", mainSection, "");

createElement("input", getContainerInfo);

// pendiente cambiar esta funcion para mostrar el detalle de los superheroes //

const heroDetails = heroes.then((info) => {
  const heroData = info.find((hero) => hero.id === parseInt(heroeID, 10));
  console.log(heroData);
  const getDetailsList = createElement("ul", getContainerInfo, null);
  Object.entries(heroData).forEach((property) => {
    createElement("li", getDetailsList, `${property}`);
  });
});

createElement("a", mainSection, "Back", null, "./../dashboard/dashboard.html");
