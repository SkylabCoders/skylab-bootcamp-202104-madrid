let times = 0;

const sayHi = setInterval(()=> {
    if(times === 5){
        clearInterval(sayHi)
        console.log('DONE')
        times = 0;
    } else {
        times++
        console.log('Hello World')
    }
}, 1000)

sayHi;