/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */

var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let changeNum = k1 + k2
    const len = nums1.length
    const sortNums1 = nums1
    const sortNums2 = nums2

    let gapArr = []
    for(let i=0; i<len ; i++) {
        gapArr[i] = Math.abs(sortNums1[i] - sortNums2[i])
    }
    gapArr = gapArr.sort( (a, b) => b - a )
    while(changeNum > 0) {
        // desc
        // gapArr = gapArr.sort( (a, b) => b - a )
        if(gapArr[0] !== 0) {
            gapArr[0] --;

            // 获取最大值后交换，最好的情况下时间复杂可以低一些
            // 相对于每次都要遍历全部的数组获取最大值和sort()
            for(let i=0; i<len; i++) {
                if(gapArr[i] < gapArr[i + 1]) {
                    const item = gapArr[i]
                    gapArr[i] = gapArr[i + 1]
                    gapArr[i + 1] = item
                }
            }
            changeNum --;
        }else {
            break
        }

        // change sort() to findMaxValue()
        // let index = 0;
        // for(let i=1; i<len; i++) {
        //     gapArr[i] > gapArr[index] ? index = i : ''
        // }

        // if(gapArr[index] == 0) {
        //     break
        // }else {
        //     gapArr[index] --
        //     changeNum --
        // }
    }
    const resSum = gapArr.reduce( (pre, cur) => {
        return pre + cur ** 2
    }, 0)
    return resSum
};

