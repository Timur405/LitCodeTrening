//https://leetcode.com/problems/length-of-last-word/submissions/1955967337/

const lengthOfLastWord = function(s) {
    let count = 0
    let i = s.length-1;
    while (s[i] === " "){
        i--;
    }
    while (s[i] !== " " && i >= 0){
        count++;
        i--;
    }
    return count;
};