
// -----------------------------------------------------------------------------
//  BRACKETS
//  Determine whether a given string of parentheses (multiple types) is properly nested.
//
//  Report: https://app.codility.com/demo/results/training59YVBH-EFC/
// -----------------------------------------------------------------------------

function solution(S) {
    let stack = [];
    for (let s of S) {
        if ('{[('.includes(s)) {
            stack.push(s)
        } else if ('}])'.includes(s)) {
            let p = stack.pop(s)
            if (['{}', '()', '[]'].includes(p+s) == false) {
               return 0;
            }
        }
    }

    return stack.length == 0 ? 1 : 0;
}

console.log(solution('{[()()]}')); // 1
console.log(solution('([)()]')); // 0
