//横向比较
var longestCommonPrefix = function(strs) {
    if(strs.length ==0) return '';
    if(strs.length ==1) return strs[0];
    let tempStr = strs[0];
    let result = '';
    for(const str of strs) {
        let index = 0;
        for(ch of tempStr){
            //虽然一直可以找到，但若是到头了也要执行类似else的东西
            if(ch == str[index]) {
                result+=ch;
                index++;
                if( result==tempStr ){
                    tempStr = result;
                    result = '';
                    break;
                }
            }else {
                tempStr = result;
                result = '';
                break;
            }
        }
        if(tempStr == '')
            break;
    }
    return tempStr;
};