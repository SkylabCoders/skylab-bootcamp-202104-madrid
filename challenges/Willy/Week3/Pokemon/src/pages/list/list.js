(function listPage() {
    getPokes(10,0).then(pokeResponse => {
        console.log(pokeResponse)

       // const [countSpan] = document.getElementsByClassName('total-pokes')
        //countSpan.textContent = pokeResponse.count;
        
        const pokeList = document.getElementById('poke-list')   
        pokeResponse.results.forEach(poke => {
            const element = document.createElement('a')
            element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
            element.innerText = poke.name
            document.body.appendChild(element);
        })
        
      


       
    });
}());

