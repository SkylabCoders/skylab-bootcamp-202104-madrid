const buttonContainer = document.querySelector('.footer__container');
const buttonPrev = document.createElement('button');
const buttonNext = document.createElement('button');
buttonContainer.appendChild(buttonPrev)
buttonContainer.appendChild(buttonNext)
let nextUrl;
let prevUrl;

const pkmUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
listPage(pkmUrl)
function listPage(url) {
    
    getPokes(url).then(pokeResponse => {
        console.log(pokeResponse)
        nextUrl = pokeResponse.next;
        prevUrl = pokeResponse.previous
        
        const pokeList = document.querySelector('.main__poke__list')   
        pokeList.innerHTML = "";
        pokeResponse.results.forEach(poke => {
            const element = document.createElement('a')
            element.classList.add('poke__list--pokemon') 
            element.href = `http://127.0.0.1:5500/src/pages/detail/detail.html?name=${poke.name}` 
            element.innerText = poke.name
            pokeList.appendChild(element);
        })
       
       
        
        
      
           
    });
};

buttonNext.addEventListener('click', (e) => {
    e.preventDefault()
    return listPage(nextUrl)
    });
 if  (nextUrl !== null){ 
  buttonNext.innerHTML = '⏭️'
} else {
   button.innerHTML = ""
  }

buttonPrev.addEventListener('click', (e) => {
    e.preventDefault()
    return listPage(prevUrl)
    });
   if (prevUrl !== null){
    buttonPrev.innerText ='⏮️'
   } else {
      buttonPrev.innerHTML = ""
    }
    