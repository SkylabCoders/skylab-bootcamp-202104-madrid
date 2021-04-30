(function listPage() {
    getPokes(20,0).then(pokeResponse => {
        console.log(pokeResponse)

       // const [countSpan] = document.getElementsByClassName('total-pokes')
        //countSpan.textContent = pokeResponse.count;
        
        const pokeList = document.getElementById('poke__list')   
        pokeResponse.results.forEach(poke => {
            const element = document.createElement('a')
            element.classList.add('poke__list--pokemon') 
            element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
            element.innerText = poke.name
            pokeList.appendChild(element);
        })
        
      


       
    });
}());

