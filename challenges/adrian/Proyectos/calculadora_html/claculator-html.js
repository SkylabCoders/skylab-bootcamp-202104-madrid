
let screen = document.getElementsByClassName("screen")[0];
let ac = document.getElementById('reset');
let del = document.getElementById('delete');
let firstClick = false;

let elementsNumber = document.getElementsByClassName("number");
let elementsOperator = document.getElementsByClassName("operator");
let elementEqual = document.getElementsByClassName("equal");

let myFunctionNumber = function() {

    if (screen.innerHTML == 0 && firstClick == false) {
        let attribute = this.getAttribute("id")
        screen.innerHTML = attribute;
    } else {
        let attribute = this.getAttribute("id");
        screen.innerHTML += attribute;
    }
    firstClick = true;

};

let myFunctionOperator = function() {
    let attribute = this.getAttribute("id");
    screen.innerHTML += attribute;
    firstClick = true;

};

let myFunctionEqual = function() {
    let result = eval(screen.innerHTML);
    screen.innerHTML = result;
    firstClick = true;
};

for (let i = 0; i < elementsNumber.length; i++) {
    elementsNumber[i].addEventListener('click', myFunctionNumber);
}

for (let i = 0; i < elementsOperator.length; i++) {
    elementsOperator[i].addEventListener('click', myFunctionOperator);
}

elementEqual[0].addEventListener('click', myFunctionEqual);

ac.addEventListener("click", function(){
    screen.innerHTML = 0;
    firstClick = false;
})

del.addEventListener("click", function(){
    let value = screen.innerHTML;
    screen.innerHTML = value.substring(0, value.length - 1);
})



