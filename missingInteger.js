
// -----------------------------------------------------------------------------
//  MISSING INTEGER
//  Find the smallest positive integer that does not occur in a given sequence.
//
//  Report: https://app.codility.com/demo/results/training3MTPRJ-J75/
// -----------------------------------------------------------------------------

function solution(A) {
    let missing = 1;
    let integers = [];

    for (let x of A) {
        integers[x-1] = true;
        while (integers[missing-1] === true) {
            missing += 1;
        }
    }

    return missing;
}
 

console.log(solution([1, 3, 6, 4, 1, 2])) // 5
console.log(solution([1, 2, 3])) // 4
console.log(solution([-1, -3])) // 1
