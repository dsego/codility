
// -----------------------------------------------------------------------------
//  PEAKS
//  Divide an array into the maximum number of same-sized blocks,
//   each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
//
//  Report: https://app.codility.com/demo/results/training6UA8PD-XEC/
// -----------------------------------------------------------------------------

function solution(A) {

    // no peaks
    if (A.length < 3) return 0

    let peaks = Array(A.length).fill(0) // prefix array

    // find all peaks (prefix sums)
    for (let i=1; i < A.length-1; ++i) {
        peaks[i] = peaks[i-1]
        if (A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks[i] += 1
        }
    }
    peaks[A.length-1] = peaks[A.length-2]

    let peak_count = peaks[A.length-1]
    if (peak_count <= 1) return peak_count // 0 or 1


    // find divisors
    const N = A.length; // number of peaks
    let i = 1
    let factors = []
    while (i * i < N) {
        if (N % i == 0) {
            factors.push(i)
            if (i >= peaks.length) break
        }
        i += 1
    }
    if (i * i == N) factors.push(i)

    // rest of the factors
    let m = factors.length-1
    while (m > 0) {
        const f = N / factors[m]
        if (f > peaks.length) break
        factors.push(f)
        m -= 1
    }

    // console.log(peaks)

    // find blocks
    let max_blocks = 0
    for (let num_blocks of factors) {
        let k = N/num_blocks
        let n = k-1
        let blocks_w_peaks = 0

        while (n < N) {
            // at least one peak
            if (n == k-1 && peaks[n] > 0) {
                blocks_w_peaks +=1;
            }
            else if (peaks[n] > peaks[n-k]) {
                blocks_w_peaks +=1;
            }
            n += k;
        }
        if (blocks_w_peaks == num_blocks) {
            max_blocks = Math.max(num_blocks, max_blocks)
        }
    }

    return max_blocks
}

// peak prefix sums [ 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3 ]
console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])) // 3
