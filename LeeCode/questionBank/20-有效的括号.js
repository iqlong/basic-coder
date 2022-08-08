/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let leftStr = ['(','[','{'];
    let rightStr = [')',']','}'];
    // 在数组中使用各种方法以模拟队列/堆栈
    let arr = [];
    let sLen = s.length;
    for(let n=0; n<sLen; n++){
        if( leftStr.indexOf(s[n]) !==-1 ){
            arr.push(s[n]);
        }else if( rightStr.indexOf(s[n]) !==-1 ){
            // 只可以消除数组最后的对应括号  lastIndexOf找得到且是最后一个元素
            // 这里找不到为-1，但由于长度是0，所以刚好相等
            let temp = arr.lastIndexOf(leftStr[rightStr.indexOf(s[n])]);
            if(temp === arr.length-1 && temp!==-1){
                arr.pop(arr[arr.length-1]);
            }else{
                // 若是有一个不对称就可以直接返回了
                return false
            }

        }
    }
    // 循环结束，根据数组是否为空返回值
    return arr.length === 0;
};
