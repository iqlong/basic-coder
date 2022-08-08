/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 考虑 0  负数  正数   分数  四种情况
    let res = 1;
    const cX = n<0 ? 1/x : x;
    const doubleCX = cX * cX;
    const cN = n<0 ? -n : n;

    const doubleTime = cN >> 1;
    const margin = n % 2

    for(let pow=doubleTime; pow>0; pow--) {
        res *= doubleCX
    }
    if(margin) {
        res *= cX
    }
    return res
};

let res = myPow(2, 3)
console.log(res)
