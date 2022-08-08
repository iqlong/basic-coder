/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    const max = Math.max(amount[0], amount[1], amount[2])
    const sum = amount.reduce((pre, cur) => pre + cur)
    const otherSum = sum - max

    let res;
    if(max >= otherSum) {
        res = max
    }else{
        res = max + Math.ceil( (otherSum - max) / 2 )
    }
    return res;
}



console.log(fillCups([5, 4, 4]))
