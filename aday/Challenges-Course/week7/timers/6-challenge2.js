// function challenge2(interval1, interval2){
//    setInterval( () => console.log('Hello world'), interval1)

//    setTimeout( (interval2) => {
//        console.log('Print done')
//    }, interval2)
// }


// const challenge = (interval1, interval2) => {
//      setInterval( () => console.log('Hello world'), interval1)

//      setInterval( () => console.log('Print done'), interval2)

//  }


// challenge(1000,5000)

let counter = 0;

const challenge = setInterval( () => {
    console.log('Hello World');
    counter += 1;

    if(counter === 5) {
        console.log('Done')
        clearInterval(challenge)
    }
}, 1000)

