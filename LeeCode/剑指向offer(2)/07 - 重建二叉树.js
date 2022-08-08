/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function dg(tree,L,R,preorder){
    if(!L.length && !R.length){
        tree.left=null
        tree.right=null
        return
    }
    // 左子树和右子树的长度
    const lLen = L.length,rLen = R.length;
    // 整个树的长度
    const tLen = preorder.length;
    // 先序遍历的leftTree截取
    const lPreorder=preorder.slice(1,1+lLen)
    const rPreorder=preorder.slice(tLen-rLen,tLen)


    // 实参利用数组的解构
}
function arrSplit(val){
    const index = this.indexOf(val);
    // 不用包含index上的元素
    const lA=this.slice(0,index)
    const rA=this.slice(index+1, this.length)
    return [lA, rA]
}
var buildTree = function(preorder, inorder) {
    if(!preorder.length)return preorder
    let tree=new TreeNode(preorder[0]),treePoint=tree;
    let root = preorder[0];
    let [leftAll,rightAll]=arrSplit.call(inorder,root);

    dg(treePoint,leftAll,rightAll,preorder);
    console.log(tree)
    return tree

};
buildTree([1,2],[2,1])
