
// -----------------------------------------------------------------------------
//  MIN PERIMETER RECTANGLE
//  Find the minimal perimeter of any rectangle whose area equals N.
//
//  Report: https://app.codility.com/demo/results/training8H2DE4-ZE6/
// -----------------------------------------------------------------------------

function solution(N) {
    let a = 1
    let b = N
    let min_perimeter = 2 * (a + b)

    while (a <= b) {
        perimeter = 2 * (a + b)
        min_perimeter = Math.min(perimeter, min_perimeter)
        a += 1

        // find the next divisor a
        while (a * a < N) {
            if (N % a == 0) break
            a += 1
        }

        b = N/a
    }

    return min_perimeter
}


console.log(solution(1)) // 4
console.log(solution(30)) // 22
console.log(solution(36)) // 24
console.log(solution(1000000000))
console.log(solution(982451653))
