/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 我的写法
 * CPU害怕的两个for循环
 * */
let sortColors = function(nums) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i]>nums[j]) {
                //不借助第三个变量交换两个数字的值
                nums[i] = nums[i]+nums[j];
                nums[j] = nums[i]-nums[j];
                nums[i] = nums[i]-nums[j];
            }
        }
    }
};

/**
 * 不可以通过的方法 ------ 数据类型不可以随便更改
 * 思想： 三个东西，把两个东西放两边，剩下的就是在中间了
 *      0: 红色   1: 白色   2: 蓝色
 * */
let sortColor = function(nums) {
    let redIndex = 0;
    let blueIndex = nums.length-1;
    let ggTemp = '';
    for(let n=0; n<nums.length; n++) {
        if(nums[n] === 0) {
            ggTemp = nums[redIndex];
            nums[redIndex] = nums[n];
            nums[n] = ggTemp;
            redIndex++;

        }else if(nums[n] ===2 ) {
            ggTemp = nums[blueIndex];
            nums[blueIndex] = nums[n];
            nums[n] = ggTemp;
            blueIndex--;
            //
        }
    }
}
