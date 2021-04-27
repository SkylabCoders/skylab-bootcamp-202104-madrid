let namesDash1 = document.querySelector('.main--div-1');
let namesDash2 = document.querySelector('.main--div-2');
let namesDash3 = document.querySelector('.main--div-3');
let namesDash4 = document.querySelector('.main--div-4');
let num1;
let num2;
let num3; 
let num4;
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


function printRandomNumbers(){
  num1 = Math.floor(Math.random() * 1);
  num2 = Math.floor(Math.random() * 10);
  num3 = Math.floor(Math.random() * 10);
  num4 = Math.floor(Math.random() * 10);
};
function renderNames(num1, num2, num3, num4){
  namesDash1.innerText = heroes[num1].name;
  namesDash2.innerText = heroes[num2].name;
  namesDash3.innerText = heroes[num3].name;
  namesDash4.innerText = heroes[num4].name;
}
function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}

printRandomNumbers();
renderNames(num1, num2, num3, num4);
