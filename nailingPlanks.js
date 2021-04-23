
// -----------------------------------------------------------------------------
//  NAILING PLANKS
//  Count the minimum number of nails that allow a series of planks to be nailed.
//
//  Report: https://app.codility.com/demo/results/training7Q4DX6-QNE/
// -----------------------------------------------------------------------------

function solution(A, B, C) {
    let result = -1

    // If nails have the same position, only keep the one with the smaller index
    let nail_indexes = Array(2*C.length+1).fill(-1)

    for (let j=C.length-1; j>=0; --j) {
        nail_indexes[C[j]] = j;
    }

    let nails = nail_indexes.map((v, k) => [k, v]).filter((n) => n[1] > -1).map((n) => n[0])

    // Sort planks by their position and keep the shortest one for each position.
    // If the short ones can't be nailed, we don't need to check the longer ones.
    // If the short ones can be nailed, so can the longer ones at the same position.
    // We can simply eliminate the longer ones from consideration.

    let planks = A.map((a, i) => ({a: A[i], b: B[i], l: B[i]-A[i] }))
    planks.sort((x, y) => x.a - y.a)

    let short_planks = []
    for (let i=0; i<planks.length; ++i) {
        if (short_planks[planks[i].a] === undefined ||
            short_planks[planks[i].a].l > planks[i].l) {

            short_planks[planks[i].a] = planks[i]
        }
    }

    short_planks = short_planks.filter((p) => p !== undefined)


    for (let i=0; i<short_planks.length; ++i) {

        let beg = 0
        let end = nails.length-1
        let mid = -1

        // This will be the first nail that is greater than the plank starting point
        let start = -1

        // Binary search for suitable nails
        while (beg <= end) {
            mid = Math.floor((beg+end) / 2)

            if (nails[mid] < short_planks[i].a) {
                beg = mid+1
            } else {
                end = mid-1
                start = mid
            }
        }

        // Can't find any nails for this plank
        if (start == -1) return -1;

        // First found nail occurs after the plank so it doesn't count
        if (nails[start] > short_planks[i].b) return -1

        // Search for the nail with the smallest index
        let min_index = nail_indexes[nails[start]]
        for (let j=start; j<nails.length; ++j) {
            if (nails[j] > short_planks[i].b) break
            min_index = Math.min(nail_indexes[nails[j]], min_index)
        }
        result = Math.max(result, min_index+1)

    }

    return result
}


console.log(solution([2,4,5,8], [4,5,9,10], [1])) // -1
console.log(solution([1,4,5,8], [4,5,9,10], [5,6,7,10])) // -1
console.log(solution([1,4,5,8], [4,5,9,10], [4,6,7,10,2])) // 4
console.log(solution([1,1,4,5,8], [2,4,5,9,10], [4,6,7,10,2])) // 5
console.log(solution([1], [2], [2]) ) // 1
console.log(solution([1,2,3], [1,2,3], [3,2,1]) ) // 3
console.log(solution([1,1,5,5], [4,4,9,9], [4,6,7,10,2])) // 2
console.log(solution([1], [1], [2])) // -1

