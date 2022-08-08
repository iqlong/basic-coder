/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry;
    const len = digits.length


    if(digits[len - 1] + 1 == 10) {
        digits[len - 1] = 0;
        carry = 1
    }else {
        digits[len - 1] += 1;
    }
    // 数字的低位 -> 高位   =====>  数组从后往前遍历
    for(let i=len - 2; i>=0 && carry; i--) {
        // 先加上在判断 carry是否等于1
        if(carry + digits[i] == 10) {
            digits[i] = 0
        }else {
            digits[i] = carry + digits[i]
            carry = 0
            break
        }
    }
    carry == 1 && digits.unshift(1)

    return digits

};
