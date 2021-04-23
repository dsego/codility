
// -----------------------------------------------------------------------------
//  DISC INTERSECTIONS
//  Compute the number of intersections in a sequence of discs.
//
//  Report: https://app.codility.com/demo/results/training6GGGYA-TZY/
// -----------------------------------------------------------------------------

// Count pairs of intersecting discs
function solution(A) {

    // Convert to intervals (clamped to [0, len])
    let lr = A.map((r, i) => [i > r ? i - r : 0, Math.min(i + r, A.length-1)])

    // Sort by starting point
    lr.sort((a, b) => a[0] - b[0])

    // Example: (top-down view)
    //                0 1 2 3 4 5 6 7 8
    //  + + + + + + + + + + + + + + + + + + + + +
    //       -4 - - - - - - - - - 6
    //             -1 - 1
    //                0 - - - 4
    //                0 - - - - - - - 8
    //                    2 - 4
    //                          55


    // Clamped:
    //                0 1 2 3 4 5
    //  + + + + + + + + + + + + + + + + + + + + +
    //          - - - 0 - - - - 5
    //              - 0 1
    //                0 - - - 4
    //                0 - - - - 5
    //                    2 - 4
    //                          55

    let started = Array(A.length).fill(0)
    let ended = Array(A.length).fill(0)

    // Get how many discs started and ended for each point
    for (let i = 0; i < lr.length; ++i) {
        started[lr[i][0]] += 1;
        ended[lr[i][1]] += 1;
    }
    // [ 4, 0, 1, 0, 0, 1 ]
    // [ 0, 1, 0, 0, 2, 3 ]

    // Make it cumulative
    for (let i = 1; i < started.length; ++i) {
        started[i] += started[i-1] - ended[i-1]
    }
    // [ 4, 4, 4, 4, 4, 3 ]
    // [ 0, 1, 0, 0, 2, 3 ]


    // ( formula for number of unique pairs is: n * (n-1) / 2 )

    // For each disc ending calculate pairs with the following formula:
    //  ended * (started - ended)  +  ended * (ended - 1) / 2
    //
    //  1 * (4-1)   +   1 * (1 - 1) / 2    = 3
    //  2 * (4-2)   +   2 * (2 - 1) / 2    = 5
    //  3 * (3-3)   +   3 * (3 - 1) / 2    = 3


    let pair_count = 0;
    for (let i = 0; i < A.length; ++i) {
        pair_count += ended[i] * (started[i] - ended[i]) +  ended[i] * (ended[i] - 1) / 2;
        if (pair_count > 10000000) return -1;
    }

    return pair_count;
}

console.log(solution([1, 5, 2, 1, 4, 0])) // 11

