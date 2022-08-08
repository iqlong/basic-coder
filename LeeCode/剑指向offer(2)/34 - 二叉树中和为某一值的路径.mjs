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
 * @param {number} target
 * @return {number[][]}
 */
import tree from './templateTree.mjs'
var dfs = function(root, target, tempArr, res, sum) {
    // 注意：递归中常量可以保存，但是引用变量保存不了！！！
    sum += root.val;
    tempArr.push(root.val)
    if(sum == target && !root.left && !root.right) {
        // 这里保存后要让 tempArr 和之前没有关系
        res.push(JSON.parse(JSON.stringify(tempArr)));
        return
    }
    // else if(sum > target) {
    //     return
    // }

    console.log(root.val)

    if(root.left) {
        // 节点存在且push到tempArr中才执行 pop()
        dfs(root.left, target, tempArr, res, sum)
        if(tempArr.length > 1) tempArr.pop()

    }

    if(root.right) {
        dfs(root.right, target, tempArr, res, sum)
        tempArr.pop()
    }

};
var pathSum = function(root, target) {
    let res = [],tempArr = [];
    let sum = 0;
    dfs(root, target, tempArr, res, sum)
    return res
}

const treeT = {
    val: -2,
    left: null,
    right: {
        val: -3,
        left: null,
        right: null
    }
}
const res = pathSum(treeT, -5)
console.log(res)




















