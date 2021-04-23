
// -----------------------------------------------------------------------------
//  COUNT DIV
//  Compute number of integers divisible by k in range [a..b].
//
//  Report: https://app.codility.com/demo/results/training5PFPE4-JBW/
// -----------------------------------------------------------------------------

function solution(A, B, K) {
    let left = Math.floor((A - 1) / K)   // 0 - A numbers divisible by K
    let total = Math.floor(B / K)   // 0 - B numbers divisible by K
    return total - left;
}

console.log(solution(6, 11, 2)) // 3
console.log(solution(11, 2000000000, 2))
console.log(solution(10, 10, 5)) // 1
console.log(solution(10, 10, 7)) // 0
console.log(solution(0, 9, 7))  // 2
console.log(solution(11, 345, 17))  // 20
console.log(solution(101, 123456789, 10000))  // 12345
