/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function binarySearch(arr, L, R, num) {
    while(L < R) {
        const centerIndex = L + ( (R - L) >>> 1 )
        const curNum = arr[centerIndex]
        if(curNum == num) {
            return centerIndex
        }else if(num < curNum) {
            R = centerIndex - 1
        }else {
            L = centerIndex + 1
        }
    }
    return L
}

var maxSlidingWindow = function(nums, k) {
    if(k <= 0) return []
    const numsLen = nums.length
    let queue = nums.slice(0, k).sort((a, b) => a-b)
    let res = [queue[k - 1]]
    for(let i=k; i<numsLen; i++) {
        const cur = nums[i]
        const delNum = nums[i - k]
        queue.splice(queue.indexOf(delNum), 1)
        // 将cur元素插入的已排序的数组中
        let index = binarySearch(queue, 0, queue.length - 1, cur)
        if(queue[index] < cur) {

            Math.max(index += 1, k - 1)
        }
        queue.splice(index, 0, cur)

        res.push(queue[k - 1])
    }
    return res
};

