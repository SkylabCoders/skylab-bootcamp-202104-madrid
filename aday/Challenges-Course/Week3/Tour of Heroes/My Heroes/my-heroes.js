const paginaPrincipal = document.getElementById('top');
top.addEventListener('click', topHeroes);

 function printList(list) {
     for(let i = 0; i < list.length; i++) {
         let container = document.getElementById('heroes');
         let link = document.createElement('a');
         link.href = "file:///Users/aday/Documents/bootcamp/skylab-bootcamp-202104-madrid/challenges/aday/Challenges-Course/Week3/Tour%20of%20Heroes/Heroe%20Details/details.html"+list[i].id+"&name="+list[i].name
         link.innerText = 'ID: ' + list[i].id + ' Nombre: ' + list[i].name;
         container.appendChild(link);
     }
 };

 printList(HEROES);

function topHeroes() {
    window.location.href = "file:///Users/aday/Documents/bootcamp/skylab-bootcamp-202104-madrid/challenges/aday/Challenges-Course/Week3/Tour%20of%20Heroes/Top%20Heroes/top.html";
};

