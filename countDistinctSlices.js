
// -----------------------------------------------------------------------------
//  COUNT DISTINCT SLICES
//  Count the number of distinct slices (containing only unique numbers).
//
//  Report: https://app.codility.com/demo/results/training4VD3BZ-RMY/
// -----------------------------------------------------------------------------


function solution(M, A) {
    const MAX = 1000000000

    let i = 0
    let j = 1
    let seen = {}
    let count = 0
    let k = 0 // index of duplicate number

    // first encounter
    seen[A[i]] = i

    while (j < A.length) {
        if (A[j] in seen) {

            // for case like this [1, 2, 3, 3, 2, 3] we want to skip to the
            //  latest duplicate, which is number 3, not 2
            k = Math.max(seen[A[j]], k)

            // triangular number: n * (n + 1) / 2

            const to_add = (j - i) * (j - i + 1) / 2
            const to_subtract = (j - k - 1) * (j - k) / 2

            count += to_add - to_subtract

            if (count > MAX) {
                return MAX
            }

            // console.log(i, j, to_add, to_subtract)
            i = k + 1
        }
        seen[A[j]] = j
        j += 1
    }
    count += (j - i) * (j - i + 1) / 2

    if (count > MAX) {
        return MAX
    }

    return count
}


console.log(solution(6, [1, 8, 2, 4, 8])) // 13
console.log(solution(6, [3, 4, 5, 5, 2])) // 9
console.log(solution(6, [0, 1, 2, 3])) // 10
console.log(solution(6, [5, 5, 5, 5])) // 4
console.log(solution(9, [1, 2, 3, 3, 2, 3])) // 11
console.log(solution(9, [1, 2, 2, 1, 2, 3])) // 11
console.log(solution(9, [1, 2, 3, 1, 2, 3])) // 15


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const M = 100000
const N = 100000
const LARGE_ARRAY = (new Array(N)).fill(0).map(() => getRandomInt(M))
// console.log(LARGE_ARRAY)
console.log(solution(M, LARGE_ARRAY))

