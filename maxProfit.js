
// -----------------------------------------------------------------------------
//  MAX PROFIT
//  Given a log of stock prices compute the maximum possible earning.
//
//  Report: https://app.codility.com/demo/results/trainingQ8NDRH-Y3H/
// -----------------------------------------------------------------------------

function solution(A) {
    let min_price = 200000;
    let profit = 0;

    for (let i=0; i<A.length; ++i) {
        min_price = Math.min(min_price, A[i]);
        profit = Math.max(profit, A[i] - min_price);
    }
    return Math.max(profit, 0);
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])) // 356

