/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 去重可以在放入的时候就filter
    // 不要全部放入到一个target vessel后再  在容器中filter去重
    // 放入前的filter可以在数组中移动指针

var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let len = nums.length;
    let result={};
    let sum;
    let temp;
    for(let a=0; a<len-3; a++){
        // 确定第一个元素后的减枝操作
        if(nums[a]+nums[a+1]+nums[a+2]+nums[a+3] > target){
            continue;
        }else if(nums[a]+nums[len-1]+nums[len-2]+nums[len-3] < target){
            continue;
        }
        for(let b=a+1; b<len-2; b++){
            // 二向剪枝
            if(nums[a]+nums[b]+nums[b+1]+nums[b+2] > target){
                continue;
            }else if(nums[a]+nums[len-1]+nums[len-2]+nums[b] < target){
                continue;
            }
            let c=b+1,d=len-1;
            while(c!==d){
                sum = nums[a]+nums[b]+nums[c]+nums[d];
                // 要是flag等于0，直接返回
                if(sum === target){
                    // !!! 上个例子应为是去重后的，但这个不可以break
                    // result.push([nums[a],nums[b],nums[c],nums[d]]);
                    temp = [nums[a],nums[b],nums[c],nums[d]];
                    if( !(temp.toString() in result) ){
                        result[temp.toString()] = temp;
                    }

                }
                if(sum < target){
                    c++;
                }else{
                    d--;
                }
            }
        }
    }
    return Object.values(result);
};
