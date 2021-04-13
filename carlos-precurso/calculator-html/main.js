const pantalla = document.getElementById('pantalla');
const numeros = document.querySelectorAll('.number');
const operaciones = document.querySelectorAll('.operator');

const equal = document.getElementById('equal');
const borrar = document.getElementById('d');
const allClear = document.getElementById('ac');

let userInput1;
let userInput2; 
let operadorActual = '';
let lastOperator = false;


numeros.forEach(num => {
    num.addEventListener('click', () => {
        if (lastOperator === true){
            pantalla.innerText = num.innerText;
            lastOperator = false;
        } else {
            if(pantalla.innerText === "0" && lastOperator === false) {
                pantalla.innerText = num.innerText;
            } else {
                pantalla.innerText = pantalla.innerText + num.innerText
            };
        };    
    });
});

function operar() {
    switch (operadorActual){
        case '+':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 + userInput2;
            pantalla.innerText = '';
        break;
        case '-':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 - userInput2;
            pantalla.innerText = '';
        break;   
        case 'x':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 * userInput2;
            pantalla.innerText = '';
        break;  
        case '/':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 / userInput2;
            pantalla.innerText = '';
        break;     
    };
};

operaciones.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operadorActual === '') {
            operadorActual = operator.innerText;
            userInput1 = parseFloat(pantalla.innerText);
            pantalla.innerText = '';
        } else {
            operar();
            operadorActual = operator.innerText;
        }; 
    });
});

equal.addEventListener('click', () => {
    lastOperator = true;
    switch (operadorActual){
        case '+':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 + userInput2;
            operadorActual = "";
            pantalla.innerText = userInput1;
        break;
        case '-':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 - userInput2;
            operadorActual = "";
            pantalla.innerText = userInput1;
        break;   
        case 'x':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 * userInput2;
            operadorActual = "";
            pantalla.innerText = userInput1;
        break;  
        case '/':
            userInput2 = parseFloat(pantalla.innerText);
            userInput1 = userInput1 / userInput2;
            operadorActual = "";
            pantalla.innerText = userInput1;
        break;     
    };
});

borrar.addEventListener('click', () => {
    pantalla.innerText = '0';
});

allClear.addEventListener('click', () => {
    pantalla.innerText = '0';
    userInput1;
    userInput2;
    operadorActual = '';
});


