/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    const kStr = k.toString(2)

    const len = s.length;
    const kLen = kStr.length;

    if(len < kLen) {
        return len
    }else if(len == kLen) {
        if(Number(s) > k) {
            return len - 1
        }else {
            return len
        }
    }

    let stack;
    let i;
    stack = s.substring(len - kLen).split('')

    for(i=len-kLen-1; i>=0; i--) {
        if( parseInt(stack.join(''), 2) <= k ) {
            break
        }else {
            stack.pop()
            stack.unshift(s[i])
        }
    }
    // 判断大小，看stack是否顺利退出
    if( parseInt(stack.join(''), 2) <= k ) {
        let n=0;
        for(const char of s.substr(0, i + 1)) {
            char == '0' ? n++ : ''
        }
        return n + kLen
    }else {
        return kLen - 1
    }
};

let res = longestSubsequence('1001010', 5)
console.log(res)
