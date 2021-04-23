
// -----------------------------------------------------------------------------
//  MAX DOUBLE SLICE SUM
//  Find the maximal sum of any double slice.
//
//  Report: https://app.codility.com/demo/results/training9N9XAU-XF6/
// -----------------------------------------------------------------------------

//  max left slice >      8  -1  9       < max right slice
//
//                3,  2,  6, -1, 4,  5, -1,  2
//       prefix   0,  2,  8,  7, 11, 16, 15, 0
//       suffix   0, 16, 14,  8, 9,  5, -1,  0

function solution(A) {
    let max_end = -10000
    let max_end_prefix = Array(A.length).fill(0)
    let max_end_suffix = Array(A.length).fill(0)

    for (let i=1; i < A.length-1; ++i) {
        max_end = Math.max(max_end + A[i], A[i])
        max_end_prefix[i] = max_end
    }

    max_end = -10000

    for (let i=A.length-2; i >= 0; --i) {
        max_end = Math.max(max_end + A[i], A[i])
        max_end_suffix[i] = max_end
    }

    // console.log(max_end_prefix)
    // console.log(max_end_suffix)
    // console.log(max_suffix)
    let max_double_slice = 0

    let x = 0
    let z = A.length-1

    for (let y=1; y < z; ++y) {
        let left_slice = Math.max(max_end_prefix[y-1], 0)
        let right_slice = Math.max(max_end_suffix[y+1], 0)
        // console.log(y, left_slice, right_slice)
        max_double_slice = Math.max(max_double_slice, left_slice + right_slice)
    }
    return max_double_slice

}


console.log(solution([-10000, -10000, -10000, -10000])) // 0
console.log(solution([2, 2, 2])) // 0
console.log(solution([2, 2, 2, 4])) // 2
console.log(solution([2, 2, 4, 2])) // 4
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2])) // 17
console.log(solution([3, -2, 6, -1, 4, 5, -1, 2])) // 15
console.log(solution([0, 10, -5, -2, 0])) // 10
