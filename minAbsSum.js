// -----------------------------------------------------------------------------
//  MIN ABS SUM
//  Given array of integers, find the lowest absolute sum of elements.
//
//  Golden solution: https://codility.com/media/train/solution-min-abs-sum.pdf
//
//  Report: https://app.codility.com/demo/results/trainingVWFX8D-D6V/
// -----------------------------------------------------------------------------

function solution(A) {
    let count = {}
    let sum = 0

    // convert to absolute values
    for (let i=0; i<A.length; ++i) {
        let abs = Math.abs(A[i])
        if (abs in count) {
            count[abs] += 1
        } else {
            count[abs] = 1
        }
        sum += abs
    }

    let dp = new Array(sum+1).fill(-1)
    dp[0] = 0

    for (let a in count) {
        for (let j=0; j<=sum; ++j) {
            if (dp[j] >= 0) {
                dp[j] = count[a]
            } else if (j >= a && dp[j-a] > 0) {
                dp[j] = dp[j-a] - 1
            }
        }
    }
    // console.log(dp,sum)

    let result = sum

    for (let i=0; i< Math.floor(sum/2)+1; ++i) {
        if (dp[i] >= 0) {
            result = Math.min(result, sum - 2*i)
        }
    }
    return result
}


console.log(solution([1, 5, 2, -2])) // 0,  S = [−1, 1, −1, 1]
console.log(solution([100, 5, 6, -100, -2, 2])) // 1
console.log(solution([3, 1])) // 2


/*

Examining the slow solution:

A   5  2  2

M = 5
S = sum(A) = 9
iterate down from S to 0

    0  1  2  3  4  5  6  7  8   9
----------------------------------
dp  1  0  0  0  0  0  0  0  0  0
 5                 1
 2        1              1
 2        1     1        1     1


     0 1 2 3 4 5 6 7 8 9
    ---------------------
dp = 1 0 1 0 1 1 0 1 0 1

P = 4
Q = 5
res = 1

Note:
for line 17 in the solution: min(result, S - 2*i),
 that S - 2*i is just a different way of doing ceil(S/2) - i

*/
