/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    //所以的罗马元字符: 贪婪比较
    // let romaChar = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], 
    // [100, "C"], [90, "XC"], [50, "L"],[40, "XL"], [10, "X"], 
    // [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    // let sArray = s.split('');
    // let index = 0;
    // let num = 0;
    // while (index < s.length) {
    //     let more = s.slice(index, index + 2);
    //     let less = s.slice(index, index + 1);
    //     for (const [value,key] of romaChar) {
    //         if (more == key) {
    //             index += 2;
    //             num += value;
    //             break;
    //         } else if (less == key) {
    //             index++;
    //             num += value;
    //             break;
    //         } 
    //     }
    // }
    // return num;

    //深入原理写代码：选两个逐一比较,若小的在大的前则减，否则增

   
   };