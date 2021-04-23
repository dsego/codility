
// -----------------------------------------------------------------------------
// PASSING CARS
// Count the number of passing cars on the road.
//
// Report: https://app.codility.com/demo/results/trainingQ5C26H-CEV/
// -----------------------------------------------------------------------------

function solution(A) {

    // P is traveling to the east and Q is traveling to the west -> 0, 1
    let sums = [];
    let last_sum = 0;

    // Q sums
    for (let i = 0; i < A.length; ++i) {
        if (A[i] == 1) {
            A[i] += last_sum;
            last_sum = A[i];
        }
    }
    // console.log(A)

    // Match P with Q count
    let count = 0;
    let previous_sum = 0;
    for (let i = 0; i < A.length; ++i) {
        if (A[i] == 0) {
            // console.log(i, last_sum, previous_sum)
            count += last_sum - previous_sum;
            if (count > 1000000000) return -1;
        } else {
            previous_sum = A[i]; //console.log(i, previous_sum)
        }
    }

    return count;
}


console.log(solution([0, 1, 0, 1, 1])) // 5
console.log(solution([0, 1, 0, 1, 0, 1])) // 6
