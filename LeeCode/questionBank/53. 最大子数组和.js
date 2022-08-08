/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp[i] = dp[i-1] + nums[i]
    const len = nums.length
    let dp = new Array(len);
    dp[0] = nums[0]
    let breakPoint = false
    let negativeVal = 0;
    let positiveVal = 0;

    for(let i=1; i<len; i++) {
        if(nums[i] > 0) {
            // 当negativeVal > positiveVal && nagtive < dp[i-1] 的时候，breakPoint = false
            // negativeVal > dp[i-1]     自立门户，breakPoing = false
            if(breakPoint == false) {
                dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
            }else {
                // 判断
                positiveVal += nums[i]
                // 需要 == 0 吗
                if(positiveVal + negativeVal > 0 &&
                    positiveVal + negativeVal + dp[i - 1] > nums[i]) {
                    dp[i] = dp[i - 1] + (negativeVal + positiveVal)
                    breakPoint = false;
                    negativeVal = 0;
                    positiveVal = 0
                    // dp[i - 1] + negativeVal < 0 || positiveVal + negativeVal > 0 &&
                }else if(dp[i - 1] + negativeVal <= 0 || positiveVal + negativeVal > 0 &&
                    positiveVal + negativeVal + dp[i - 1] <= nums[i]) {
                    dp[i] = nums[i];
                    breakPoint = false;
                    negativeVal = 0;
                    positiveVal = 0
                }else {
                    dp[i] = dp[i - 1]
                }
            }
        }else if(nums[i] <= 0) {
            if(dp[i-1] <= 0) {
                dp[i] = Math.max(nums[i], dp[i-1])
            }else if(dp[i - 1] >= 0) {
                breakPoint == false ? breakPoint = true : '';
                dp[i] = dp[i - 1]

            }

            if(breakPoint == true) {
                negativeVal += nums[i]
                // breakPoint = true
            }
        }
    }
    console.log(dp)
    return dp[len - 1]
};
let res = maxSubArray(

    [1,2,-1,-2,2,1,-2,1])
console.log(res)
