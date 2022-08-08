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
    const  len = intervals.length;
    if(len <= 1) return intervals
    for(let i=1; i<intervals.length; i++) {
        const cur = intervals[i]
        const pre = intervals[i - 1]
        if(cur.start <= pre.end) {
            // intervals[i] = [pre[0], cur[1]]
            intervals[i] = {
                start: pre.start,
                end:   cur.end
            }
            intervals.splice(i-1, 1)
            i--;
        }else if(pre.start <= cur.end) {
            //cur在前，pre在后，有交集
            intervals[i] = {
                start: cur.start,
                end:   pre.end
            }
            intervals.splice(i-1, 1)
            i--;
        }else if(cur.end >= pre.end && cur.start <= pre.start) {
            // cur包含pre
            intervals[i] = {
                start: cur.start,
                end:   cur.end
            }
            intervals.splice(i-1, 1)
            i--;
        }else if(pre.end >= cur.end && pre.start <= cur.start) {
            // pre包含cur
            intervals[i] = {
                start: pre.start,
                end:   pre.end
            }
            intervals.splice(i-1, 1)
            i--;
        }
    }
    // 按照首位排序
    let res = intervals.sort( (pre, cur) => {
        if(pre.start > cur.start) {
            return 1
        }else if(pre.start < cur.start) {
            return -1
        }else {
            return 0
        }
    })
    return  res
}
module.exports = {
    merge : merge
};

// let res = merge([[10,30],[20,60],[80,100],[150,180]])
// console.log(res)
