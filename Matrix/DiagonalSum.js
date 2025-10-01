function diagonalSum(mat) {
    let totalSum = 0;
    const N = mat.length;

    for(let i=0; i<N; i++) {
        totalSum += mat[i][i]; // Primary Diagonal: mat[i][i]
        const j = N-1-i;
        if(i !== j) {
            totalSum += mat[i][j]; // Secondary Diagonal: mat[i][N - 1 - i]
        }
    }

    return totalSum;
}

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // 25
console.log(diagonalSum([[1,0],[0,1]])); // 2
console.log(diagonalSum([[5]])); // 5