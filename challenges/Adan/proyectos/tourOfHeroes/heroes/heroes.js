class Heroes {
  constructor(){};
dashboard(){
   window.location.href = 'http://127.0.0.1:5500/challenges/Adan/proyectos/tourOfHeroes/dashboard/dashboard.html'
  }
   
  //functions
  createTheList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.renderHero(arr[i],i);
    }
  }
  renderHero(hero,i){
  let mainContainerList = document.getElementById("main__container");
  let newAnchor = document.createElement("a");
  newAnchor.innerText = hero.id + " " + hero.name;
  newAnchor.href =
  "http://127.0.0.1:5500/hero-detail/detail.html?id=" +
  hero.id +
    "&index=" +i
    mainContainerList.appendChild(newAnchor);
  }
  
  //createTheList(HEROES);
}
module.exports= Heroes

 
 

 
 