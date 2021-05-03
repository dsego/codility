// -----------------------------------------------------------------------------
//  MIN ABS SUM
//  Find the minimal absolute value of a sum of two elements.
//
//  Report: https://app.codility.com/demo/results/trainingTHH82F-MP9/
// -----------------------------------------------------------------------------

function solution(A) {

    A.sort((a, b) => a - b)

    // console.log(A)

    let i = 0
    let j = A.length - 1
    let min_sum = Math.min(Math.abs(A[i] + A[j]))

    while (i < A.length) {
        // console.log(i, j)
        let sum = Math.abs(A[i] + A[j])
        min_sum = Math.min(sum, min_sum)

        let next_sum = Math.abs(A[i] + A[j-1])

        if (j > 0 && next_sum <= sum) {
            j -= 1
        } else {
            i += 1
        }

    }

    return min_sum
}


console.log(solution([1, 4, -3])) // 1
console.log(solution([-8, 4, 5, -10, 3])) // 3
console.log(solution([1, 4, 0, -2])) // 0
console.log(solution([1, 4, 2, 5])) // 2
console.log(solution([-1000000000, -999999999])) // 1999999998
console.log(solution([-2, 1, 3, 5, 7])) // 1
console.log(solution([1, 1, 1, -1, 3, 4])) // 0
console.log(solution([8, 5, 3, 4, 6, 8] )) // 6
console.log(solution([
   15533,  66726,  88114,
   98282, -14960,  -4147,
  -10707,  95215, -13190,
  -91403
])) // 573 ( 15533 - 14960 )

