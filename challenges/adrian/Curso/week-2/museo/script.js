let info = document.getElementById('main__form')
console.log(info)

let i = 0;
let listPost = [];
let newPost = [{tittle: null, description: null, img: null}];
let dates = [];
let newListPost = [];
let divPost = document.getElementsByClassName('main__section--content');
/*
function printPost(){
    
    let newDiv = document.createElement("div");
    let newContent1 = createTextNode('Titulo: ' + dates[0]);
    let newContent2 = createTextNode('Titulo: ' + dates[1]);
    let newContent3 = createTextNode('Titulo: ' + dates[2]);
    divPost.appendChild(newContent1);
    divPost.appendChild(newContent2);
    divPost.appendChild(newContent3);
}*/

function printPost(){

    let divPost = document.createElement('div');
    divPost.classList.add('main__div--post');

    let divTittle = document.createElement('div');
    let tittle = document.createTextNode(dates[0]);
    divTittle.appendChild(tittle);
    divPost.appendChild(divTittle);
    

    let divDescription = document.createElement('div');
    let description = document.createTextNode(dates[1]);
    divDescription.appendChild(description);
    divPost.appendChild(divDescription);

    let divImg = document.createElement('div');
    let img = document.createTextNode(dates[2]);
    divImg.appendChild(img);
    divPost.appendChild(divImg);

    let divButton = document.createElement('div')
    let modifyButton = document.createElement('button');
    modifyButton.classList.add('divButton__button--modify')
    modifyButton.innerText = 'MODIFY';
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('divButton__button--delete');
    deleteButton.innerText = 'DELETE';
    divButton.appendChild(modifyButton);
    divButton.appendChild(deleteButton);
    divPost.appendChild(divButton);

    document.body.appendChild(divPost);
}

info.addEventListener('submit', function(event){
    console.log(info)
    event.preventDefault();
    i++;
    dates[0] = event.target.tittle.value;
    dates[1] = event.target.description.value;
    dates[2] = event.target.img.value;
    console.log(dates);
    newPost[i] = {tittle: dates[0], description: dates[1], img: dates[2]};
    console.log(newPost[i]);
    newListPost.push(newPost[0]); 
    console.log(newListPost);
    console.table(newPost[i]);
    printPost();
})
   



