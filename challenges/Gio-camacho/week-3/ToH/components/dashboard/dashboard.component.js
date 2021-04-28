window.addEventListener("DOMContentLoaded", () => {
  const heroes = fetchHeroes("../../store/superHeroData.json");

  const mainSection = document.querySelector(".container-dashboard");

  createElement("h1", mainSection, "Tour of Heroes");
  createElement(
    "a",
    mainSection,
    "Dashboard",
    null,
    "./../dashboard/dashboard.html"
  );
  createElement("a", mainSection, "Heroes", null, "./../heroes/heroes.html");
  createElement("h3", mainSection, "Top Heroes");

  heroes.then((info) => {
    const getDashboardList = createElement("ul", mainSection, "");
    info.slice(0, 4).forEach((element) => {
      const newElementLi = createElement(
        "li",
        getDashboardList,
        "",
        "heroe-item"
      );
      const firstHeroesNames = createElement(
        "a",
        newElementLi,
        `${element.name}`,
        null,
        `http://127.0.0.1:5500/components/hero-details/hero-details.html?heroeName=${element.name}&heroeID=${element.id}`
      );
    });
  });
});

module.exports = { heroes };
