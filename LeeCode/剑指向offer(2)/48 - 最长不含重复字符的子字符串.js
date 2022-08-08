/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if(len < 2) return len

    let temp = [], maxLen = 0;
    let index = 0

    while(index < len) {
        const tempIdx = temp.indexOf(s[index])

        if(tempIdx !== -1) {
            // 考虑到最长
            temp = temp.slice(tempIdx + 1);
        }
        temp.push(s[index]);

        const tempLen = temp.length;

        if(tempLen > maxLen)    maxLen = tempLen;

        index++;
    }
    return maxLen;
};
