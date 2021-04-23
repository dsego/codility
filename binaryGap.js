
// -----------------------------------------------------------------------------
//  BINARY GAP
//  Find longest sequence of zeros in binary representation of an integer.
//
//  Report: https://app.codility.com/demo/results/trainingR65Q82-ZJ2/
// -----------------------------------------------------------------------------

function solution(N) {
    let n = N
    let gap = 0
    let max_gap = 0
    let started = false

    while (n > 0) {
        const digit =  n % 2
        n = Math.floor(n / 2)

        if (digit == 1) {
            gap = 0
            started = true
        } else if (started) {
            gap += 1
        }

        max_gap = Math.max(max_gap, gap)

    }
    return max_gap
}

console.log(solution(1041));
console.log(solution(15));
console.log(solution(32));
