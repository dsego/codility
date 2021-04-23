
// -----------------------------------------------------------------------------
//  COUNT TRIANGLES
//  Count the number of triangles that can be built from a given set of edges.
//
//  Report: https://app.codility.com/demo/results/training9UURCW-4JA/
// -----------------------------------------------------------------------------

function solution(A) {
    let result = 0

    A.sort((a,b) => a - b)

    for (let x = 0; x < A.length; ++x) {
        let z = x + 2

        for (let y = x+1; y < A.length; ++y) {
            while (z < A.length && A[x] + A[y] > A[z]) {
                z += 1
            }
            result += z - y - 1
        }
    }
    return result
}

console.log(solution([10, 2, 5, 1, 8, 12]));  // 4
