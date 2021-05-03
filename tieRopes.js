// -----------------------------------------------------------------------------
//  TIE ROPES
//  Tie adjacent ropes to achieve the maximum number of ropes of length >= K.
//
//  Report: https://app.codility.com/demo/results/training5F66R3-43N/
// -----------------------------------------------------------------------------

function solution(K, A) {
    let len = 0
    let count = 0
    for (let a of A) {
        len += a
        if (len >= K) {
            len = 0
            count += 1
        }
    }
    return count
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3])) // 3
