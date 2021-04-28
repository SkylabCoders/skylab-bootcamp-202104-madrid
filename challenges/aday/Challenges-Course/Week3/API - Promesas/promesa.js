const HEROES = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
    ]

function printList(list) {
    for(let i = 0; i < list.length; i++) {
        let link = document.createElement('p');
        link.innerText = 'ID: ' + list[i].id + ' Nombre: ' + list[i].name;
        document.getElementById('container').appendChild(link);
    };
};

function requestInfo() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(HEROES);
        }, 5000);
    });
};

requestInfo().then(data=>printList(data));