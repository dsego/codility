
// -----------------------------------------------------------------------------
//  FLAGS
//  Find the maximum number of flags that can be set on mountain peaks.
//
//  Report: https://app.codility.com/demo/results/training9UNPF6-M7X/
// -----------------------------------------------------------------------------

function solution(A) {
    if (A.length < 3) return 0 // no peaks

    let peaks = []

    // find all peaks
    for (let i=1; i < A.length-1; ++i) {
        if (A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks.push(i)
        }
    }
    if (peaks.length == 0) {
        return 0
    }

    let k = 1
    let max_flags = 1

    // max flags ~ sqrt(N)
    while ((k-1) * k <= A.length) {
        let flags = [peaks[0]]
        let i = 1;
        while (i < peaks.length) {
            if (peaks[i] - flags[flags.length-1] >= k) {
                flags.push(peaks[i])
                if (flags.length >= k) break;
            }
            i += 1
        }
        max_flags = Math.max(flags.length, max_flags)
        k += 1
    }
    return max_flags

}


console.log(solution([1])) // 0
console.log(solution([1, 2])) // 0
console.log(solution([1, 4, 2])) // 1
console.log(solution([3, 2, 1])) // 0
console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3])) // 2
console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])) // 3
console.log(solution([0, 0, 0, 0, 0, 1, 0, 1, 0, 1])) // 2
