const heroes = fetchHeroes("../../store/superHeroData.json");

const mainSection = document.querySelector(".container-heroes");

createElement("h1", mainSection, "Tour of Heroes");
createElement(
  "a",
  mainSection,
  "Dashboard",
  null,
  "./../dashboard/dashboard.html"
);
createElement("a", mainSection, "Heroes", "./../heroes/heroes.html");
createElement("h3", mainSection, "My Heroes");

heroes.then((info) => {
  const divContainer = createElement("div", mainSection, "");
  const getList = createElement("ul", divContainer, "");
  info.slice(0, 9).forEach((element) => {
    const newLi = createElement("li", getList, "", "heroe-item");
    const reference = createElement(
      "a",
      newLi,
      `${element.name}`,
      `ID:${element.id}`,
      `http://127.0.0.1:49629/Isabel-Gomez/challenge/tour-of-heroes/components/heroes-details/heroes-details.html?heroeName=${element.name}&heroeID=${element.id}`
    );
    reference.onmouseover = (e) => mouseOver(e.target.innerHTML);
    reference.onmouseout = () => mouseOver(undefined);
  });
  createElement(
    "a",
    mainSection,
    "View Details",
    null,
    "./../heroes-details/heroes-details.html"
  );
  createElement("h3", divContainer, "", "title");
});
