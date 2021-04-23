
// -----------------------------------------------------------------------------
//  COUNT FACTORS
//  Count factors of given number n.
//
//  Report: https://app.codility.com/demo/results/trainingHV8AE4-7RG/
// -----------------------------------------------------------------------------

function solution(N) {
    let i = 1
    let result = 0
    while (i * i < N) {
        if (N % i == 0) result +=2
        i += 1
    }
    if (i * i == N) result +=1
    return result
}

console.log(solution(24))
