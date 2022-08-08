/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    // 不可抵达的节点
    let res = 0;
    let connectToZero = [0]
    edges.forEach(item => {
        let index = item.indexOf(0);
        if(index !== -1) {
            index === 0 ? connectToZero.push(item[1]) : connectToZero.push(item[0])
        }

    })
    edges.forEach((item) => {
        if(restricted.includes(item[0])) {
            // 另外一个元素不和0直接相连 且 不等于0
            if(!connectToZero.includes(item[1])) {
                restricted.push(item[1])
            }
            res ++
        }else if(restricted.includes(item[1])) {
            if(!connectToZero.includes(item[0])) {
                restricted.push(item[0])
            }

            res ++
        }

    })

    return n - res
};

let res = reachableNodes(
    4,
        [[2, 1], [1, 0], [0, 3]],
        [3, 2]
)

console.log(res)
