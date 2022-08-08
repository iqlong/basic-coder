/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
    if(num == 0) return 0;
    for(let i = 1; i<=10; i++) {
        const tempNum = i * k;
        if(tempNum % 10 === num % 10 && tempNum <= num) {
            return i
        }
    }
    return -1
};

const res = minimumNumbers(
    // 58, 9
    37, 2
)
console.log(res)
