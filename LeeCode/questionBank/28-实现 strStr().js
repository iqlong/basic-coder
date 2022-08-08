/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 如果needle是空字符串，就直接返回0
    let nLen = needle.length;

    if(needle === '') return 0;
    if(nLen===1) return haystack.indexOf(needle)

    for(let n=0; n<=haystack.length-nLen; n++){
        if(needle[0] === haystack[n]){
            // 判断是不是之后的元素都相等
            const index = n;
            for(let i=1; i<nLen; i++) {
                if(needle[i] === haystack[++n]){
                    // 若是needle的所有字符都匹配就返回第一个匹配的元素
                    if(i === nLen-1){
                        return index;
                    }
                }else{
                    // 应该不需要影响后面的元素
                    n=index;
                    break;
                }
            }
        }
    }
    // 要是循环结束还没有中间跑路的
    return -1;

};

console.log(strStr('aaa','aaa'));
