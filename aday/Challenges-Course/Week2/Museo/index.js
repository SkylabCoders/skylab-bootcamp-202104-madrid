let museo = [];

function crear(event) {

    event.preventDefault();

    let userData = {
        titulo: undefined,
        descripcion: undefined,
        imagen: undefined
    };

    let userForm = document.getElementsByClassName('form');

    userData.titulo = userForm[0].value;
    userData.descripcion = userForm[1].value;
    userData.imagen = userForm[2].value;

    museo.push(userData);  

    leer();
};

function leer() {

    let mainContainer = document.getElementById('maincontent');
    maincontent.innerHTML = ""

    for(let i = 0; i < museo.length; i++) {

        museo[i].id = i;

        let newP = document.createElement('h1');
        newP.innerText = "Título: " + museo[i].titulo;
        mainContainer.appendChild(newP);

        let newP2 = document.createElement('h2');
        newP2.innerText = "Descripción: " + museo[i].descripcion;
        mainContainer.appendChild(newP2);

        let newP3 = document.createElement('img');
        newP3.src = museo[i].imagen;
        newP3.classList.add('imagen');
        mainContainer.appendChild(newP3);

        let newButton = document.createElement('button');
        newButton.innerText = "ELIMINAR";
        newButton.classList.add('eliminar');
        newButton.addEventListener('click', eliminar);
        mainContainer.appendChild(newButton);

        let newButton1 = document.createElement('button');
        newButton1.innerText = "MODIFICAR";
        newButton1.classList.add('modificar');
        newButton1.addEventListener('click', modificar);
        mainContainer.appendChild(newButton1);

        let newButton2 = document.createElement('button');
        newButton2.innerText = "OCULTAR IMAGEN";
        newButton2.classList.add('ocultar');
        newButton2.addEventListener('click', ocultarImagen);
        mainContainer.appendChild(newButton2);

    };

};

function eliminar(){};

function modificar(){};

function ocultarImagen() {



};





/*NOOOOOOO

function ocultar() {
    let botonOcultar = document.querySelector('.ocultar');
    botonOcultar.addEventListener('click', ocultarImagen());
}

function ocultarImagen() {
    let noImage = document.getElementsByTagName('h1');
    noImage.classList.add('nuevoColor');
    noImage.style.color = "hotpink";
};

NOOOOOOOOOOO*/




// 1) crear boton

// let BOTON = document.createElement("button");
// BOTON.onclick=fn();


//     2) recoger la variable por ID y crear un addEvent Listener:


// let BOTON = document.getElementById("ID")
// document.addEventListener('click', function())

// ----------------------------

// Añadir id al buton
// event.target.id
// const x = parseInt(event.target.id) para pasarlo a numero ya que viene en string para curarnos en salud
// .splice(index, 1) para ELIMINAR y .arr[index].propiedad = "Hola"