/**
 *         题目概述
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

    注意：答案中不可以包含重复的三元组。
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 *    思维过程
 * [-8, -5, -2, 0, 3, 4, 6, 8]
 *  若是排序后的，index=0 && index=length-1 都大于或者都小于result，那么直接返回 []
 *   判断三数之和的 result 是什么，找到距离result最近的，然后以此为界
 *      1. 判断这个数(aimIndex)是大于result还是小于result
 *          - 大于
 *              分成 [0 --- aimIndex-1] 和 [aimIndex --- length-1]  两个子数组
 *          - 小于或者等于
 *              分成 [0 --- aimIndex]   和 [aimIndex+1 --- length-1]
 *      2. 然后再左右两个子数组中
 *         按照左2右1 || 左1右2  两种情况遍历数组
 *        ** 左右遍历方向相反 应该可以快一点找到正确结果
 *
 * */

const threeSum = function(nums) {
    // 1. 第一步可定是将数据排序，以让后续的操作变得简单
    nums.sort((a,b) => {
        // 不自己写一下 参函 函数内部会比较字符串的大小
        return a-b;
    });

    // 为了方便 -- 少些几个字母而创建的变量，所以一开始就需要加上
    let len = nums.length;
    let start = nums[len-1];
    let end = nums[0];
    // 需要找到的数字
    let result=0;

    // 一开始判断不符合情况的条件直接返回结果：
    // 数组长度是三个，少于三个/不满足条件
    if(nums.length == 3) {
        if(nums[0]+nums[1]+nums[2] == result)
            //题目要求，若是有满足条件需要返回一个二维数组
            return [nums];
        else return []
    }else if(len<3) {
        return [];
    }else if (end>=result&&start>=result || end<=result&&start<=result) {
        // 要考虑 [0,0,0,4,5]  [-1,0,0,0] [-1,0,0]  这种临界情况
            //避免后面的leftArray 和 rightArray为空
        let firMatch=nums.indexOf(result),lasMatch=nums.lastIndexOf(result);
        if(firMatch!=-1 && lasMatch!==-1 && lasMatch-firMatch>1) {
            return [[result,result,result]];
        }
        return [];
    }

    let difValue = Math.abs(nums[0]-result);
    let aimIndex = 0;
    // 2. 第二步是找到aimIndex然后将数组一分为二
        // !!!!!分组还要考虑多个重复的值的划分
    for(let i=1; i<len; i++) {
        let tempDif = Math.abs(result-nums[i]);
        // ↑面的 ! 再这里处理
            // 这里又要考虑距离0左右相等的临界条件
            // 这样就不用考虑，大于/小于的leftArray和rightArray的分组情况
        if(tempDif <= difValue && nums[i]<=result) {
            difValue = tempDif;
            aimIndex = i;
        }else {
            break;
        }
    }
    let lefArray = [],rightArray=[];
    // if(nums[aimIndex]-result) {
    //     lefArray = nums.slice(0, aimIndex);
    //     rightArray = nums.slice(aimIndex, len);
    // }else {
        lefArray = nums.slice(0, aimIndex+1);
        rightArray = nums.slice(aimIndex+1, len);
    // }

    // 3. 根据条件遍历left和rightArray
    let conformArr = [];
    //     左2右1;  数多的由近到远，数少的由远到近
        // 因为和result相等的也会放在leftArray中，
    let firMatch=lefArray.indexOf(result),lasMatch=lefArray.lastIndexOf(result);
    if(firMatch!=-1 && lasMatch!==-1 && lasMatch-firMatch>1) {
        conformArr.push([result,result,result])
    }

    for(let j=lefArray.length-1; j>=0; j--) {
        for (let k=j-1; k>=0; k--) {
            // 第三层循环就不用for原生来写了，用indexOf然那个代码开的美观一点
                // 且返回的数组中不要有重复的数字，所以子数组中有重复的数字对结果也影响不大
            let searchValue = result-lefArray[j]-lefArray[k];
            let innerIndex = rightArray.indexOf(searchValue);
            // 这里要考虑到0的情况
            if(innerIndex != -1) {
                conformArr.push([ lefArray[j], lefArray[k], rightArray[innerIndex] ]);
            }

        }
    }

    //     右2左1
    for(let j=0; j<rightArray.length; j++) {
        for (let k=j+1; k<rightArray.length; k++) {
            let searchValue = result-rightArray[j]-rightArray[k];
            let innerIndex = lefArray.indexOf(searchValue);
            if(innerIndex != -1) {
                conformArr.push([ rightArray[j], rightArray[k], lefArray[innerIndex] ]);
            }

        }
    }

    // 返回之前还存在二维数组去重的问题
        // !!!这儿一定要用迭代器改进一下
    if(conformArr.length) {
        let noRepeatCfm = [conformArr[0].join(',')];
        conformArr.forEach( (item, index) => {
            let str = item.join(',')
            if(noRepeatCfm.indexOf(str)==-1) {
                noRepeatCfm.push(str);
            }
        })
        let aar = noRepeatCfm.map((item) => {
            let arr = item.split(',');
            let temp = arr.map((value) => {
                return parseInt(value);
            })
            return temp;
        })
        return aar;
    }else {
        return conformArr
    }

};

console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))
