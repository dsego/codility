
// -----------------------------------------------------------------------------
//  MAX SLICE SUM
//  Find a maximum sum of a compact subsequence of array elements.
//
//  Report: https://app.codility.com/demo/results/training69BAHP-UZA/
// -----------------------------------------------------------------------------

function solution(A) {

    // Golden max slice
    let max_end = -1000000
    let max_slice = -1000000
    for (let a of A) {
        max_end = Math.max(max_end + a, a)
        max_slice = Math.max(max_slice, max_end)
    }
    return max_slice
}

console.log(solution([3, 2, -6, 4, 0])); // 5
console.log(solution([-10])); // -10
