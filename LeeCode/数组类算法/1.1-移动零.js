/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
    /**
     * 我的解决方法
     * */
let moveZeroes = function(nums) {
    // i作为index当作函数指针
        // n控制函数执行的次数
    // 感觉上面的东西想反了
    let i =0;
    let startLen = nums.length;
    // nums.forEach((item, index,array)=> {
        // 通过index来控制的，但index貌似又不可以变化，函数又不可以break什么的
    for(let n=0;n<startLen;n++) {

        if(nums[i] === 0) {
            array.splice(i, 1);
            i--;
            // array.push(0);
        }
        i++;
    }
    let endLen= nums.length;
    nums.length = startLen;
    nums.fill(0,endLen,startLen);
};

/**
 * 评论区的解决方案
 * */
function moveZeroes(nums){
    // 思路：将非零的数字前移动，由于后面的都是0， 用覆盖不用数组间的swap
    // index和index后面的都是要归零的数
    let index = 0;
    for(let n=0;n<nums.length;n++) {
        if(nums[n]!==0) {
            nums[index] = nums[n];
            index++;
        }

    }
    nums.fill(0,index,nums.length);
}

/**
 * 评论区的双指针解决方案
 * */
function moveZeroes(nums){
    let zeroNum = 0;
    for(let n=0;n<nums.length;n++) {
        if(nums[n]===0) {
            zeroNum++;
        }else if(zeroNum!=0) {
            // 若是遇到非0，就和第一个0(n-zeroNum交换顺序) --- 由于第一次开始zero就和后面的交换顺序了，可以迭代
            nums[n-zeroNum] = nums[n];
            nums[n]=0;
        }
    }
}

let array = [0,0,1];
moveZeroes(array);
console.log(array);
