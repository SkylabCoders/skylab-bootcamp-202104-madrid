

(function listPage() {
    getPokes(100,0).then(pokeResponse => {
        console.log(pokeResponse)
     
        
        const pokeList = document.getElementById('poke__list')   
        pokeResponse.results.forEach(poke => {
            const element = document.createElement('a')
            element.classList.add('poke__list--pokemon') 
            element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
            element.innerText = poke.name
            pokeList.appendChild(element);
        })

        let buttonContainer = document.querySelector('.footer__container')
        let nextButton = document.querySelector('.btn_next')
        let prevButton = document.querySelector('.btn_prev')
        nextButton.addEventListener('click', nextPage);
        prevButton.addEventListener('click', nextPage);
            

        buttonContainer.appendChild(prevPage);
        buttonContainer.appendChild(nextPage);
    });
    
    let prevPage = pokeResponse.previous ? `<a href=${pokeResponse.next}>⏮️</a>` : "";
    //let nextPageBtn = document.querySelector('.btn_next')
    //let prevPageBtn = document.querySelector('.btn_prev')
    
    let nextPage = pokeResponse.previous ? `<a href=${pokeResponse.next}>⏭️</a>` : "";
    function nextPage(){
        let nextButton = document.querySelector('.btn_next')
        pokeList.innerHTML = "";
        
        


    }
}());


