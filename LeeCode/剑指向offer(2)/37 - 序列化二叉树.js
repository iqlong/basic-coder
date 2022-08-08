/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return ''
    let queue = [root]
    let resArr = []
    for(let i=0; i<queue.length; i++) {
        const item = queue[i]
        item!=='null' ? resArr.push(item.val) : resArr.push('null')
        if(item !== 'null') {
            item.left ? queue.push(item.left) : queue.push('null')
            item.right ? queue.push(item.right) : queue.push('null')
        }
    }
    return resArr.join(',')

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length == 0) return null
    data = data.split(',')
    let root = {}
    root.val = +data[0]

    let layer = [root]
    let layerIndex = 0
    let leftFlag = 1
    for(let i=1; i<data.length; i++) {
        // layer存放着节点
        const item = data[i]
        const curNode = layer[layerIndex]
        if(item !== 'null') {
            if(leftFlag) {
                curNode.left = {}
                curNode.left.val = +item
                // 将创建好的节点加入layer中
                layer.push(curNode.left)
                // left 和 right 轮流
                leftFlag = 0
            }else {
                curNode.right = {}
                curNode.right.val = +item

                layer.push(curNode.right)
                leftFlag = 1
                // 当为right，执行一次后，layer指针后移
                layerIndex ++
            }
        }else {
            if(leftFlag) {
                curNode.left = null
                leftFlag = 0
            }else {
                curNode.right = null
                leftFlag = 1

                // 不加入新的，但是还是要向后遍历
                layerIndex ++
            }
        }
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}
let str = serialize(tree)
let resTree = deserialize(str)
console.log(str, resTree)
console.dir(resTree, {depth: 1000})

