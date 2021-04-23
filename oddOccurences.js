
// -----------------------------------------------------------------------------
//  ODD OCCURENCES
//  Find value that occurs in odd number of elements.
//
//  Report: https://app.codility.com/demo/results/training5BKWNJ-8UJ/
// -----------------------------------------------------------------------------

function solution(A) {
    let counters = {}

    for (let num of A) {
        if (counters[num]) {
            counters[num] += 1
        }
        else {
            counters[num] = 1
        }
    }

    for (let candidate of Object.keys(counters)) {
        if (counters[candidate] % 2 !== 0) {
            return Number(candidate)
        }
    }

    return -1 // boom!
}


console.log(solution([9, 3, 9, 3, 9, 7, 9]));

