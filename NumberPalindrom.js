//https://leetcode.com/problems/palindrome-number/submissions/1950221195/

const isPalindrome = (number) => {
    let numbers = [];
    if (number >= 0){
        while (number !== 0){
            let a = number%10;
            numbers.push(a);
            number = Math.trunc(number/10)
        }
        for (let i = 0; i < Math.floor(numbers.length/2); i++){
            if (numbers[i] !== numbers[numbers.length-1-i]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }

}

// was easy :)