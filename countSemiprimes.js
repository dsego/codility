
// -----------------------------------------------------------------------------
//  COUNT SEMIPRIMES
//  Count the semiprime numbers in the given range [a..b]
//
//  Report: https://app.codility.com/demo/results/training9WQUJ4-PFW/
// -----------------------------------------------------------------------------

function solution(N, P, Q) {

    function gey_factorization_array(n) {
        let f = Array(n+1).fill(0)
        let i = 2
        while (i * i <= n) {
            if (f[i] == 0) {
                k = i * i
                while (k <= n) {
                    if (f[k] == 0) {
                        f[k] = i
                    }
                    k += i
                }
            }
            i += 1
        }
        return f
    }

    function is_semiprime(x, f) {
        let count = 0;
        while (f[x] > 0) {
            count +=1
            x /= f[x]
            if (count > 1) {
                return false
            }
        }
        return count == 1
    }


    let f_array = gey_factorization_array(N)

    let M = P.length

    let prefix_sums = Array(N+1).fill(0)
    for (let i=4; i < N+1; ++i) {
        if (is_semiprime(i, f_array)) {
            prefix_sums[i] = prefix_sums[i-1] + 1;
        } else {
            prefix_sums[i] = prefix_sums[i-1]
        }
    }
    // console.log(prefix_sums)

    let answer = Array(M).fill(0)

    for (let i = 0; i < M; i++) {
        answer[i] = prefix_sums[Q[i]] - prefix_sums[P[i]-1]
    }

    return answer

}

console.log(solution(26, [1, 4, 16], [26, 10, 20])) // [10, 4, 0]
