/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    let map = new Map()
    let days= 0;
    for(let i=0; i<tasks.length; i++) {
        const item = tasks[i];
        if(!map.has(item) || map.get(item) == 0) {
            days++
            map.set(item, space)

            map.forEach((innerItem, index) => {
                if(innerItem >= 1 && index !== item) {
                    map.set(index, innerItem - 1)
                }
            })
            // 之前的都减1
        }else {
            // days += map.get(item)
            days++
            i--
            map.forEach((innerItem, index) => {
                if(innerItem >= 1) {
                    map.set(index, innerItem - 1)
                }
            })
        }
    }
    return days
};

// let res = taskSchedulerII([1,2,1,2,3,1], 3)
let res = taskSchedulerII([1,2,1,2,3,1], 3)

console.log(res)
