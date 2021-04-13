// screen va a representar los números utilizados en el momento y los resultados al pulsar igual, esta en la parte baja de la pantalla en el centro.
let screen = document.getElementById('current-num');
// screenTotal va a ir mostrando los resultados parciales en caso de utilizar más de un operador antes de presionar igual, estará en la parte superior derecha
let screenTotal = document.getElementById('total-val');

const numButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const result = document.getElementById('equal');
const delet = document.getElementById('delete');
const reset = document.getElementById('reset');

let numNow;
let oppNow = '';
let numToOperateWith;
let currTotal = 0;
let equalClick = false;

numButtons.forEach(element => {
  element.addEventListener('click', ()=>{
    if(equalClick === true) {
      screen.innerText = element.innerText;
      equalClick = false;
    } else {
      if(screen.innerText === '0') {
        screen.innerText = element.innerText;
      } else {
        screen.innerText = screen.innerText + element.innerText;
      }; 
    };
  });
});

operators.forEach(elt => {
  elt.addEventListener('click', ()=> {
    if(oppNow === '') {
      numNow = parseFloat(screen.innerText);
      oppNow = elt.innerText;
      screen.innerText = '';
    } else {
      total();
      oppNow = elt.innerText;
    };
  });
});

reset.addEventListener('click', () => {
  screen.innerText = 0;
  numNow = '';
  oppNow = '';
  numToOperateWith = '';
  currTotal = 0;
  screenTotal.innerText = '';
});

delet.addEventListener('click', () => {
  screen.innerText = 0;
});

function total (){
  numToOperateWith = parseFloat(screen.innerText);
  if(oppNow === '+'){
    numNow = numNow + numToOperateWith;
    screenTotal.innerText = numNow;
    screen.innerText = '';
  } else if(oppNow === '-'){
    numNow = numNow - numToOperateWith;
    screenTotal.innerText = numNow;
    screen.innerText = '';
  } else if(oppNow === 'X'){
    numNow = numNow * numToOperateWith;
    screenTotal.innerText = numNow;
    screen.innerText = '';
  } else if(oppNow === '/'){
    numNow = numNow / numToOperateWith;
    screenTotal.innerText = numNow;
    screen.innerText = '';
  };
}

result.addEventListener('click', ()=>{
  equalClick = true;
  numToOperateWith = parseFloat(screen.innerText);
  if(oppNow === '+'){
    numNow = numNow + numToOperateWith;
    screenTotal.innerText = '';
    screen.innerText = numNow;
    oppNow = '';
  } else if(oppNow === '-'){
    numNow = numNow - numToOperateWith;
    screenTotal.innerText = '';
    screen.innerText = numNow;
    oppNow = '';
  } else if(oppNow === 'X'){
    numNow = numNow * numToOperateWith;
    screenTotal.innerText = '';
    screen.innerText = numNow;
    oppNow = '';
  } else if(oppNow === '/'){
    numNow = numNow / numToOperateWith;
    screenTotal.innerText = '';
    screen.innerText = numNow;
    oppNow = '';
  };
});