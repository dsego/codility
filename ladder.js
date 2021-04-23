
// -----------------------------------------------------------------------------
//  LADDER
//  Count the number of different ways of climbing to the top of a ladder.
//
//  Report:  https://app.codility.com/demo/results/trainingW744MH-5HE/
// -----------------------------------------------------------------------------

function solution(A, B) {
    // rungs 1 2 3 4 5 6  7  ...
    // ways  1 2 3 5 8 13 21 ... (fibonacci)

    // answers will be indexed by the values, now we have to generate the Fib sequence only once
    let ways = Array(A.length+1).fill(-1)

    // Fibonacci sequence
    let a = 0
    let b = 1
    let c = 1

    const max = Math.max(...A)
    const max_pow = Math.max(...B)
    const max_period = 3 * Math.pow(2, max_pow -1)
    let mod = Math.pow(2, max_pow)
    let bitwise_mod = mod - 1

    // for modulo 2^P the sequence is periodic with 3 * 2^(P-1)
    // fib          1 2 3 5 8 13 21 34 55
    // mod 2^2=4    1 2 3 1 0 1  1  2  3  ...   (period = 6)
    // mod 2^1=2    1 0 1 1 0 1  1  0  1  ...   (period = 3 )

    for (let i = 0; i < max % max_period ; ++i) {
        // Important to get the modulo asap so we keep the numbers from overflowing
        c = (a + b) & bitwise_mod // equiv to % pow(2, P)
        a = b
        b = c
        ways[i+1] = c
    }

    // console.log(ways)
    let result = []
    for (let i = 0; i< A.length; ++i) {
        result[i] = ways[A[i] % max_period] & ((1 << B[i]) - 1) // bitwise modulo, equiv to A[i] % pow(2, B[i])
    }

    return result
}



console.log(solution([50000], [8])) // [98]
console.log(solution ([9, 5, 7], [2, 2, 2])) // [3, 0, 1]
console.log(solution ([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])) // [5, 1, 8, 0, 1]
console.log(solution ([24, 24, 6, 5], [6, 5, 2, 2])) // [17, 17, 1, 0]
