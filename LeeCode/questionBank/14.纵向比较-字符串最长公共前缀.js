// 纵向比较法
var longestCommonPrefix = function(strs) {
    let same = '';let index = 0;
    let minLen=strs[0].length;
    let n =0;
    strs.forEach(element => {
        element.length<minLen ? minLen=element.length : minLen
    });
    while(index<minLen) {
        for(const str of strs) {
            if(str.length == 0) {
                return "";
            }else if(strs.length == 1){
                return str[0];
            }else {
                if(str[index] == strs[0][index] ) {
                    
                    if(n == (strs.length-1) ) {
                        same+=str[index];
                        index++;
                        n=0;
                        break;
                    }
                }else {
                    return same;
                }
            }
            n++;
        }
    }
    return same;
};