/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    res = copyList(head, map)
    return copyRandom(head, res, map)
};

var copyList = function(head, cachedNode = new Map(), randomly) {
    if(!head) return null

    let node = {}
    node.val = head.val
    // 这个对象虽然加入了Map，但是由于引用类型的特征
    // 对象还在成长中
    // key是原来的地址方便random的二次比较，value是深拷贝的方便random的赋值
    cachedNode.set(head, node)
    node.next = copyList(head.next, cachedNode)
    // 当 next 遍历结束后，开始random的执行
    // random也是从头开始

    return node;
}

function copyRandom(head,res, cachedNode = new Map()){
    if(!head) return null
    if(cachedNode.has(head.random)){
        // 应为单项链表的 next 就算node.val 一样也不会造成闭环
        res.random = cachedNode.get(head.random)
        // copyRandomList(node.next)
        // res = res.next;
    }
    copyRandom(head.next, res.next, cachedNode)
    return res

}
