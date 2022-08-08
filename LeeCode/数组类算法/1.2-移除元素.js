/**
 * 使用移动零的那种方式  评论区的第一种方案
 * 执行用时： 44 ms       内存消耗： 41.2 MB
 * */
let removeElement = function(nums, val) {
    let index = 0;
    for(let i=0; i<nums.length; i++) {
        // 移动非0元素，移动完之后就是0元素的正确排序
        if(nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    // 想要的排序完成了，就是将val一起都删除
    nums.length = index;
};

/**
 * 。。。     评论区的第二种方案
 * 执行用时： 60 ms    内存消耗： 41.2 MB
 * */
let removeElement = function(nums, val) {
    // 记录val的数量
    let valNum = 0;
    nums.forEach((item,index)=> {
        if(item===val) {
            valNum++;
        }else if(valNum!=0) {
            nums[index-valNum] = nums[index];
            nums[index] = val;
        }
    })
    // 获得到需要的排序后之后
    nums.length = nums.length-valNum;

}

/**
 * 第一种和第二种方式的比较和反思：
 *      消耗的内存是一样的，都是在一个数组中操作；
 *      但是第一种方式用的数组不用swap，只是覆盖就行
 *   * 想要简化操作，就这个删除而言：删除是一定要删除的，但是可以将多少删除化为一次删除
 *      * 既然操作必须要操作，那么就考虑减少频率
 * */
