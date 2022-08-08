/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const maxDepth = function(root) {
    if(!root) return 0;
    let stack = [root]
    let depth=0;
    while(stack.length){
        // 每一次根据stack的长度遍历这一层，并且将这一层的东西放空才算结束
        let floorSize = stack.length;

        while(floorSize>0) {
            const item = stack.shift();
            if(item.left) stack.push(item.left)
            if(item.right) stack.push(item.right)
            floorSize--;
        }
        depth++
    }
    return depth
};

let root={
    val: 1,
    left:{
        val:2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right:{
        val: 3,
        left: null,
        right: {val: 5, left: null, right: null}
    }
}
const result = maxDepth(root)

console.log(result);
