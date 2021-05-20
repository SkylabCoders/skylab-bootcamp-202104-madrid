

const retrieveDataUsingPromise = async ()=> {
    return new Promise(function (myResolve, myReject) {
      let req = new XMLHttpRequest();
      req.open("GET", "https://swapi.dev/api/people/");
      req.onload = function () {
        if (req.status === 200) {
          myResolve(req.response);
        } else {
          myReject("File not found");
        }
      };
      req.send();
    });
  }
  module.exports = {retrieveDataUsingPromise}

