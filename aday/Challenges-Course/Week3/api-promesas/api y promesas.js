// using callbacks to get http request info
function getInfoFromServer(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://swapi.dev/api/people/");
    req.onload = function() {
        if (req.status === 200) {
            myCallback(req.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
};

let infoServer;

    //this is the callback
    function paintResult(result){
        infoServer = result;
    }

    console.log(infoServer);

    let info = getInfoFromServer(paintResult);

    console.log(info);

// using promises in order to retrieve the same info
function retrieveDataUsingPromise() {
    return new Promise(function(myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://swapi.dev/api/people/");
        req.onload = function() {
            if(req.status === 200) {
                myResolve(req.response);
            } else {
                myReject('File not Found');
            }
        };
        req.send();
    });
}

function retrieveDataNow(){
    retrieveDataUsingPromise().then(
        (val)=>{console.log(val)},
        (err)=>{console.log(err)}
    )
}

retrieveDataNow(retrieveDataUsingPromise);


// misma promesa, pero llamando a starships

function retrieveDataUsingPromiseNew() {
    return new Promise(function(myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://swapi.dev/api/starships/");
        req.onload = function() {
            if(req.status === 200) {
                myResolve(req.response);
            } else {
                myReject('File not Found');
            }
        };
        req.send();
    });
}

function retrieveDataNowNew(){
    retrieveDataUsingPromiseNew().then(
        (val)=>{console.log(val)},
        (err)=>{console.log(err)}
    )
}

retrieveDataNowNew(retrieveDataUsingPromiseNew);

// using promises in order to retrieve the same info ASYNC
const retrieveDataUsingPromise = async () => {
    return new Promise(function(myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://swapi.dev/api/people/");
        req.onload = function() {
            if(req.status === 200) {
                myResolve(req.response);
            } else {
                myReject('File not Found');
            }
        };
        req.send();
    });
}

///// funcion de pedir usuario con un objeto

const heroe = {name: 'Batman', city: 'Gotham'};

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(heroe); // No llamar a una función, solo pasar el objeto (data)
        }, 5000);
    });
    prom.then(data=>{console.log(data)})
}
getUser().then(data=>{
    console.log(data);
})

///// promesa para pintar en el DOM crear una función para pintar los datos y en el resolve de la promesa invocar esa función

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
        let link = document.createElement('a');
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

requestInfo().then(data=>printList(list));