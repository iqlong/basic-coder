/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let right=nums.length-1,left=0;
    let temp;
    while(left<right){
        if(nums[left]%2==0 && nums[right]%2!==0){
            // swap
            temp=nums[right]
            nums[right]=nums[left]
            nums[left]=temp;
            left++
            right--
        }
        if(nums[left]%2!==0){
            left++
        }
        if(nums[right]%2==0){
            right--;
        }
    }
    return nums
};
exchange([11,9,3,7,16,4,2,0])
