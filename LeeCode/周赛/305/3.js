/**
 * @param {number[]} nums
 * @return {boolean}
 */
function ifCan(arr) {
    if (arr.length == 2) {
        return arr[1] == arr[0]
    } else if (arr.length === 3) {
        return arr[2] - arr[1] == 1 && arr[1] - arr[0] == 1 ||
            arr[2] === arr[1] && arr[1] === arr[0] && arr[2] === arr[3]
    }
}

function dg(arr) {
    const len = arr.length
    // 递归终止条件
    if (len < 2) {
        return false
    } else if (len == 2 || len == 3) {
        if (ifCan(arr)) {
            return true
        } else {
            return false
        }
    }
    return dg(arr.slice(0, 2)) && dg(arr.slice(2))
        || dg(arr.slice(0, 3)) && dg(arr.slice(3))
}


var validPartition = function (nums) {
    const res = dg(nums)
    return res
};

const res = validPartition([865579,865579,893593])
console.log(res)
