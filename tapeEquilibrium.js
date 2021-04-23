
// -----------------------------------------------------------------------------
//  TAPE EQUILIBRIUM
//  Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
//
//  Report: https://app.codility.com/demo/results/trainingVRNNHN-GFQ/
// -----------------------------------------------------------------------------

function solution(A) {
    let left_sum = A[0];
    let right_sum = 0;

    for (let i = 1; i < A.length; ++i) {
        right_sum += A[i];
    }
    let min_diff = Math.abs(right_sum - A[0]);

    for (let i = 1; i < A.length-1; ++i) {
        left_sum += A[i];
        right_sum -= A[i];

        let diff = Math.abs(right_sum - left_sum);
        min_diff = Math.min(min_diff, diff);
    }

    return min_diff;
}

console.log(solution([3, 1, 2, 4, 3])); // 1
