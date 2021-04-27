listaCoches = [
    {id: 1, Marca: 'volvo', Modelo: 's80', Cv: 200, Precio: 40000},
    {id: 2, Marca: 'mercedes', Modelo: 'c250',Cv: 250,Precio: 41000},
    {id: 3, Marca: 'seat', Modelo: 600, Cv: 20, Precio:290}]


listaComments = [
    {id:1, comentario: 'me gustan los coches yeeepaa!!'},
    {id:2, comentario: 'no me gustan los coches, son muy caros'}]


    function visitPage1() {
        console.log(window.location.href);
        let idCoche = prompt('que id de coche quieres consultar?');
       window.location.href="file:///Users/aday/Documents/aday/Challenges-Course/Week3/Coches/index2.html?idCar="+idCoche
    };

    function visitPage2() {
        console.log(window.location.href);
        let idComment = prompt('que id de coche quieres consultar?');
        window.location.href="file:///Users/aday/Documents/aday/Challenges-Course/Week3/Coches/index3.html?idComment="+idComment
     };

     const params = new URLSearchParams(window.location.search);
     const idCar = params.get('idCar');
     console.log(listaCoches);


    //  const detalles = document.getElementById('pag1');
    //  detalles.innerHTML = "";
    //  for(let i = 0; i < listaCoches.length; i++) {
    //      let coche = document.createElement('div');
    //      coche.innerHTML = "<a href=file:///Users/aday/Documents/aday/Challenges-Course/Week3/Coches/index2.html?idCar=+idCoche></a>"
    //      detalles.appendChild(coche);
    //  }