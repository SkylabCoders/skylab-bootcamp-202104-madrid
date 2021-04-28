let namesDash1 = document.querySelector('.main--div-1');
let namesDash2 = document.querySelector('.main--div-2');
let namesDash3 = document.querySelector('.main--div-3');
let namesDash4 = document.querySelector('.main--div-4');
let num1;
let num2;
let num3; 
let num4;
const url =
  "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/superHeroData.json";
function fetchInfo(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => printRandomNumbers(data));
}

function printRandomNumbers(arr){
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  num3 = Math.floor(Math.random() * 100);
  num4 = Math.floor(Math.random() * 100);
  renderNames(arr, num1, num2, num3, num4);
};
function renderNames(arr,num1, num2, num3, num4){
  namesDash1.innerText = arr[num1].name;
  namesDash2.innerText = arr[num2].name;
  namesDash3.innerText = arr[num3].name;
  namesDash4.innerText = arr[num4].name;
}
function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";
}
fetchInfo(url);


