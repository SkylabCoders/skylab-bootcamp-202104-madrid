class Dashboard {
  
  listNamesDash = document.querySelector(".main__div");
  params = new URLSearchParams(window.location.search);
  index = this.params.get("index");
  url =
    "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";

  constructor() {}

  fetchInfo(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => renderListHeroes(data));
  }

  renderListHeroes(arr) {
    for (let i = 0; i < 4; i++) {
      newAnchor = document.createElement("a");
      randomNum = Math.floor(Math.random() * arr.length);
      this.newAnchor.className = "main__div--a";
      this.listNamesDash.appendChild(newAnchor);
      this.newAnchor.href =
        "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/detail/detail.html?index=" +
        this.randomNum;
      this.newAnchor.innerText = `${arr[randomNum].name}`;
    }
  }

  goToDashboard() {
    window.location.href =
      "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
  }

  goToList() {
    window.location.href =
      "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
  }
  heroeList = this.fetchInfo(this.url);
  // fetchInfo(url);
}

let dashboardInstance = new Dashboard();
dashboardInstance.heroeList();
