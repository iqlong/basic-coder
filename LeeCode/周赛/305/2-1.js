var reachableNodes = function(n, edges, restricted) {
    let i
    let connectToZero = [0]

    while(1) {
        i=0
        edges.forEach((item, index) => {
            if(connectToZero.includes(item[0]) && !restricted.includes(item[1])) {
                connectToZero.push(item[1])
                edges[index] = [undefined, undefined]
                i++
            }else if(connectToZero.includes(item[1]) && !restricted.includes(item[0])) {
                connectToZero.push(item[0])
                edges[index] = [undefined, undefined]
                i++
            }
        })
        if(i == 0) break
    }
    return connectToZero.length

}

const res = reachableNodes(
    12,
        [[1,5],[1,11],[3,5],[10,1],[9,3],[11,8],[5,2],[2,7],[4,3],[8,6],[0,7]],
        [3,5,10]
)
console.log(res)
