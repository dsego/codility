
// -----------------------------------------------------------------------------
//  COMMON PRIME DIVISORS
//  Check whether two numbers have the same prime divisors.
//
//  Report: https://app.codility.com/demo/results/trainingHFQ2KW-VEK/
// -----------------------------------------------------------------------------

// I couldn't quite figure it out on my own :(
// Solution: https://codility-lessons.blogspot.com/2015/03/lesson-10-commonprimedivisors.html

function solution(A, B) {
    let count = 0;

    let gcd = (a, b) => a % b == 0 ? b : gcd(b, a % b);

    let check = (a, b) => {
        let div = gcd(a, b)
        let k = a / div;

        while (div % k != 0) {
            let l = gcd(div, k)
            if (l == 1) return 0
            k /= l
        }
        return 1
    }

    for (let i = 0; i < A.length; ++i) {
        count += check(A[i], B[i]) * check(B[i], A[i]);
    }

    return count;
}


console.log(solution([15, 10, 3], [75, 30, 5])) // 1
console.log(solution([2, 1, 2], [1, 2, 2])) // 1
console.log(solution([1], [1])) // 1
