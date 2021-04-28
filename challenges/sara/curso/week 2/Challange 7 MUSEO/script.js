let form = document.getElementById('img__form');
let mainContainer = document.querySelector('.main__container');
let deleteButtons = document.querySelectorAll('.delete');

let myArt = [];


function createObj (name, description, imgUrl) {
    let index =  myArt.length;
    let newArt = {
        artName: name,
        description: description,
        imgUrl: imgUrl,
        index: index
    };
    myArt.push(newArt);
} ;

function createNewContainer(index){

    let newDivDetailedImg = document.createElement('div');
    newDivDetailedImg.className = 'img__detailed';
    mainContainer.appendChild(newDivDetailedImg);

    let newDivImgName = document.createElement('div');
    newDivImgName.className = 'img__name';
    newDivDetailedImg.appendChild(newDivImgName);
    let newH2 = document.createElement('h2');
    newDivImgName.appendChild(newH2);
    newH2.innerText = myArt[index]['artName'];

    let newDivImgDescription = document.createElement('div');
    newDivImgDescription.className = 'img__description';
    newDivDetailedImg.appendChild(newDivImgDescription);
    let newP = document.createElement('p');
    newDivImgDescription.appendChild(newP);
    newP.innerText = myArt[index]['description'];

    let newDivImgImg = document.createElement('div');
    newDivImgImg.className = 'img__img';
    newDivDetailedImg.appendChild(newDivImgImg);

    let newImgImg = document.createElement('img');
    newImgImg.className = 'img';
    newDivImgImg.appendChild(newImgImg);
    newImgImg.setAttribute('src',  myArt[index]['imgUrl'] );

    let newDivButtons = document.createElement('div');
    newDivButtons.className = 'buttons';
    newDivDetailedImg.appendChild(newDivButtons);

    let newModifyButton = document.createElement('button');
    newModifyButton.className = 'modify';
    newModifyButton.id = index;
    newDivButtons.appendChild(newModifyButton);
    newModifyButton.innerText = 'Modificar';
    newModifyButton.onclick = modify;

    let newDeleteButton = document.createElement('button');
    newDeleteButton.className = 'delete';
    newDeleteButton.id = index;
    newDivButtons.appendChild(newDeleteButton);
    newDeleteButton.innerText = 'Delete';
    newDeleteButton.onclick = delet;

} ;

function printEveryThing() {
    for(let i = 0; i < myArt.length; i++){
        createNewContainer(i)
    };
} ;

function delet(){ 
    console.log(event);
    let idToDelete = event.target.id;
    myArt.splice(idToDelete, 1);
    mainContainer.innerHTML = '';
    printEveryThing();   
} ;

function keepModifying(){
    return modify();
} ;

function modify() {
    let idToModify = event.target.id;
    let whatYouWant = prompt('Que queres modificar? nombre/descripcion/url/nada');
    whatYouWant = whatYouWant.toLowerCase();
    switch(whatYouWant){
        case 'name':
            myArt[idToModify]['artName'] = prompt('Nuevo nombre:');
            keepModifying();
        break;
        case 'descripcion':
            myArt[idToModify]['description'] = prompt('Nueva descripcion:');
            keepModifying();
        break;
        case 'url':
            myArt[idToModify]['imgUrl'] = prompt('Nueva URL:');
            keepModifying();
        break; 
        default:
            mainContainer.innerHTML = '';
            printEveryThing(); 
        break;
    };
} ;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = event.target.name.value;
    let description = event.target.description.value;
    let imgUrl = event.target.img_url.value;
    createObj (name, description, imgUrl);
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('img_url').value = '';
    mainContainer.innerHTML = '';
    printEveryThing();
}) ;


