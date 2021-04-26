let listNames = document.querySelector(".div--listNames");

//Functions
function createAnchor() {
  for(let i = 0; i < heroes.length; i++){
    let newAnchor = document.createElement('a');
    listNames.appendChild(newAnchor);
    console.log(heroes[i].name)
    newAnchor.innerText = heroes[i].name;
  };
};

function goToDashboard(){
  window.location.href ="http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/skylab-bootcamp-202104-madrid/challenges/carlos-lopez/week3/tour-of-heros/list/list.html";

}
 
createAnchor();

