/**
 * Pinta Hello word siempre. Empezando con un delay de 1 seg
 * Solo setTimeOut
 */

const hi = (number) => {
    setTimeout(
        ()=> {
            console.log('Hello world - ' + number)
            hi(number + 1)
        },
    number * 1000
    )
}

hi(1)

