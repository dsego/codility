// -----------------------------------------------------------------------------
//  FROG JUMP
//  Count minimal number of jumps from position X to Y.
//
//  Report: https://app.codility.com/demo/results/trainingQSQMGU-YQR/
// -----------------------------------------------------------------------------

function solution(X, Y, D) {
    let n = 1;
    let distance = Y - X;
    return Math.ceil(distance / D);
}

console.log(solution(10, 85, 30));

