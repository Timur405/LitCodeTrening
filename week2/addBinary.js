//https://leetcode.com/problems/add-binary/description/
const BintoDex = function(n) {
    let i = n.length-1;
    let t = 1n;
    let answer = 0n;
    while (i>=0) {
        answer += BigInt(n[i])*t;
        t*=2n;
        i--;
    }
    return answer;
}
const DextoBin = function(n) {
    let str = "";
    if (n === 0n) {
        return "0"
    }
    while(n>0) {
        let a = n % 2n;
        str = a+str;
        n = n / 2n;
    }
    return str;
}

const addBinary = function(a, b) {
    let numA = BintoDex(a);
    let numB = BintoDex(b);
    let sum = numA + numB;
    return DextoBin(sum);
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));