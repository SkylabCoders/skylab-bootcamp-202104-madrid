
function check (a, b) {
    switch(a) {
        case b :
            return true
        break;
        default:
            return false
        break;
    };
};






function checkWithObj (a,b) {
    let isANaN = false;
    let isBNaN = false;
    let isAZero = false;
    let isBZero = false;

    if(isNaN(a)){
        isANaN = true;
    };

    if(isNaN(b)){
        isBNaN = true;
    };

    switch(a){
        case 0:
            isAZero = true;
            break;
        case -0:
            isAZero = true;
        break;
    };

    switch(b){
        case 0:
            isBZero = true;
            break;
        case -0:
            isBZero = true;
        break;
    };

    
    if(isANaN && isBNaN) {
        console.log('false');
    } else if( isAZero && isBZero) {
        console.log('true');
    } else {
        let comparative = Object.is(a,b);
        console.log(comparative);
    };
    
} ;








let singer = {surname: 'Turner'};
let pilot = {surname: 'Kamal'};

[singer.surname, pilot.surname]=[pilot.surname, singer.surname]