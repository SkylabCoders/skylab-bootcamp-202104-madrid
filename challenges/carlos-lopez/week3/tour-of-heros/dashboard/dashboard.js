let namesDash1 = document.querySelector('.main--div-1');
let namesDash2 = document.querySelector('.main--div-2')
let namesDash3 = document.querySelector('.main--div-3')
let namesDash4 = document.querySelector('.main--div-4')


function printRandomNames(){
  let num1 = Math.floor(Math.random() * 11);
  let num2 = Math.floor(Math.random() * 11);
  let num3 = Math.floor(Math.random() * 11);
  let num4 = Math.floor(Math.random() * 11);

  namesDash1.innerText = heroes[num1].name;
  namesDash2.innerText = heroes[num2].name;
  namesDash3.innerText = heroes[num3].name;
  namesDash4.innerText = heroes[num4].name;

};

function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}

printRandomNames();
