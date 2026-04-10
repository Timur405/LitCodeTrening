const vowelConsonantScore = function(s) {
    const map1 = new Map([
        ['a', 1],
        ['e', 1],
        ['i', 1],
        ['o', 1],
        ['u', 1],
    ]);
    let v = 0;
    const map2 = new Map([
        ['b', 1],
        ['c', 1],
        ['d', 1],
        ['f', 1],
        ['g', 1],
        ['h', 1],
        ['j', 1],
        ['k', 1],
        ['l', 1],
        ['m', 1],
        ['n', 1],
        ['p', 1],
        ['q', 1],
        ['r', 1],
        ['s', 1],
        ['t', 1],
        ['v', 1],
        ['w', 1],
        ['x', 1],
        ['y', 1],
        ['z', 1],
    ]);
    let c = 0;
    for(let i = 0 ; i < s.length; i++){
        if (map1.has(s[i])){
            v++;
        }
        if(map2.has(s[i])){
            c++;
        }
    }
    if(c === 0){
        return 0;
    }
    else{
        return Math.floor(v/c);
    }
};

console.log(vowelConsonantScore("au 123"));