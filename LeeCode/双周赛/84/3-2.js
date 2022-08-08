var taskSchedulerII = function(tasks, space) {
    let ans = 0, hash = {}
    for(let t of tasks){
        ans = Math.max(ans + 1, hash[t] ?? 0)
        hash[t] = ans + space + 1
    }
    return ans
};

// let res = taskSchedulerII([1,2,1,2,3,1], 3)
let res = taskSchedulerII([1,2,1], 3)

console.log(res)
