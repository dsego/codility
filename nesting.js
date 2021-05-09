
// -----------------------------------------------------------------------------
//  NESTING
//  Determine whether a given string of parentheses (single type) is properly nested.
//
//  Report: https://app.codility.com/demo/results/training349XR9-3AG/
// -----------------------------------------------------------------------------

function solution(A) {
    let balance = 0;
    for (let a of A) {
        if (a == '(') {
            balance +=1;
        } else {
            balance -=1;
            if (balance < 0) {
                return 0;
            }
        }
    }
    return balance == 0 ? 1 : 0;
}

console.log(solution('(()(())())')) //1
console.log(solution('())')) // 0
