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
    if(!head) return null

    let map = new Map()
    // 原list的指针
    let tempHead = head;
    let res;
    res = { val: head.val }
    // 新list的指针
    let tempRes = res;
    map.set(head, res)
    while(tempHead) {
        // console.log(tempHead.next.val)
        if(tempHead.next !== null) {
            // 要使用 pre和cur 分别表示前一个节点和当前节点
            tempRes.next = {};
            tempRes.next.val = tempHead.next.val;
            // 由于链表中元素不重复，遍历时候可以将节点放入 map 中
            // 用内存地址作为key，唯一标识; value需要深拷贝后的值
            // value值作为引用后续还可以扩张
            map.set(tempHead.next, tempRes.next)
        }else {
            tempRes.next = null
        }


        // 迭代中循环条件的改变
        tempRes = tempRes.next;
        tempHead = tempHead.next;
    }
    // 最终需要将节点的末尾指向null吗？
    // ！！ 这个导致了leetcode 中的判断：solutions.js 出问题了

    // 再去遍历以加上random指针
    // 需要将 tempHead 和 tempRes 指回 head和res
    tempHead = head;
    tempRes = res;
    while(tempHead) {
        // 防止循环引用导致的递归溢出
        tempRes.random = map.get(tempHead.random);

        // 迭代条件的改变
        tempHead = tempHead.next;
        tempRes = tempRes.next;

    }
    // tempHead.next = null

    return res;
};
