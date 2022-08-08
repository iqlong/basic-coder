/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 由于只需要使用一次nextBigRank，就可以不用再封装 swap 和 nextReverse 方法了
    let len=nums.length;
    let i=len-2,j=len-1;
    while(i>=0 && nums[i]>=nums[i+1]){
        i--
    }
    if(i<0){
        // 说明此时数字达到最大值了，即数组降序排列
        return nums.sort()
    }
    while(j>=0 && nums[j]<=nums[i]){
        j--
    }
    function swap(arr, i, j){
        const temp = arr[i]
        nums[i] = arr[j]
        nums[j] = temp;
    }
    swap(nums, i, j)

    let left = i+1,right = len-1;
    while (left<right){
        swap(nums, left, right)
        left++;
        right--
    }

    return  nums
};
const nums = [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
console.log(nextPermutation(nums))
// console.log(nums.sort((a,b) => a-b))
