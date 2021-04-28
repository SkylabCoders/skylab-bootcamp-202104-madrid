
function dashboard(){
    window.location.href = "file:///C:/Users/34612/skylab-bootcamp-202104-madrid/challenges/Adan/proyectos/tourOfHeroes/dashboard.html"
  }
  
  function heroes(){
      window.location.href = "file:///C:/Users/34612/skylab-bootcamp-202104-madrid/challenges/Adan/proyectos/tourOfHeroes/heroes.html"
    }
    let HEROES = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
      ]
      let nameContainer = document.querySelector('.main__container')
let idContainer =  document.querySelector('.second__container')
      const params = new URLSearchParams(window.location.search);
      let idHero = params.get('id');
      let indexHero = params.get('index');  
function loadPage() {
  let heroName = document.createElement('h1');
  let heroId = document.createElement('h3');
  nameContainer.appendChild(heroName);
  idContainer.appendChild(heroId);
  heroName.innerText = HEROES[indexHero]['name']
  heroId.innerText = idHero;
}
loadPage();