const isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map = new Map();
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i])+1);
        }
        else{
            map.set(s[i], 1);
            arr.push(s[i]);
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (map.has(t[j])) {
            map.set(t[j], map.get(t[j])-1);
            if (map.get(t[j]) === 0){
                map.delete(t[j]);
            }
        }
        else{
            return false;
        }
    }
    return true;
};

console.log(isAnagram("abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxzz"))