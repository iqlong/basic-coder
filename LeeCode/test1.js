/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    // 暴力枚举
    // 环使用 Map 去重
    let res = []

    let start = node1, end = node2
    let startMap = new Map()
    let endMap = new Map()

    let startLen = 0, endLen = 0;

    while(start !== -1) {
        if(startMap.has(start) ) break
        startMap.set(start, startLen ++)
        start = edges[start]
    }

    while(end !== -1) {
        if(endMap.has(end) ) break
        endMap.set(end, endLen ++)
        end = edges[end]
    }

    // key是节点的名字，val是初始node到 key 节点的距离
    startMap.forEach((item, index) => {
        if(endMap.has(index)) {
            const realItme = Math.max(item, endMap.get(index))
            if(res.length == 0 || realItme < res[1]) {
                res[0] = index;
                res[1] = realItme
            }else if(realItme == res[1] && index < res[0]) {
                res[0] = index;
            }
        }
    })

    if(res.length == 0) {
        return -1
    }else {
        return res[0]
    }
};
let res = closestMeetingNode(
[4,4,8,-1,9,8,4,4,1,1],
5,
6
// [2,2,3,-1],
// 0,
// 1
)
console.log(res)
