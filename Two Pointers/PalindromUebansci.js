// https://leetcode.com/problems/valid-palindrome/
const isPalindrome = function(s) {
    const arr = [];
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
            arr.push(s[i]);
        }
    }
    if(arr.length <= 1){
        return true;
    }
    let l = 0;
    let r = arr.length-1;
    while (l <= arr.length/2) {
        if (arr[r] === arr[l]){
            r--;
            l++;
        }
        else{
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("0P"))