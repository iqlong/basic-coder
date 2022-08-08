/**
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
function twoSum( numbers ,  target ) {
    // write code here
    // map: key 需要的数组的值，value 保存着数组的index
    const len = numbers.length;
    let map = new Map()
    for (let i=0; i<len; i++) {
        const curVal = numbers[i]
        if(map.has(target - curVal)) {
            return [map.get(target - curVal) + 1, i+1]
        }else {
            map.set(curVal, i);
        }
    }
    return []
}
module.exports = {
    twoSum : twoSum
};
