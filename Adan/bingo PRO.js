function bingo() {
    let carton = [{"B": null, "I": null, "N": null, "G": null, "O": null},
    {"B": null, "I": null, "N": null, "G": null, "O": null},
    {"B": null, "I": null, "N": null, "G": null, "O": null}]
        function randomNum(arr) {
            let newNumber;
            while (!newNumber || arr.includes(newNumber)) {
                newNumber = Math.floor((Math.random() * 15) + 1);
            }
            return newNumber;
        }
        function saveNumbers() {
            const numberArr = [];
            while (numberArr.length !== 15) {
                const n = randomNum(numberArr);
                numberArr.push(n);
            }
            return numberArr;
        }
    function fullfilCarton(){
        for (let i = 0; i < carton.length; i++) {
            for (let j in carton[i]) {
                if(carton[i][j] === null) {
                    carton[i][j] = numerosCarton.pop()
                }
             } 
        }
    }
    function unFullfilCarton(){
        for (let i = 0; i < carton.length; i++) {
            for (let j in carton[i]) {
                if(typeof carton[i][j] === "number") {
                    carton[i][j] = null
                }
             } 
        }
    }
    function checkValue(value) {
        console.log(value)
        for (let i = 0; i < carton.length; i++) {
            for (let j in carton[i]) {
                if(carton[i][j] === value) {
                    carton[i][j] = "X"
                }
             } 
        }
    } 
    let nickName = []
    let greetings = () => {
      let greet = prompt("Hola, por favor escribe un nickname.");
        nickName.push(greet)
    } 
    
        function linea1Completed() {
          return Object.values(carton[0]).every(elem => elem === "X") 
        }
        function linea2Completed() {
          return Object.values(carton[1]).every(elem => elem === "X") 
        }
        function linea3Completed() {
          return Object.values(carton[2]).every(elem => elem === "X") 
        }
        function gameCompleted() {
           if (linea1Completed() === true && linea2Completed() === true && linea3Completed() === true) {
        return true;
        } else {return false;}
            }
            function lineaCompleted() {
                if (linea1Completed() === false && linea2Completed() === false && linea3Completed() === false) {
                  return false;
            } else { return true;}
        }
    function showCarton() {
      console.table(carton)
    }
    function reset () {
        let newCarton = prompt("Quiere generar otro carton aleatorio?", "yes/no")
        if (newCarton === "yes") {
      unFullfilCarton();
    numerosCarton = []
    numerosCarton = saveNumbers();
    fullfilCarton();
    showCarton()}
        else { return null;}
    }
    let numerosBombo = saveNumbers()
 let numerosCarton = saveNumbers()
    greetings();
  fullfilCarton();
showCarton();
do {
reset()
} while(reset() !== null)
showCarton();
do { 
    let ask = confirm("Desea continuar?.")
    if (ask === true) {
        checkValue(numerosBombo.pop())
        showCarton()
       } else {
           return "Ciaoo"   
    } 
   } while (lineaCompleted() === false)
   if (lineaCompleted() === true) {
       console.log("LINEA")}
       do { 
        let ask2 = confirm("Desea continuar?.")
        if (ask2 === true) {
            checkValue(numerosBombo.pop())
            showCarton()
           } else {
               return "Ciaoo"
               
        } 
       } while (gameCompleted() === false)

if (gameCompleted() === true) {
    return "Game over"
}
}

