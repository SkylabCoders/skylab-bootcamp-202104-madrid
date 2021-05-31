
const oneFunc = (delay) => {
    console.log('hello after ' + delay + ' seconds');
};

setTimeout(oneFunc, 4000, 4)
setTimeout(oneFunc, 8000, 8)

function printIn2times(){
    setTimeout(() => {
        console.log('Hello after 4 seconds')
    }, 4000)
    setTimeout(() => {
        console.log('Hello after 8 seconds')
    }, 8000)
}
printIn2times()

