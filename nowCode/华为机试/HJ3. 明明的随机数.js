/**
 * ACM mode
 * */
let flag = true
let line

let len;
let arr = []
let set = new Set()
// 利用输入输出去重
while (line = readline()) {
    const inputVal = parseInt(line)
    if(flag) {
        len = inputVal
        flag = false
    }else {
        if(!set.has(inputVal)) {
            arr.push(inputVal)
        }
    }
}
