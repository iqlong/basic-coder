/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    // 若是pushed数组为空了，popped数组还是存在值，那么就返回false，否则返回true
    const pushLen = pushed.length,popLen = popped.length;
    if(pushLen !== popLen) return false
    if(!pushLen && !popLen) return true

    const firIndex = pushed.indexOf(popped.shift());
    let otherPushed;
    if(firIndex!==-1){
        otherPushed = pushed.slice(firIndex+1)
        pushed = pushed.slice(0, firIndex);
    }else {
        return  false;
    }
    while(popped.length){
        // 若入栈数组为空，出栈数组不为空，返回false
        if(!pushed.length && !otherPushed.length) return false
        const pupNum = popped.shift();
        // 若此元素在pushed最后，pushed.pop()；否则返回false
            // 若在pupNum中遇到，就将index之前的移动到pushed，
        const index = pushed.indexOf(pupNum);
        if(index==pushed.length-1 && index!==-1){
            // splice()会改变自生
            pushed.pop()
        }else if(index==-1) {
            const otherIndex = otherPushed.indexOf(pupNum)
            if(otherIndex==-1){
                return false
            }else {
                const tempArr = otherPushed.splice(0, otherIndex+1);
                pushed=pushed.concat(tempArr.slice(0,tempArr.length-1))
            }
        }else {
            return false
        }
    }
    return true;
};
let res = validateStackSequences(
    [4,0,1,2,3],
[4,2,3,0,1]
    )
console.log(res)
/**
 * 下面都是返回应该为true的例子
 * */
//[0,2,1],
//         [0,1,2])
//[2,1,3,0],
//         [1,0,3,2]
//[4,0,1,2,3]
// [4,2,3,0,1]
