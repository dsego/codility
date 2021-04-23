
// -----------------------------------------------------------------------------
//  ABS DISTINCT
//  Compute number of distinct absolute values of sorted array elements.
//
//  Report: https://app.codility.com/demo/results/training33PKZ5-JJX/
// -----------------------------------------------------------------------------

function solution(A) {

    // seems naive to me, but gets 100% score
    // I tried some other approaches without sorting but got less than perfect score
    A = A.map((a) => Math.abs(a))
    A.sort((a,b) => a - b)

    let back = 0
    let front = back + 1
    let dup = 0
    while (back < A.length) {
        while (front < A.length && A[back] == A[front]) {
            front +=1
        }
        dup += front - back - 1;
        back = front
        front += 1
    }

    return A.length - dup;
}


console.log(solution([0,0,1,1,1,1,3,3])) // 3
console.log(solution([-3,-2,-2,-1,0,1,1,1,1,2,3,3])) // 4
console.log(solution([0,0,0,1,2,3,3,3])) // 4
console.log(solution([0,0,0,0])) // 1
console.log(solution([0,0,0,0,0])) // 1
console.log(solution([0,1,3,3,5])) // 4
console.log(solution([0,1,3,4,6])) // 5
console.log(solution([-5,1,3,3,3,3,3,3,3,3,5])) // 3
console.log(solution([-1, -3, -3, -2, -2])) // 3
console.log(solution([-5, -3, -1, 0, 3, 6])) // 5
console.log(solution([-5, -3, -1, 0, 3, 3, 3, 3, 6])) // 5
console.log(solution([-5, -3, -3, -1, 0, 3, 6])) // 5
console.log(solution([-5, -3, -1, 0, 3, 3, 6])) // 5
console.log(solution([-5, -3, -1, 0, 2, 4, 6])) // 7
console.log(solution([-5, 0, 0, 0, 0])) // 2
console.log(solution([
    -2147483648, -2147483648, -2147483648, -2147483648, -2147483648,
    -2147483648, -2147483648, -2147483648, -2147483648, -2147483648,
    -2147483648, -2147483648, -2147483648, -2147483648, -2147483648,
     2147483647, 2147483647,  2147483647, 2147483647,  2147483647,
     2147483647, 2147483647,  2147483647, 2147483647,  2147483647,
     2147483647, 2147483647,  2147483647, 2147483647,  2147483647,
     2147483647, 2147483647])) // 2
