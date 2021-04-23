
// -----------------------------------------------------------------------------
//  MIN AVG TWO SLICE
//  Find the minimal average of any slice containing at least two elements.
//
//  Report: https://app.codility.com/demo/results/trainingTG3WBA-U3W/
// -----------------------------------------------------------------------------

function solution(A) {
    // Need to only check all possible slices of size 2 and 3
    // (which makes sense but I couldn't come up with it on my own, I looked it up online)

    let avg2 = (A[1] + A[0]) / 2;
    let min = avg2;
    let p = 0;

    // average of slice size=2
    for (let i = 1; i < A.length; ++i) {
        avg2 = (A[i-1] + A[i]) / 2;
        if (avg2 < min) {
            p = i-1;
            min = avg2;
        }
    }

    // console.log("---", min)

    // average of slice size=3
    if (A.length > 2) {
        let avg3 = (A[2] + A[1] + A[0]) / 3;
        min = Math.min(min, avg3);
        for (let i = 2; i < A.length; ++i) {
            avg3 = (A[i-2] + A[i-1] + A[i]) / 3;
            if (avg3 < min) {
                p = i-2;
                min = avg3;
            }
        }
    }

    return p;
}


console.log(solution([4, 2, 2, 5, 1, 5, 8])) // 1
console.log(solution([-3, -5, -8, -4, -10])) // 2
console.log(solution([5, 6, 3, 4, 9]))       // 2
