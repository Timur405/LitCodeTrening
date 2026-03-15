const PRletter = (words) => {
    const FirstWord = words[0];
    let count = 0;
    outer: for (let q = 0; q < FirstWord.length; q++) {
        for (let i = 0; i < words.length; i++) {
            if ( FirstWord[q] === words[i][q]) {
                count++;
            }
            else{
              break outer;
            }
        }
    }
    let result = '';
    let kolvobukv = Math.trunc(count / words.length);
    for (let i = 0; i < kolvobukv; i++) {
        result= result+ FirstWord[i];
    }

    return result;
}

const mass = ["flower","flow","flight"]


console.log(PRletter(mass))