/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    // 利用差值 和 map的记忆
    nums = nums.map((item, index) => {
        return item - index
    })

    let n = 0
    let map = new Map()
    nums.forEach((item) => {
        if(map.has(item)) {
            n += map.get(item)
            map.set(item, map.get(item) + 1)
        }else {
            map.set(item, 1)
        }
    })
    const len = nums.length
    const res = len * (len - 1) / 2
    return res - n
};
