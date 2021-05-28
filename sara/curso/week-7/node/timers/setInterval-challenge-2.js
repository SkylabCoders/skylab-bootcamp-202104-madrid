function sayHi(num) {
    setTimeout(()=>{
    num++
    console.log('Hello Wold ' + num)
    sayHi(num)
    }, 1000 * num )
};

// sayHi(0)

let times = 0;
function sayHiHi (num){
    const sayHiAgain = setInterval(()=> {
        console.log('Hello Wold ' + num)
        times++
        if(times === 5){
            clearInterval(sayHiAgain)
            times = 0;
            sayHiHi(num + 100);
        } 
    }, num);
}
// sayHiHi(100);

let lastIntervalId,
    counter = 5;
const greeting = (delay) => {
    if (counter === 5) {
        clearInterval(lastIntervalId);
        lastIntervalId = setInterval(() => {
            console.log('Hello World. ' + delay);
            greeting(delay + 100);
        }, delay);
        counter = 0;
    }
    counter += 1;
};
//greeting(100);