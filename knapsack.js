
// -------------------------------------------
//   DYNAMIC PROGRAMMING - KNAPSACK PROBLEM
// -------------------------------------------

function slowRecursiveSolution(availableWeight, items) {
    let maxValue = 0
    for (let item of items) {
        if (item.weight <= availableWeight) {
            const tmp = slowRecursiveSolution(availableWeight - item.weight, items)
            if ((tmp + item.value) > maxValue) {
                maxValue = tmp + item.value
            }
        }
    }
    return maxValue
}

function improvedRecursive(availableWeight, items, savedMaxValues=[]) {
    let maxValue = 0
    if (savedMaxValues[availableWeight] !== undefined) {
        return savedMaxValues[availableWeight]
    }
    for (let item of items) {
        if (item.weight <= availableWeight) {
            const tmp = improvedRecursive(availableWeight - item.weight, items, savedMaxValues)
            if ((tmp + item.value) > maxValue) {
                maxValue = tmp + item.value
            }
        }
    }
    savedMaxValues[availableWeight] = maxValue
    // console.log(savedMaxValues)
    return maxValue
}

// dynamic programming - bottom up approach
function iterativeSolution(availableWeight, items) {
    const dp = new Array(availableWeight+1).fill(0)

    for (let item of items) {
        for (let [weight, value] of dp.entries()) {
            if (item.weight <= weight) {
                dp[weight] = Math.max(
                    value,
                    item.value + dp[weight - item.weight]
                )
            }
        }
    }
    console.log('dp', dp)

    return dp[dp.length-1]
}

// const items = [
//     { weight: 2, value: 3 },
//     { weight: 3, value: 5 },
//     { weight: 4, value: 7 },
//     { weight: 5, value: 9 },
//     { weight: 7, value: 13 },
// ]

const items = [
    { weight: 2, value: 3 },
    { weight: 3, value: 5 },
    { weight: 4, value: 7 },
    { weight: 5, value: 9 },
    { weight: 3, value: 19 },
    { weight: 5, value: 5 },
    { weight: 5, value: 2 },
    { weight: 1, value: 2 },
    { weight: 1, value: 1 },
    { weight: 5, value: 3 },
    { weight: 6, value: 9 },
    { weight: 7, value: 13 },
]


const loopCount = 80000;

function loop(fn, count) {
    for (let i=0; i<count; ++i) {
        fn()
    }
}

function stress(label, loopCount, fn) {
    console.time(label)
    loop(fn, loopCount)
    console.timeEnd(label)
}


// stress('slow recursive', loopCount, () => slowRecursiveSolution(8, items))
// stress('improved recursive', loopCount, () => improvedRecursive(8, items))
// stress('iterative', loopCount, () => iterativeSolution(8, items))


console.log(slowRecursiveSolution(8, items)) // 14 (5+9)
console.log(improvedRecursive(8, items)) // 14
console.log(iterativeSolution(8, items)) // 14

