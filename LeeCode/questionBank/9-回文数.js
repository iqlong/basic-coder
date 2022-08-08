/**
 * @param {number} x
 * @return {boolean}
 */
    // 使用字符串进行比较，转换啥的消耗有点高!   边反转边比较开始和结束!!!(也可以转一半后再比较)
        // 196 ms	47.3 MB         数字 -> 字符串：需要额外的非常量空间!    
// var isPalindrome = function(x) {
//     const xString = x.toString();
//     let start = 0,end = xString.length-1;
//     while(start < end) {
//         if(Number(xString[start]) == Number(xString[end])) {
//             start++;
//             end--;
//         }else {
//             return false;
//         }
//     }
//     return true;
// };
    // 使用字符串有的方法：全部反转在比较 
        // 212 ms	46.1 MB
// var isPalindrome = function(x) {
//     const xArray = x.toString().split('');
//     const reverseX = xArray.reverse().join('');
//     return reverseX == x;
// };

    // 使用数字的计算去写（全部转换），但是会执行完在去，不会中断一般就知道，
        // 148 ms	46.5 MB         注意：js是弱类型语言，所以11/2 = 5.5,要手动Math.floor()转换一下!
// var isPalindrome = function(x) {
//     //将整个x翻转在比较是否相等
//     if(x<0 || x%10===0 && x!=0) {
//         return false
//     }else {
//         let y=0;
//         let tX = x;
//         while(tX != 0) {
//             let value = tX%10;
//             y = y*10+value;
//             tX = Math.floor(tX/10);
//         }
//         return x==y;
//     }
// };
    //下面显示用数字转一半在比较和转一半边比较的试试        看哪个好？
        //172 ms	46.4 MB
    var isPalindrome = function(x) {
        if(x<0 || x!=0 && x%10==0) {
            return false;
        }else {
            let y=0;
            //领界点变成了中间!
            while(x > y) {
                y = y*10+x%10;
                x = Math.floor(x/10);
            }
            console.log(x,y)
            return x==y || x==Math.floor(y/10);
        }
    
    };
    console.log(isPalindrome(121));