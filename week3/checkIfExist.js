const checkIfExist = function(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else{
            map.set(arr[i],1);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            if (map.get(arr[i]) > 1){
                return true;
            }
        }
        else if (map.has(arr[i]/2)) {
            return true;
        }
    }
    return false;
};
console.log(checkIfExist([0,-2,2]));