/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n + 1)
    dp[1] = 1

    let p2 = 1, p3 = 1, p5 = 1
    for(let i=2; i<=n; i++) {
        const n2 = dp[p2] * 2, n3 = dp[p3] * 3, n5 = dp[p5] * 5
        dp[i] = Math.min(Math.min(n2, n3), n5);
        if(dp[i] == n2) {
            p2++
        }else if(dp[i] == n3) {
            p3++
        }else {
            p5++
        }
    }
    console.log(dp)
    return dp[n]
};

nthUglyNumber(10)
