const strStr = function(haystack, needle) {
    let r = 0;
    let l = 0;
    let count = 0;
    let rpos = 0;
    while (r < haystack.length && l !== needle.length) {
        if(haystack[r] === needle[l]){
            if(count === 0){
                rpos = r;
            }
            count++;
            r++;
            l++;
        }
        else{
            if(count !== 0){
                count = 0;
                l = 0;
                r = rpos+1;
            }
            else{
                r++;
            }
        }
    }
    if(l !== needle.length){
        return -1;
    }
    return rpos;
};

console.log(strStr("mississippi","pi"))