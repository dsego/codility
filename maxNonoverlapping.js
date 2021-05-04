// -----------------------------------------------------------------------------
//  MAX NONOVERLAPPING SEGMENTS
//  Find a maximal set of non-overlapping segments.
//
//  Report: https://app.codility.com/demo/results/trainingSMUCGV-KYM/
// -----------------------------------------------------------------------------

function solution(A, B) {

    if (A.length === 0) {
        return 0
    }

    let count = 1
    let i = 0
    let j = i + 1

    while (i < A.length && j < A.length) {
        const overlap = A[j] <= B[i]
        if (!overlap) {
            // console.log(`count segment ${A[i]}--${B[i]},  ${A[j]}--${B[j]}`,)
            count += 1
            i = j
        }
        j += 1
    }
    return count
}

console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])) // 3
// 1 2 3 4 5 6 7 8 9 10
// x-------x
//     x-----x
//             x-x
//                 x
//                 x-x

console.log(solution([], [])) // 0
console.log(solution([0], [0])) // 1
console.log(solution([0, 2, 100], [0, 50, 1000])) // 3

console.log(solution([1, 3, 5], [4, 6, 8])) // 2
// 1 2 3 4 5 6 7 8
// x-----x
//     x-----x
//         x-----x

console.log(solution([1, 5, 3], [4, 7, 8])) // 2
// 1 2 3 4 5 6 7 8
// x-----x
//         x---x
//     x---------x
