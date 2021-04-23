// -----------------------------------------------------------------------------
//  DOMINATOR
//
//  Report: https://app.codility.com/demo/results/trainingMEKX7A-AAN/
//  Find an index of an array such that its value occurs at more than half of indices in the array.
// -----------------------------------------------------------------------------

function solution(A) {

    // Golden leader algorithm but returns index
    let size = 0;
    let value = -1
    let index = -1;

    for (let k=0; k<A.length; ++k) {
        if (size == 0) {
            size +=1;
            value = A[k]
            index = k
        } else {
            if (value != A[k]) size -= 1;
            else size += 1
        }
    }

    if (size <= 0 ) return -1;

    let count = 0;
    for (let k=0; k<A.length; ++k) {
        if (A[k] == value) count += 1;
    }

    if (count > Math.floor(A.length / 2)) {
        return index;
    }

    return -1;
}


console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // 0, 2, 4, 6 or 7
