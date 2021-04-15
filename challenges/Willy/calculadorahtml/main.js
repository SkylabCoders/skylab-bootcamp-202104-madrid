const botonNum = document.querySelectorAll('.number');
let screen = document.getElementById('numeros');
let plus = document.getElementsByClassName('operator')[0]
let resultadoScreen = document.getElementById('resultadoScreen');

botonNum.addEventListener('click', function (){
    for (let i = 0; i < botonNum.length; i++){

       botonNum = resultadoScreen[i].innerText;
    }
});

/*
  function quitarCero () {
    var a = document.getElementById("resultado").innerHTML;
    if (a == "0") {
         a = " "
         document.getElementById("resultado").innerHTML = a;
    }
}

  function quitarGuion() {
      var a = document.getElementById("display-number");
      if (a == "_"){
          a = " "
          document.getElementById("display-number").innerHTML = a;
      }
  }  
*/


function suma (){
    let sum = 1 + 3;
    /*for (let i = 0; i < numButtons.length; i++) {
        sum += numButtons[i]
    };*/
    
}

function reinicio(){
    
    resultado.innerText = 0;
}

function botonIgual() {
    resultado.innerText = sum
}