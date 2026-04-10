const hasSpecialSubstring = function(s, k) {
    let counter = 0;
    let l = 0;
    let r = 0;
    while(r < s.length) {
        if(s[l] === s[r]){
            counter++;
            r++;
        }
        else{
            if(counter === k){
                return true;
            }
            else{
                counter=0;
                l = r;
            }
        }
    }
    if(counter === k){
        return true;
    }
    return false;
};
console.log(hasSpecialSubstring("h",1));