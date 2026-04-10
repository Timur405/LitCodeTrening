//https://leetcode.com/problems/maximum-product-of-two-digits/submissions/1966967861/
const maxProduct = function(n) {
    let mass = [];
    while (n > 0){
        let x = n % 10;
        mass.push(x);
        n = Math.floor(n / 10);
    };
    let sum = 0;
    if(mass.length === 1){
        return mass[0];
    }
    else{
        for(let i = 0; i < mass.length-1; i++){
            for (let j = i+1; j < mass.length; j++){
                if(mass[i] * mass[j] > sum){
                    sum = mass[i] * mass[j];
                }
            }
        }
        return sum;
    }
};
