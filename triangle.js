
// -----------------------------------------------------------------------------
//  TRIANGLE
//  Determine whether a triangle can be built from a given set of edges.
//
//  Report: https://app.codility.com/demo/results/trainingFC7NQG-JKP/
// -----------------------------------------------------------------------------

function solution(A) {

    if (A.length < 3) return 0;

    A.sort((a,b) => a - b);

    for (let i = 0; i < A.length-2; ++i) {
        let p = A[i]
        let q = A[i+1]
        let r = A[i+2]
        if (p + q > r && q + r > p && r + p > q) {
            return 1;
        }
    }
    return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20])) // 1   (10, 5, 8)
console.log(solution([10, 50, 5, 1]))  // 0
