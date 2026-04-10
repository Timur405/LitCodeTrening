const isSubsequence = function(s, t) {
    let r = 0;
    let l = 0;
    while (l !== s.length && r < t.length) {
        if (t[r] === s[l]){
            l++;
        }
        r++;
    }
    return l === s.length;
};