function findMaxOnesRow(mat) {
    let maxOnesIdx = 0;
    let maxOnesCount = 0;
    for(let i=0; i<mat.length; i++) {
        let onesCount = 0;
        for(let j=0; j<mat[i].length; j++) {
            if(mat[i][j] === 1) {
                onesCount++;
            }
        }
        if(onesCount > maxOnesCount) {
            maxOnesCount = onesCount;
            maxOnesIdx = i;
        }
    }
    return [maxOnesIdx, maxOnesCount];
}

console.log(findMaxOnesRow([[1, 0], [1, 1], [0, 1]])); // [1, 2]
console.log(findMaxOnesRow([[0, 1, 1], [0, 1, 1], [1, 1, 1]])); // [2, 3]
console.log(findMaxOnesRow([[1, 0, 1], [0, 0, 1], [1, 1, 0]])); // [0, 2]