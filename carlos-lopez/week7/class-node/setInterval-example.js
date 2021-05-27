// const timerId = setInterval(()=> console.log('Hello'),0);

// clearInterval(timerId)
let contador = 0;
    const hi = setInterval(() => {
       if(contador === 5){
           clearInterval(hi)
           console.log('done');
           contador = 0;
       }else{
        console.log('Hello World')
        contador++
       }
    }, 1000);

    
