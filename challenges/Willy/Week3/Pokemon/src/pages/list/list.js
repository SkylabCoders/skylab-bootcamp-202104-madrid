(function listPage() {
    getPokes(10,0).then(pokeResponse => {
        console.log(pokeResponse)

        const [countSpan] = document.getElementsByClassName('total-pokes')
        countSpan.textContent = pokeResponse.count;

       

        const pokeList = document.getElementById('poke-list')   
        pokeResponse.result.forEach(poke => {
            const element = document.createElement('li')
            element.innerText = poke.name
            document.body.appendChild(element);
        })
    });
}());

