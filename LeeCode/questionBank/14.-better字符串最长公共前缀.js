//巧妙的利用字符串的排序：让最后只要比较开始和结束位置就可以了
var longestCommonPrefix = function(strs) {
    let strsSorted = strs.sort( (a,b) => {
        if(a>b) {
            return 1;
        }else if(a==b) {
            return 0;
        }else{
            return -1;
        }
    })
    let result = '';
    let len = strsSorted.length;
    for(let a=0;a<strsSorted[0].length;a++) {
        if(strsSorted[0][a] == strsSorted[len-1][a]) {
            result+=strsSorted[0][a];
        }else {
            break;
        }
    }
    return result;
};
console.log(longestCommonPrefix(["dog"]))