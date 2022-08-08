/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    let f = []
    const len = nums.length
    f[0] = true
    for(let i=1; i<len; i++) {
        const res = f[i - 1] && nums[i] == nums[i - 1] ||
            f[i - 2] && f[i - 2] !== undefined && nums[i - 2] !== undefined && ( nums[i - 2] == nums[i - 1] && nums[i] == nums[i -1] ||
                nums[i] - nums[i -1] == 1 && nums[i - 1] - nums[i - 2] == 1 )
        f[i + 1] = !!res
    }
    return f[len]
};

let res = validPartition([4,4,4,5,6])
console.log(res)
