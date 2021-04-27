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