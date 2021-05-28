
// function func1(num) {
//   setTimeout(() => {
//     num++
//         console.log('Hello world ' + num)
//      func(num)
//     }, 1000 * num)
// }
// func1(0)


function func2(num, counter) {
    const clear = ''
    if(counter === 5) {
        clearInterval(clear)
    } else {

       clear = setInterval(()=>{
        console.log('Hello world ' + num)
        counter++
        }, num)
        
    }
}

func2(100, 0)
