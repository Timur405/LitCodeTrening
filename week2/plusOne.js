//https://leetcode.com/problems/plus-one/submissions/1955990172/

const plusOne = function(digits) {
    let number = 0n;
    i = digits.length-1;
    for (let r = 0; r < digits.length; r++){
        number += BigInt(digits[r])*(10n**BigInt(i));
        i--
    }
    let mass = [];
    number ++;
    while (number > 0){
        let a = number % 10n;
        mass.push(a);
        number = number / 10n;
    }
    mass.reverse();
    const numbers = mass.map(Number);
    return numbers;
};