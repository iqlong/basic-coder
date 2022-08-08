/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;

    let dp = new Array(len);
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i=2; i<len; i++) {
        if(i < 3) dp[i] = Math.max( nums[1], Math.max(nums[0], nums[2]) )
        else dp[i] = Math.max( dp[i - 2], dp[i - 3])
    }
    return dp[len - 1]
};
