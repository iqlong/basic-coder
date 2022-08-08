/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const array = [
        ['','M','MM','MMM'],    //千：1000-3000
        ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
        ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
        ['','I','II','III','IV','V','VI','VII','VIII','IX']
    ];
    let roman = '';
    roman+=array[0][parseInt(num/1000)];
    roman+=array[1][parseInt(num/100%10)];
    roman+=array[2][parseInt(num/10%10)];
    roman+=array[3][parseInt(num/1%10)];
    return roman
};
console.log(intToRoman(156))

// 官方的精华：模拟法
var intToRoman = function(num) {
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], 
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], 
        [4, "IV"], [1, "I"]];
    const roman = [];
    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            roman.push(symbol);
        }
        if (num == 0) {
            break;
        }
    }
    return roman.join('');
};