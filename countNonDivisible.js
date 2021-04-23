
// -----------------------------------------------------------------------------
//  NON DIVISIBLE
//  Calculate the number of elements of an array that are not divisors of each element.
//
//  Report:  https://app.codility.com/demo/results/trainingAMX7RH-53X/
// -----------------------------------------------------------------------------

function solution(A) {

    let max_number = 2 * A.length

    let counts = Array(max_number + 1).fill(0)
    for (let a of A) {
        counts[a] += 1
    }

    let non_divisors = Array(max_number+1).fill(A.length)

    for (let n = 1; n < counts.length; ++n) {
        if (counts[n] > 0) {
            let i = 1;
            while (i * i < n) {
                if (n % i == 0) {
                    non_divisors[n] -= counts[i]
                    non_divisors[n] -= counts[n/i]
                }
                i += 1;
            }
            if (i * i == n) {
                non_divisors[n] -= counts[i]
            }
        }
    }

    return A.map(a => non_divisors[a])

}


console.log(solution([3, 1, 2, 3, 6])) // [2, 4, 3, 2, 0]
console.log(solution([3, 1, 2, 3, 6, 12])) // [3, 5, 4, 3, 1, 0]
console.log(solution([2, 4])) // [1, 0]
console.log(solution([5, 5, 5])) // [0, 0, 0]
console.log(solution([5, 5, 5, 5, 10])) // [1, 1, 1, 1, 0]
console.log(solution([9, 3, 3, 3, 2])) // [1, 2, 2, 2, 4]
console.log(solution([2, 4, 8, 4])) // [3, 1, 0, 1]
console.log(solution([12, 6, 6, 4, 3, 2])) // [0, 2, 2, 4, 5, 5]
