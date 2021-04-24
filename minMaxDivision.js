
// -----------------------------------------------------------------------------
//  MIN MAX DIVISION
//  Divide array A into K blocks and minimize the largest sum of any block.
//
//  Report: https://app.codility.com/demo/results/trainingNECJ7A-EHP/
// -----------------------------------------------------------------------------


function check(arr, large_sum) {
    let sum = 0;
    let k = 1
    for (let i=0; i < arr.length; ++i) {
        if (sum + arr[i] > large_sum) {
            k += 1
            sum = arr[i]
        } else {
            sum += arr[i]
        }
    }
    // console.log(k)
    return k
}

function solution(K, M, A) {

    let total_sum = 0
    let max_element = 0

    for (let a of A) {
        total_sum += a
        max_element = Math.max(max_element, a)
    }

    let beg = max_element // the smallest possible sum
    let end = total_sum   // the largest possible sum
    let result = 0


    while (beg <= end) {
        let mid = Math.floor((beg+end)/2)

        let divisions = check(A, mid)
        if (divisions <= K) {
            end = mid - 1
            result = mid
        }
        else {
            beg = mid + 1
        }
    }

    return result
}


console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])) // 6
console.log(solution(1, 10, [5, 3])) // 8
console.log(solution(2, 10, [4, 4])) // 4
