function isCryptSolution(crypt, solution) {
    const solutionObj = {};
    for (let i = 0; i < solution.length; i++) {
        solutionObj[solution[i][0]] = Number(solution[i][1]);
    }
    const word1 = decodeToNum(solutionObj, crypt[0]);
    const word2 = decodeToNum(solutionObj, crypt[1]);
    const word3 = decodeToNum(solutionObj, crypt[2]);
    
    if (typeof word1 === 'number' && typeof word2 === 'number' && typeof word3 === 'number') {
        if (word1 + word2 === word3) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function decodeToNum(solutionObj, word) {
    let numVal = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (solutionObj[word[i]] === 0 && i === 0 && word.length > 1) {
            return false;
        }
        numVal = numVal * 10 + solutionObj[word[i]];
    }  
    return numVal;
}
