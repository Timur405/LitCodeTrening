//https://leetcode.com/problems/check-if-any-element-has-prime-frequency/submissions/1966987721/

const isPrime = (value) => {
    if (value <= 1) return false;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}
const checkPrimeFrequency = function(nums) {
    let map = {};
    let newnums = [];
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
            newnums.push(nums[i]);
        }
        else{
            map[nums[i]]++;
        }
    }

    for (let i = 0; i < newnums.length; i++) {
        if(isPrime(map[nums[i]])) {
            return true;
        }
    }
    return false
};

console.log(checkPrimeFrequency([1,2,3,4,5,4]))