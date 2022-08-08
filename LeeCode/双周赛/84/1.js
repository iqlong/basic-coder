/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const combineArr = items1.concat(items2)
    let map = new Map()
    combineArr.forEach((item, index) => {
        if(!map.has(item[0])) {
            map.set(item[0], item[1])
        }else {
            map.set(item[0], item[1] + map.get(item[0]))
        }
    })

    // 合并之后排个序
    const res = Array.from(map).sort((pre, cur) => {
        return pre[0] - cur[0]
    })
    return res
};
