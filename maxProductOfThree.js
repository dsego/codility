
// -----------------------------------------------------------------------------
//  MAX PRODUCT OF THREE
//  Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
//
//  Results https://app.codility.com/demo/results/trainingPWVZVN-EX9/
// -----------------------------------------------------------------------------

function solution(A) {
    A.sort((a,b) => a - b); // Careful, JS uses lexicographical sort by default
    const l = A.length;

    // Multiplying two negatives can produce a large positive product
    const p1 = A[0] * A[1] * A[A.length-1];

    const p2 = A[A.length-3] * A[A.length-2] * A[A.length-1];

    return Math.max(p1, p2);
}

console.log(solution([-3, 1, 2, -2, 5, 6])) // 60
console.log(solution([-5, 5, -5, 4])) // 125
console.log(solution([-5, -6, -4, -7, -10])) // -120
