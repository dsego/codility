// -----------------------------------------------------------------------------
//  NUMBER SOLITAIRE
//  In a given array, find the subset of maximal sum in which the distance
//    between consecutive elements is at most 6.
//
//  Report: https://app.codility.com/demo/results/trainingBE6U5K-G9C/
// -----------------------------------------------------------------------------


function solution(A) {
    // max sums for each square
    const dp = new Array(A.length)

    // max sums for die value being k=1 (moving one square each time)
    dp[0] = A[0]
    for (let i=1; i<dp.length; ++i) {
        dp[i] = dp[i-1] + A[i]
    }

    for (let i=0; i<dp.length; ++i) {

        // possible die values
        for (let k=1; k <= 6; ++k) {
            if (k <= i) {
                dp[i] = Math.max(dp[i], dp[i - k] + A[i])
            }
        }
    }

    return dp[dp.length-1]
}



console.log(solution([1, -2, 0, 9, -1, -2])) // 8
console.log(solution([1, -2, 4, 3, -1, -3, -7, 4, -9])) // 3
console.log(solution([1, 1, 1, 1])) // 4
console.log(solution([-1, -1, -1, -1])) // -2





// -----------------------------------------------------------------------------

// Recursive solution -> 100% correctness but 0% performance!!!
//  RangeError: Maximum call stack size exceeded
function _solution(A) {
    const cached = {}

    const sub_problem = (pebble) => {

        if (pebble in cached) {
            return cached[pebble]
        }

        let max_sum = Number.MIN_SAFE_INTEGER

        // last square
        if (pebble === A.length-1) {
            return A[pebble]
        }

        // all possible moves with a 6-sided die
        const n = Math.min(6, A.length-pebble-1)


        for (let i=1; i<=n; ++i) {
            let sum = A[pebble] + sub_problem(pebble+i)
            if (sum > max_sum) {
                max_sum = sum
            }
        }

        cached[pebble] = max_sum

        return max_sum
    }

    return sub_problem(0)
}
