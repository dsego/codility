
// -----------------------------------------------------------------------------
//  PERM CHECK
//  Check whether array A is a permutation.
//
//  Report: https://app.codility.com/demo/results/training32R73A-FZW/
// -----------------------------------------------------------------------------

function solution(A) {
    const N = A.length;
    let found = [];
    for (let number of A) {
        if (number > N) {
            return 0;
        } else {
            if (found[number]) return 0;
            found[number] = true;
        }
    }
    return 1;
}

console.log(solution([4, 1, 3, 2]))
console.log(solution([4, 1, 3]))
