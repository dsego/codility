// -----------------------------------------------------------------------------
//  PERM MISSING ELEMENT
//  Find the missing element in a given permutation.
//
//  Report: https://app.codility.com/demo/results/trainingHZKAAP-GE6/
// -----------------------------------------------------------------------------


function solution(A) {

    // the total of 1 + 2 +... + n + (n + 1)
    let n = A.length + 1;
    let target_sum = n * (n + 1) / 2;

    // real sum
    let sum = A.reduce((acc, val) => acc += val, 0)

    let missing_number = target_sum - sum
    return missing_number
}

console.log(solution([]))
console.log(solution([1]))
console.log(solution([2]))
console.log(solution([2, 3, 1, 5]))
