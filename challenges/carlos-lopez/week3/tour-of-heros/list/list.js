// let list = document.getElementById("list");
// let dashboard = document.getElementById("dashboard");
// let names = document.querySelector(".names");

//Functions

function createAnchor() {
  let newAnchor = document.createElement('a');
}


function goToDashboard(){
  window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
}
function goToList(){
  window.location.href = "http://127.0.0.1:5500/list/list.html";
}
// dashboard.addEventListener("click", () => {
//   window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
// });
// list.addEventListener("click", () => {
//   window.location.href = "http://127.0.0.1:5500/list/list.html";
// });

module.exports = {createAnchor:createAnchor}