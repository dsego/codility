
// -----------------------------------------------------------------------------
//  COUNT DISTINCT SLICES
// -----------------------------------------------------------------------------

function solution(M, A) {
    const MAX =  1000000000;
    let total = 0
    let back = 0;
    let front

    while (back < A.length && front < A.length) {

        front = back + 1

        // extend phase
        while (front < A.length && A[front] != A[back]) {
            front += 1;
            // if (total >= MAX) return MAX
        }
        console.log('extend', back, front)

        // retract phase
        while (back < front) {
            back += 1
        }
        console.log('retract', back, front)

        // return
        // total += count

    }

    return total;
}


console.log(solution(6, [3, 4, 5, 5, 2])) // 9
console.log(solution(6, [0, 1, 2, 3])) // 10
console.log(solution(6, [5, 5, 5, 5])) // 4
console.log(solution(9, [1, 2, 3, 3, 2, 3])) // 11
console.log(solution(9, [1, 2, 2, 1, 2, 3])) // 11
console.log(solution(9, [1, 2, 3, 1, 2, 3])) // 15


// 1 2 3
//   2 3 1
//     3 1 2
//       1 2 3

