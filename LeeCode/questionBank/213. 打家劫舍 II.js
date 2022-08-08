/**
 * @param {number[]} nums
 * @return {number}
 */
function getMax(arr) {
    let maxNum = 0;
    arr.forEach(item => {
        item > maxNum ? maxNum = item : ''
    })
    return maxNum
}
var rob = function(nums) {
    const len = nums.length;
    if(len < 4) return getMax(nums)

    let dp =  new Array(len);
    // 用于判断是否需要减去 nums[0]
    let flag = false;
    let index;let afterIndex;

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    // if(nums[0] > nums[1] || nums[0] + nums[2] > nums[3] + nums[1]) flag = true;
    if(nums[0] + nums[2] > nums[1]) {
        flag = true;
        afterIndex = 2
        index = 1
    }

    for(let i=2; i<len; i++) {
        if(flag && i>2) {
            // if(i == len-1 && index == len - 1) {
            //     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i] - nums[0])
            // }else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
            if(dp[i] == dp[i-1] && i - 1 == afterIndex) {
                // index += 1
                index = afterIndex
                afterIndex = i
            }else if(dp[i] == dp[i-2] + nums[i] && i - 2 == index) {
                // index += 2
                index = afterIndex
                afterIndex = i
            }
            // }
            console.log(`influence of index: ${index}`)
            if(i == len-1 && afterIndex == len - 1) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i] - nums[0])
            }
        }else {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }

    }
    console.log(dp, len)
    return dp[len - 1]
};

rob([1,1,1,2])

/**
 * [6,6,4,8,4,3,3,10]
 * [1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]
 * [1,1,1,2]
 * [2,1,1,2]
 * [200,3,140,20,10]
 * [1,2,1,1]
 *
 * */
