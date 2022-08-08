/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */

// debug four times
// 边界条件考虑得太多了

var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    // 数组不一定有序； 数组中的时间都不相同

    // 最后一辆车，时间不同，可以上车
    let sortedBus = buses.sort( (a, b) => a - b);
    const busLen = buses.length
    let sortedPas = passengers.sort( (a, b) => a - b);
    const pasLen = passengers.length;

    let index = 0
    let trueNum;
    for(let busIdx=0; busIdx<busLen; busIdx++) {
        let tempNum = capacity;
        while(index < pasLen && tempNum > 0) {
            const pasTime = sortedPas[index]
            if(pasTime <= sortedBus[busIdx]) {
                tempNum --;
                // 最后出来的index 是不合格的
                index ++;
            }else {
                break
            }
        }
        // 判断最后一辆车是可以坐人还是不可以坐人
        if(busIdx == busLen - 1) {
            tempNum == 0 ? trueNum = sortedPas[index - 1] : trueNum = sortedBus[busIdx]
        }
    }
    for(trueNum; trueNum > 0 && trueNum == sortedPas[index - 1]; trueNum--) {
        index >= 0 && index --;
    }

    return trueNum

};
