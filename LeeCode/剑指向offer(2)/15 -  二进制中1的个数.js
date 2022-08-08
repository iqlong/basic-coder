/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log('@',n)
    let num=0;
    n.toString(2).split('').forEach((item) => {
        console.log(item)
        if(item == '1'){
            num++;
        }
    })
    return num
};
hammingWeight(11)
