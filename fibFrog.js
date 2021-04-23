
// -----------------------------------------------------------------------------
//  FIB FROG
//  Count the minimum number of jumps required for a frog to get to the other side of a river.
//
//  Report: https://app.codility.com/demo/results/trainingUQ3UX7-MYJ/
// -----------------------------------------------------------------------------

function solution(A) {

    // less than 30 numbers up to 100k, we could easily hard-code it
    function get_fib_sequence(max) {
        let f = [0, 1, 1]
        let i = 3
        let next = 2
        while (next <= max) {
            f[i] = next
            i += 1;
            next = f[i-1] + f[i-2];
        }
        return f
    }

    if (A.length == 0) return 1;

    let fib = get_fib_sequence(A.length+1).slice(2)

    // Build graph of possible jumps
    let graph = {}
    for (let f of fib) {
        for (let i=-1; i+f <= A.length; ++i) {
            if ((i == -1 || A[i]) && (i+f == A.length || A[i+f])) {
                graph[i] = graph[i] || []
                graph[i].push(i+f)
            }
        }
    }
    graph[A.length] = []

    let n = Object.keys(graph).length
    // console.log(graph)


    // BFS - find shortest path

    let queue = []
    let start = -1
    let end = A.length

    queue.push(start)

    let visited = Array(n).fill(false)
    visited[start+1] = true

    let prev = {}


    while (queue.length > 0) {
        let node = queue.shift()
        let neighbours = graph[node] || []

        for (let next of neighbours) {
            if (!visited[next+1]) {
                queue.push(next)
                visited[next+1] = true
                prev[next] = node
            }
        }
    }
    // console.log(prev)

    let path = []
    let pos = prev[end];
    while (pos !== undefined) {
        path.unshift(pos)
        pos = prev[pos]
    }

    if (path[0] == start) {
        return path.length
    }
    return -1
}


console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])) // 3
console.log(solution([0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0])) // 1
console.log(solution([0, 0, 1, 0, 0, 0, 0])) // 1
console.log(solution([0, 0, 1, 0, 0, 0, 0, 1])) // 2
console.log(solution([1] )) // 1
console.log(solution([1, 1, 1])) // 2

