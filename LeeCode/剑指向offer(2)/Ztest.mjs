/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    // layerTravers + dp
    // dp equation:
    // dp[i] = Math.max(dp[i] + dp[i-2], dp[i - 1])
    // dp[0] = root.val    dp[1] = Math.max(root.left.val, root.right.val)

    function sequenceSumVal(tree) {
        let queue = [[tree]]
        // 由于长度是动态的，需要等for循环结束才知道长度
        // let len = 0;        // len: [1, 10**4]
        // let dp = []
        let arr = []
        for(let i=0; i<queue.length; i++) {
            let temp = []
            const item = queue[i]
            let sum = 0;
            // console.log(`the ${i} layer element's sumVal: `)
            item.forEach(item => {
                item.left && temp.push(item.left)
                item.right && temp.push(item.right)
                // console.log(`test val: ${item.val}`)
                sum += item.val
            })
            // console.log(sum)
            arr[i] = sum
            temp.length && queue.push(temp)
        }
    }
    sequenceSumVal(root)
    first = arr[0]
    second = arr[1]
    const len = arr.length - 1
    for(let i=2; i<len; i++) {
        const cur = first + second;
        first = second
        second = cur
    }
    // return dp[dp.length - 1]
    return second
};
