function saluda() {
    setTimeout(()=> {
        console.log('Hello 4s')
    }, 4000)
    setTimeout(()=> {
        console.log('Hello 8s')
    }, 8000)
}

saluda()

const oneFunc = (delay) => {
    console.log('Hello after ' + delay + ' seconds');
}

setTimeout(oneFunc, 4 * 1000, 4)
setTimeout(oneFunc, 8 * 1000, 8)

