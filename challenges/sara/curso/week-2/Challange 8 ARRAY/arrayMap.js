let myArr = [1, 2, 3, 4];


function comprobarLength(arr){
    let theLength = 0;
    for (let element of arr) {
        theLength++
    };
    return theLength;
} ;



function mapear(arr, callBack){
    let theLength = comprobarLength(arr);
    let myNewArr = [];
    for (let i = 0; i < theLength; i++) {
        let result = callBack(arr[i]);
        myNewArr[i]= result;
    };
    return myNewArr;
};

