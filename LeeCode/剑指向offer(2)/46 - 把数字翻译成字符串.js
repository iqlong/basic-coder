/**
 * @param {number} num
 * @return {number}
 */

var translateNum = function(num) {
    let numStr = num.toString();

    // 递归写在函数内部并使用函数中变量，就相当于给递归函数传递引用参数
    let resNum=0;

    function dg(nStr, index = 1) {
        // 根据最后的数字个数 判断可以产生几个 1 or 2
        if(parseInt(nStr) < 10) return resNum++
        if(parseInt(nStr) >= 10 && parseInt(nStr) <= 25) return resNum += 2

        while( Number( nStr.substr(0, index) ) <=25
               && Number( nStr.substr(0, index) ) >= 0 ) {
            const pre = nStr.substr(0, index)

            if(pre.length >= 2 && pre[0] == '0') return
            console.log(`pre: ${nStr.substr(0, index)}; 
                nStr: ${nStr}; index: ${index}; resNum: ${resNum}`);

            dg(nStr.substr(index))
            index++
        }
    }

    // let tempStr
    dg(numStr)
    return resNum
};

let res = translateNum(419605557)
console.log(res)











