
// -----------------------------------------------------------------------------
//  STONE WALL
//  Cover "Manhattan skyline" using the minimum number of rectangles.
//
//  Solution: https://codility.com/media/train/solution-stone-wall.pdf
//  Report: https://app.codility.com/demo/results/trainingDHS84Y-46X/
// -----------------------------------------------------------------------------


//            _
//     __    |_|_     _
//    |  |  _|___|_  | |
//    |  | |       | | |
//    |__|_|       | | |
//    |____|_______|_| |
//    |              | |
//    |______________|_|
//

function solution(H) {
    let blocks = 0;
    let stack = []
    let size = 0

    for (let i = 0; i < H.length; ++i) {
        while (size > 0 && stack[size-1] > H[i]) {
            size -= 1;
        }
        if (size < 0 || stack[size-1] != H[i]) {
            blocks += 1;
            stack[size] = H[i]
            size += 1;
        }
        console.log(i, stack)
    }
    return blocks;
}


console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])) // 7
console.log(solution([1, 2, 3, 4 ,5])) // 5
console.log(solution([2, 3, 2 , 3])) // 3
console.log(solution([5, 5, 5, 5])) // 1
