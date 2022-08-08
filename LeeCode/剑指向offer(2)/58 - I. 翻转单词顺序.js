/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.split(' ').filter(item => item!=='');
    arr=arr.map(item => {
        console.log(item)
        return item.trim()
    })
    const result = arr.reverse().join(' ')
    return result
};
reverseWords("  hello world!  ")


/**
 * 使用split()分开，然后filter+map
 */
const reverseWords = function(s) {
    // filter去除split产生的'' ==> 示例：' fdf f'
    let arr=s.split(' ').filter(item => item!=='');
    // 有效结果去除首尾空格
    arr=arr.map(item => {
        return item.trim()
    })
    const result = arr.reverse().join(' ')
    return result
};


/**
 * 使用string.match(RegExp)
 */
const reverseWords = function(s) {
    // 也可以是\s(匹配任何空白字符，包括空格、制表符、换页符等等),  /x20特指 '空格'
    const testReg=/^\x20*$/;
    if( testReg.test(s) ) return '';
    // 使用match和数组的reverse
    const matchReg=/\S+/g
    const result = s.match(matchReg).reverse().join(' ');
    // console.log(result)
    return result
};

/**
 * 知识储备：
 *   和正则有关的方法：
 *     match()    search()   replace()
 *     exec()   test()
 *     split()
 * */
