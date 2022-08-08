/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function leafNode(node) {
    return node.left || node.right
}
function mid(root, pre={}, res) {
    if(!root) return
    // 中序遍历 - 边遍历边连接链表
    if(!leafNode(root)) {
        // 左/右 叶子节点的输出
        if(pre.node) {
            root.left = pre.node
            pre.node.right = root
        }
        // 头节点不给pre，之后和尾节点单独处理
        pre.node = root
        if(!res.list) res.list = root
    }else {
        mid(root.left, pre, res)
        // 根节点的输出
        if(pre.node) {
            root.left = pre.node
            pre.node.right = root
        }
        // 头节点不给pre，之后和尾节点单独处理
        pre.node = root
        if(!res.list) res.list = root
        mid(root.right, pre, res)
    }
}
var treeToDoublyList = function(root) {
    if(!root) return root
    if(!root.left &&! root.right) {
        root.left = root,
            root.right = root
        return root
    }
    let res = {};
    mid(root, undefined, res)
    // console.log(root)
    // 头尾需要单独找出来
    let tempRoot = res.list
    do {
        // console.log(tempRoot.val, tempRoot.right)
        tempRoot = tempRoot.right
    }while ( tempRoot.right )
    // console.log(res.list.val, tempRoot.val)
    res.list.left = tempRoot
    tempRoot.right = res.list
    return res.list
};
