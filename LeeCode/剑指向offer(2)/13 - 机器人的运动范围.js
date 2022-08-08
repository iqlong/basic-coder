/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 获取某个数字各个位置上数字的和
function byteSum(n){
    let sum=0
    while(n>=1){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum
}

var movingCount = function(m, n, k) {
    let arr=[];
    // 创建一个二维数组
    for(let x=0; x<m; x++){
        arr.push(new Array(n))
    }
    function search(mm, nn, kk, arr){
        console.log(mm,nn,arr.length)
        let flag = nn<0 || mm<0 || mm>=m-1 || nn>=n-1 || arr[mm][nn]==true || byteSum(mm)+byteSum(nn)>kk;
        if(flag){
            return 0
        }else {

            arr[mm][nn]=true;
            return 1+search(mm+1, nn, kk, arr)+search(mm, nn+1, kk, arr)
        }
    }
    return search(0, 0, k, arr)
};

let res = movingCount(13,23,10)
console.log(res)














