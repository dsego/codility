
// -----------------------------------------------------------------------------
// DISTINCT
// Compute number of distinct values in an array.
//
// Report: https://app.codility.com/demo/results/trainingBP8E9E-HZU/
// -----------------------------------------------------------------------------

function solution(A) {
    A.sort((a,b) => a - b);
    let count = A.length ? 1 : 0;

    for (let i = 1; i < A.length; ++i) {
        if (A[i] != A[i-1]) count += 1;
    }
    return count;
}

console.log(solution([2, 1, 1, 2, 3, 1]))


