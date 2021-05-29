function challenge1(num){
    setTimeout(() => {
        num++
        console.log('Hello world ' + num)
        challenge1(num)
    }, num * 1000)
}
challenge1(0);

function challenge2(delay, num){
    const stop = setInterval(() => {
        switch(num){
            case 5:
                clearInterval(stop)
                num = 0;
                delay +=100
                challenge2(delay, num)
            break; 
        } 
        console.log('Hello World ' + delay)
        num++
    }, delay);
    
}
challenge2(100, 0);




