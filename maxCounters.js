// -----------------------------------------------------------------------------
//  MAX COUNTERS
//  Calculate the values of counters after applying all alternating operations:
//   increase counter by 1; set value of all counters to current maximum.
//
//  Report: https://app.codility.com/demo/results/trainingGVDUVX-JTK/
// -----------------------------------------------------------------------------

//  N counters, A - operations
function solution(N, A) {
    let counters = Array(N).fill(0);
    let max = 0;
    let set_max = 0;

    for (let i = 0; i < A.length; ++i) {
        const X = A[i];
        if (X >= 1 && X <= N) {
            counters[X-1] = Math.max(set_max, counters[X-1]);
            counters[X-1] += 1;
            max = Math.max(counters[X-1], max);
        } else if (X == N + 1) {
            set_max = max;
        }
    }

    for (let i = 0; i < counters.length; ++i) {
        if (counters[i] < set_max) {
            counters[i] = set_max;
        }
    }
    return counters;
}

console.log(solution (5, [3, 4, 4, 6, 1, 4, 4]))


