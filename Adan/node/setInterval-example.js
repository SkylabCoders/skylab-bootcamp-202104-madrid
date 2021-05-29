

let hello = setInterval(() => {
  console.log('Hello World')
  let counter =+ 1;
   if(counter === 5){
    clearInterval(hello)
   } 
}, 1000)
