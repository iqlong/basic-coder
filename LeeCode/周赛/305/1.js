/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let res = 0;
    nums.forEach(item => {
        if(nums.indexOf(item + diff) !== -1 && nums.indexOf(item + diff * 2) !== -1) {
            res ++
        }
    })
    return res
};
