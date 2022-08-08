/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */

// 看错题目了，是按照顺序的，所以没有自己想的那么

var taskSchedulerII = function(tasks, space) {
    let taskArr = [];
    let taskMap = new Map();

    tasks.forEach((item) => {
        if(taskMap.has(item)) {
            taskMap.set(item, taskMap.get(item) + 1)
        }else {
            taskMap.set(item, 1)
            taskArr.push(item)
        }
    })

    let index = 0;
    let days = 0;
    let timeMap = new Map()
    while (taskArr.length) {
        if(index >= taskArr.length) {
            index = 0
            days += timeMap.get(taskArr[0])
        }
        // taskMap中合法且 若是到头来要看看
        const taskName = taskArr[index]
        // 办任务
        let v;
        if( !timeMap.has(taskArr[0]) ) {
            timeMap.set(taskArr[0], space)
            taskMap.set(taskName, taskMap.get(taskName) - 1)

        }else {
            // 三个用于记录的都要改变：   timMap  taskArr  taskMap
            taskMap.set(taskName, taskMap.get(taskName) - 1)
            timeMap.set(taskArr[0], timeMap.get(taskArr[0]) - 1 < 0 ? 0 : timeMap.get(taskArr[0]) - 1)

        }

        if(taskMap.get(taskName) == 0) {
            v = taskArr.splice(index, 1);
        }

        if(v !== undefined && index == 0) {
            timeMap.set(taskArr[0], space)
            index --;
        }else {
        }

        days ++
        index ++
    }

    return days

};

const res = taskSchedulerII(
    [5,8,8,5],
    2

    // [1,2,1,2,3,1],
    // 3
)
console.log(res)
