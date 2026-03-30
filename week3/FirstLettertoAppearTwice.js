const repeatedCharacter = function(s) {
    let myMap = new Map();
    let l = 0;
    while (l <= s.length) {
        if(myMap.has(s[l])) {
            if(myMap.get(s[l]) + 1 >= 2){
                return s[l];
            }
            else{
                myMap[s[l]]++;
                l++;
            }
        }
        else{
            myMap.set(s[l], 1);
            l++;
        }
    }
};
