/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 function recur(arr, left, right){
    if(left>=right) return true
    let i=left;
    // 要么找到i是右子树的开头，要么一直到达根节点
    while(arr[i]<arr[right]) i++;

    // 判断右子树是否符合规定
    for(let rIndex = i; rIndex<right; rIndex++){
        if(arr[rIndex] < arr[right]) return false
    }
    return recur(arr, left, i-1) && recur(arr, i, right-1)
}
var verifyPostorder = function(postorder) {
    return recur(postorder, 0, postorder.length-1)
};

const res = verifyPostorder([4, 8, 6, 12, 16, 14, 10])
console.log(res)
