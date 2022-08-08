// 链表中新增了一个random指针，可以指向任意节点(包括自身)
const nodeB = {
    val: 2,
    next: null,
}
nodeB.random = nodeB


const nodeA = {
    val: 1,
    next: nodeB,
    random: nodeB
}

//const rdList = {
//     val: 1,
//     random: {
//         val: 2,
//         next: null
//     },
//     next: {
//         val: 2,
//         next: null,
//
//     }
// }
