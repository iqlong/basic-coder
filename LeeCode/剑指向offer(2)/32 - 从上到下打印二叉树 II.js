/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    // BFS实现层序遍历
    let queue=[root];
    let result=[];
    for(let  x=0;x<queue.length;x++){
        let temp=[];const item=queue[x];
        let nodeArray=[];
        // 将后面的节点加入queue中
        if(!Array.isArray(item)){
            temp.push(item.val)
            // 将一层的东西放在一个循环子句中
            if(!!item.left && !!item.right){
                queue.push([item.left,item.right])
            }else {
                if(item.left) queue.push(item.left)
                if(item.right) queue.push(item.right)
            }

        }else{
            item.forEach(item => {
                temp.push(item.val);
                if(item.left && item.right){
                    // queue.push([item.left,item.right])
                    nodeArray = nodeArray.concat([item.left,item.right])
                }else {
                    if(item.left) nodeArray = nodeArray.concat(item.left)
                    if(item.right) nodeArray = nodeArray.concat(item.right)
                }

            })
            if(nodeArray.length){
                queue.push(nodeArray)
            }

        }
        result.push(temp);
    }
    return result;

};
let root={
    val: 3,
    left:{
        val: 9,
        left: null,
        right: null
    },
    right:{
        val: 20,
        left: {val: 15, left: null, right: null},
        right: {val: 7, left: null, right: null}
    }
}
levelOrder(root)
