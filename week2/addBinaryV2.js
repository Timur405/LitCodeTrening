const addBinary = function(a, b) {
    let res = "";
    let counter = 0;
    let pointer1 = a.length;
    let pointer2 = b.length;
    while (pointer1 < pointer2) {
        a = "0" + a;
        pointer1 = a.length;
    }
    while (pointer2 < pointer1) {
        b = "0" + b;
        pointer2 = b.length;
    }
    pointer1 = a.length-1;
    while(pointer1 >= -1){
        if(a[pointer1] !== undefined){
            counter = Number(a[pointer1])+Number(b[pointer1])+counter;
        }
        else{
            if(counter === 0){
                return res;
            }
        }
        res = String(counter%2)+res;
        counter = Math.floor(counter / 2);
        pointer1--;
    }
    return res;
};

console.log(addBinary("0","0"))