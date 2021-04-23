
// -----------------------------------------------------------------------------
//  CHOCOLATES
//  There are N chocolates in a circle. Count the number of chocolates you will eat.
//
//  Report: https://app.codility.com/demo/results/training4R2QQG-WX9/
// -----------------------------------------------------------------------------

function solution(N, M) {
    let gcd = (a, b) => a % b == 0 ? b : gcd(b, a % b)
    return N / gcd(N, M)
}

console.log(solution(10, 4))
