
// -----------------------------------------------------------------------------
//  FROG RIVER ONE
//  Find the earliest time when a frog can jump to the other side of a river.
//
//  Report: https://app.codility.com/demo/results/training9JUBFF-K36/
// -----------------------------------------------------------------------------

function solution(X, A) {
    let positions = Array(X+1).fill(false);
    let len = 0;

    for (let i = 0; i < A.length; ++i) {
        if (positions[A[i]] == false) {
            positions[A[i]] = true;
            len += 1;
        }
        // console.log(i, positions, len)
        if (len == X) {
            return i;
        }
    }

    return -1;
}


console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])) // 6

