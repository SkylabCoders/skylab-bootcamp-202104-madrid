const oneFunc = (delay) => {
    console.log(`Hello after ${delay} seconds`)
}

setTimeout(oneFunc, 4 * 1000, 8)

