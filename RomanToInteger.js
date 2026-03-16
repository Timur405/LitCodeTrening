//https://leetcode.com/problems/roman-to-integer/submissions/1950361632/

const romanToInt = function(s) {
    let num = 0
    let myMap = new Map([
        ['I',1], ['V',5],['X',10],['L',50],
        ['C',100],['D',500],['M',1000],
        ]);

    for (let i = 0; i < s.length; i++) {
        let curr = myMap.get(s[i]);
        let next = myMap.get(s[i + 1]);
        if (curr < next) {
            num -= curr;
        } else {
            num += curr;
        }
    }
    return num;
};


//Я map узнал как пользоваться :)