
// function printList(list) {
    
//     for(let i = 0; i < list.length; i++) {
//         let enlace = document.createElement('a');
//         enlace.href = "file:///Users/aday/Documents/aday/Challenges-Course/Week3/Tour%20of%20Heroes/Heroes/heroes.html?id="+list[i].id
//         enlace.innerText = 'ID: ' + list[i].id + ' Name: ' + list[i].name;
//         let container = document.getElementById('heroes');
//         container.appendChild(enlace);
//     }
// }


function printList(list) {
    for(let i = 0; list.length; i++) {
        printItem(item[i])
    }
}

function printItem(item) {
    let newAnchor = document.createElement('a');
    newAnchor.href = "file:///Users/aday/Documents/aday/Challenges-Course/Week3/Tour%20of%20Heroes/Heroes/heroes.html?id="+item.id;
    newAnchor.innerText = 'ID: ' + item.id + ' Name: ' + item.name;
    let mainContainer = document.getElementById('heroes');
    mainContainer.appendChild(newAnchor);
}

module.exports = {printList, printItem}