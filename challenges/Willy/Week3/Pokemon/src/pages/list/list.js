

(function listPage() {
    const pkmUrl = "https://pokeapi.co/api/v2/pokemon"
    getPokes(pkmUrl).then(pokeResponse => {
        console.log(pokeResponse)
     
        const button = document.querySelector('.footer__container')
        const pokeList = document.querySelector('.main__poke__list')   
        pokeList.innerHTML = "";
        pokeResponse.results.forEach(poke => {
            const element = document.createElement('a')
            element.classList.add('poke__list--pokemon') 
            element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
            element.innerText = poke.name
            pokeList.appendChild(element);
        })
        
        button.innerHTML = (pokeResponse.previous) ? `<button onclick="getPokes('${pokeResponse.previous}')">⏮️</button>` : "";
        button.innerHTML = (pokeResponse.next) ? `<button onclick="getPokes('${pokeResponse.next}')">⏭️</button>` : "";
      
    });
   
        


    
}());


/*
let buttonContainer = document.querySelector('.footer__container')
        let nextButton = document.querySelector('.btn_next')
        let prevButton = document.querySelector('.btn_prev')
        nextButton.addEventListener('click', nextPage(`${pokeResponse.next}`));
        prevButton.addEventListener('click', prevPage(`${pokeResponse.previous}`));
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);
function nextPage (){
    if (pokeResponse.next !== null){
        updatePokemons(`https://pokeapi.co/api/v2/pokemon?next=${pokeResponse.next}`)
    } else {
        ""
    }
}

function updatePokemons(url) {debugger
    if (url) {
  
      //Reiniciamos pokemones actuales
      const pokeList = document.getElementById('poke__list')   
      pokeList.innerHTML = "";
      // Llamamos a la API de pokemon con Fetch
      fetch(url)
        .then(pokeResponse => pokeResponse.json())
        .then(pokeResponse => {
          // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
          for (let i of pokeResponse.results) {
  
            // Realizamos otra solicitud Fetch con la URL especifica del pokemon actual recorrido, para obtener datos mas especficos como la imagen
            fetch(i.url)
              .then(x => x.json())
              .then(x => {
                // Vamos pintando o ingresando la imagen y nombre del pokemon actual que se esta evaluando 
                pokeResponse.results.forEach(poke => {
                    const element = document.createElement('a')
                    element.classList.add('poke__list--pokemon') 
                    element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
                    element.innerText = poke.name
                    pokeList.appendChild(element);
                })
              });
          };

           

           
          // Pintamos los enlaces de siguiente o anterior de la paginacion de los pokemones 
          //Boton hacia atrás
          //links.innerHTML = (res.previous) ? `<button onclick="updatePokemons('${res.previous}')">Atrás</button>` : "";
          //Botón hacia adelante
          //links.innerHTML += (res.next) ? `<button onclick="updatePokemons('${res.next}')">Siguiente</button>` : "";
  
        });
    }
  
  }
<button class="btn_prev">⏮️</button>
        <button class="btn_next">⏭️</button>
*/