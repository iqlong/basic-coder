/**
 *
 * @param s string字符串
 * @return bool布尔型
 */
function isValid( s ) {
    // write code here
    const len = s.length;
    let stack = []
    for(let i=0; i<len; i++) {
        // the condition that causes the push
            // include '(' '[' '{'
        const item = s[i]
        const lastStackItem = stack[stack.length - 1]
        if(item == '(' || item == '[' || item == '{') {
            stack.push(item)
        }else if(item == ')' && lastStackItem == ')') {
            // whether it can be pop
            stack.pop()
        }else if(item == ']' && lastStackItem == ']') {
            stack.pop()
        }else if(item == '}' && lastStackItem == '}') {
            stack.pop()
        }else {
            return false
        }
    }
    // in the end, if stack is empty, that means the parentheses are valid
    return stack.length == 0

}
module.exports = {
    isValid : isValid
};
