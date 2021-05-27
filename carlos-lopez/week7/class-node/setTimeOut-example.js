//Un ejemplo
setTimeout(()=>{
    console.log('Hello after 4 seconds')
}, 4 * 1000)

//Otro ejemplo
const func = () => {
    console.log('Hello after 4...')
}
setTimeout(func, 4*1000)