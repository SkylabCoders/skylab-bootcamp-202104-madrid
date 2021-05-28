const rock = (skylab, city) => {
    console.log(skylab + ' Rocks ' + city)
};
setTimeout(rock, 2*1000, 'Skylab', 'Madrid')


//Solo con una funcion que tarde 4 seg en aparecer y otro que tarde 8 seg

function sayHi(){
    const hola1 = ()=>{
        console.log('hola en 2 seg')
    }
    const hola2 = ()=>{
        console.log('hola en 4 seg')
    }
    setTimeout(hola1, 2*1000)
    setTimeout(hola2, 4*1000)
}
sayHi();

//Otra forma

const oneFunc = (delay) => {
    console.log('hello after ' + delay + ' seconds');
};

setTimeout(oneFunc, 2*1000, 2)
setTimeout(oneFunc, 4*1000, 4)
