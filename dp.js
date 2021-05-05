// -----------------------------------------
// Chapter 17
// Dynamic programming
// -----------------------------------------


function change(coins, amount) {
    const MAX = Number.MAX_SAFE_INTEGER
    let solutions = []

    solutions[0] = [0]

    // for zero coins there is no solution (set to max int)
    for (let i = 1; i <= amount; ++i) {
        solutions[0][i] = MAX
    }

    // no coins are needed to pay a zero amount
    for (let j = 1; j <= coins.length; ++j) {
        solutions[j] = [0]
    }

    // find all sub-solutions

    // each coin
    for (let i = 1; i <= coins.length; ++i) {

        // for amounts smaller than the current coin discard this coin
        for (let j = 0; j < coins[i-1]; ++j) {
            solutions[i][j] = solutions[i-1][j]
        }

        // for amounts greater than the current coin either use the largest coin or discard it
        for (let j = coins[i-1]; j <= amount; ++j) {
            const remainder = j - coins[i-1]
            solutions[i][j] = Math.min(solutions[i][remainder] + 1, solutions[i-1][j])
        }

    }
    // console.log(solutions)

    // give the final solution for our amount
    return solutions[coins.length][amount]
}

// console.log(change([1, 3, 4], 6))

// optimize memory, only use the previous row
function change2(coins, amount) {
    let solutions = [0]

    for (let i = 1; i <= amount; ++i) {
        solutions[i] = Number.MAX_SAFE_INTEGER
    }

    for (let i = 0; i <= coins.length; ++i) {
        for (let j = coins[i-1]; j <= amount; ++j) {
            solutions[j] = Math.min(
                solutions[j - coins[i-1]] + 1,
                solutions[j]
            )
        }
    }

    return solutions[amount]
}

// console.log(change2([1, 3, 4], 6))


function frog(distances, position) {
    let dp = []

    // starting position
    dp[0] = 1

    // prefill
    for (let i=1; i<=position; ++i) {
        dp[i] = 0
    }

    for (let j=1; j <= position; ++j) {
        console.log('position', j)
        for (let i=0; i < distances.length; ++i) {
            if (distances[i] <= j) {
                dp[j] = (dp[j] + dp[j - distances[i]])
            }
            console.log('d', distances[i],  dp.join(' '))
        }
    }

    return dp[position]
}

// console.log(frog([3,5], 10)) // only one way to jump, 5 + 5
// console.log(frog([3], 10)) // nope
console.log(frog([2, 5], 10)) // 2 ways, 5x2 or 2x5


