// setInterval(() => console.log('Hello every 4 secs'), 4000)

// const timerId = setInterval(() => console.log('Hello'), 0);

// clearInterval(timerId)

/**
 * Print hello world
 * every second
 * and stop after 5 times, then print Done
 */

let times = 0
const interval = setInterval(() => {
    console.log('hola')
    times++;

    if (times ===5){
        console.log('done')
        clearInterval(interval)
    }
},1000)

  



