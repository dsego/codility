
// -----------------------------------------------------------------------------
//  FISH
//  N voracious fish are moving along a river. Calculate how many fish are alive.
//
//  Report: https://app.codility.com/demo/results/trainingJ6NV5Y-HGC/
// -----------------------------------------------------------------------------

function solution(A, B) {
    // 0 - upstream
    // 1 - downstream

    let alive = [0]; // fish that will stay alive

    for (let i = 1; i < A.length; ++i) {
        let p = alive.pop();
        let q = i;

        while (B[p] == 1 && B[q] == 0) {
            q = A[p] > A[q] ? p : q;
            p = alive.pop();
        }

        if (p !== undefined) {
            alive.push(p)
        }
        alive.push(q)
    }

    return alive.length;
}

console.log(solution([4, 3], [0, 1])) // 2
console.log(solution([4, 3], [1, 0])) // 1
console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])) // 2
console.log(solution([4, 3, 2, 1, 5], [0, 1, 1, 0, 0])) // 2


