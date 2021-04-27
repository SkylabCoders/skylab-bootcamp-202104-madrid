let listado = [];

function add(event){
    event.preventDefault();
    let titulo = document.getElementById('title').value;
    let fechSalida = document.getElementById('releaseDate').value;
    let descripcion = document.getElementById('description').value;
    let cuadro = document.getElementById('cuadro').value;
           
    let repositorio = {titulo: titulo, fechaSalida: fechSalida, texto: descripcion, imagen: cuadro}

     listado.push(repositorio);
      
     imprimir()
    }



function imprimir() { 
    let encabezado = document.querySelector("#main__data");
    main__data.innerHTML = ""
    let imagen = document.querySelector('#main__picture');
    main__picture.innerHTML = ""
    


    for (let i = 0; i < listado.length; i++) {
    
        let newDiv = document.createElement('div')
        newDiv.innerText = "Título: " + listado[i].titulo;
        encabezado.appendChild(newDiv);
    
        let newDiv2 = document.createElement('div')
        newDiv2.innerText = "Fecha de salida: " + listado[i].fechaSalida;
        encabezado.appendChild(newDiv2);

        let newDiv3 = document.createElement('div')
        newDiv3.innerText = "Descripción: " + listado[i].texto;
        encabezado.appendChild(newDiv3);
    
        let newImg = document.createElement('img')
        newImg.src = listado[i].imagen;
        newImg.alt = "no puedo mostrar tu imagen"
        newImg.classList.add('pictures')
        imagen.appendChild(newImg);
   

        


    }
}






/*

function toggle(){
    let boton = document.querySelector('#main__buttons')
    main__buttons.innerHTML = ""

    let btn = document.getElementById("ocultar")
    let container = document.getElementById("prueba");
    container.classList.toggle("oculto")
    if(container.classList.contains("oculto")){
        btn.innerText = "MOSTRAR"
    }else{
        btn.innerText = "OCULTAR"
        
    }
}
/*

for (let i = 0; i < listado.length; i++) {
    let newDiv2 = document.createElement('div')

    newDiv2.innerText = listado[i].fechaSalida;
    
    encabezado.appendChild(newDiv2);
}
for (let i = 0; i < listado.length; i++) {
    let newDiv3 = document.createElement('div')

    newDiv3.innerText = listado[i].texto;
    encabezado.appendChild(newDiv3);

}
}
*/

    
   



 