
// -----------------------------------------------------------------------------
//  EQUI LEADER
//  Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S]
//   and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
//
//  Report: https://app.codility.com/demo/results/trainingDVS2AN-UBH/
// -----------------------------------------------------------------------------

function solution(A) {

    // Golden leader
    let size = 0;
    let value = -1

    for (let k=0; k<A.length; ++k) {
        if (size == 0) {
            size +=1;
            value = A[k]
        } else {
            if (value != A[k]) size -= 1;
            else size += 1
        }
    }

    if (size <= 0 ) return 0;

    let count = 0;
    for (let k=0; k<A.length; ++k) {
        if (A[k] == value) count += 1;
    }
    let leader = -1;
    if (count > Math.floor(A.length / 2)) {
        leader = value;
    }

    let right_count = count;
    let left_count = 0;
    let equi_leaders = 0;

    // Find equilibrium
    for (let i = 0; i < A.length; ++i) {
        if (A[i] == leader) {
            left_count += 1;
            right_count -= 1
        }

        if (left_count > (i+1)/2 && right_count > (A.length-i-1) /2) {
            equi_leaders +=1;
        }
    }

    return equi_leaders;
}

console.log(solution([4, 3, 4, 4, 4, 2])) // 2
console.log(solution([4, 3])) // 0

