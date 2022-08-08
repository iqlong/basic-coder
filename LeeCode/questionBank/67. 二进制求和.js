/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let min = Math.min(a.length, b.length), max = Math.max(a.length, b.length);
    let maxArr = a.split('')
    let minArr = b.split('')

    let carry = 0;
    if(a.length > b.length) {
        maxArr = a.split('')
        minArr = b.split('')
    }else if(a.length < b.length) {
        maxArr = b.split('')
        minArr = a.split('')
    }
    let i =  min - 1;
    for(let j=max-1; j>=0; j--) {
        const a = parseInt(maxArr[j])
        const b = i<0 ? 0 : parseInt(minArr[i])
        const sum = a + b +carry
        if(sum > 1) {
            maxArr[j] = sum % 2
            carry = 1
        }else {
            maxArr[j] = sum
            carry = 0
        }
        i !== -1 ? i-- : '';
    }
    carry == 1 && maxArr.unshift(1)


    return maxArr.join('')
};


let res = addBinary("11",
"1")
console.log(res)
























