/*
for (let i = 1; i <=500; i++) {
    if(i%4 === 0 && i%5 === 0){
        document.write(i + ' (es múltiplo de 4)<br>--------------------------<br>')
    }else if(i%9 === 0 && i%5 === 0){
        document.write(i + ' (es múltiplo de 9)<br>--------------------------<br>')}
    else if(i%9 === 0){
        document.write(i + ' (es múltiplo de 9) <br>')
    }else if(i%5 === 0){
        document.write(i + '<br>--------------------------<br>')
    }else if(i%4 === 0){
            document.write(i + ' (es múltiplo de 4) <br>')
    }else{document.write(i + '<br>')}
}
*/
  //IMPRIMOS UNA LÍNEA HORIZONTAL   
document.write("<hr>");
//DECLARAMOS LAS VARIABLES
var i;
var j = 500;
var rep = 0;
//BUCLE DESDE 1 HASTA j
for (i = 1; i <= j; i++) {
    //IMPRIMIMOS EL NÚMERO i
    document.write(i);
    //SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    //SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
    //SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}

    
    