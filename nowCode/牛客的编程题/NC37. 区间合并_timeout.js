/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 *
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
function merge( intervals ) {
    // write code here
    // 按照首位排序
    let sortedIntervals = intervals.sort( (pre, cur) => {
        if(pre.start > cur.start) {
            return 1
        }else if(pre.start < cur.start) {
            return -1
        }else {
            return 0
        }
    })

    const  len = sortedIntervals.length;
    if(len <= 1) return sortedIntervals
    for(let i=1; i<sortedIntervals.length; i++) {
        const cur = sortedIntervals[i]
        const pre = sortedIntervals[i - 1]
        if(cur.start > pre.end || pre.start > cur.end) {
            // 前后没有交集
            // do nothing
        }else {
            sortedIntervals[i] = {
                start: Math.min(pre.start, cur.start),
                end:   Math.max(pre.end, cur.end)
            }
            sortedIntervals.splice(i-1, 1)
            i--;
        }
    }

    return  sortedIntervals
}
module.exports = {
    merge : merge
};

// let res = merge([[10,30],[20,60],[80,100],[150,180]])
// console.log(res)
