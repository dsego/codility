
// -----------------------------------------------------------------------------
//  CYCLIC ROTATION
//  Rotate an array to the right by a given number of steps.
//
//  Report:  https://app.codility.com/demo/results/trainingPX6D2N-SK4/
// -----------------------------------------------------------------------------

function solution(A, K) {
    let rotated = [];

    for (let i = 0; i < A.length; ++i) {
        rotated[(i + K) % A.length] = A[i];
    }

    return rotated;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4)); //  [1, 2, 3, 4]

