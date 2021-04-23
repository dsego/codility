
// -----------------------------------------------------------------------------
//  GENOMIC RANGE
//  Find the minimal nucleotide from a range of sequence DNA.
//
//  Report: https://app.codility.com/demo/results/training6WTZSA-F6Z/
// -----------------------------------------------------------------------------

function solution(S, P, Q) {

    // Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4.
    // Find the minimal impact factor contained in a particular part.

    // Each nucleotide type (sorted by factor from 4 to 1)
    const prefix = {
        'T': Array(S.length).fill(0),
        'G': Array(S.length).fill(0),
        'C': Array(S.length).fill(0),
        'A': Array(S.length).fill(0)
    }

    prefix[S[0]][0] += 1;

    // Running count of occurrences of nucleotide types
    for (let i=1; i < S.length; ++i) {
        for (let type in prefix) {
            prefix[type][i] = prefix[type][i-1];
        }
        let letter = S[i];
        prefix[letter][i] += 1;
    }
    // console.log(prefix)

    let answers = [];

    for (let i=0; i < P.length; ++i) {
        const p = P[i];
        const q = Q[i];

        for (let type in prefix) {
            let left = ( p > 0 ) ? prefix[type][p - 1] : 0;
            let count = prefix[type][q] - left;
            if (count > 0) answers[i] = '_ACGT'.indexOf(type);
        }

    }

    return answers;
}

// prefix sums
// {
//   T: [ 0, 0, 0, 0, 0, 1, 1 ],
//   G: [ 0, 0, 1, 1, 1, 1, 1 ],
//   C: [ 1, 1, 1, 2, 3, 3, 3 ],
//   A: [ 0, 1, 1, 1, 1, 1, 2 ]
// }
console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])) // [2, 4, 1]
