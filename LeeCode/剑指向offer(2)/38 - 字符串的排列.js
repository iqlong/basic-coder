/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    /**
     * 思路：
     *      1. 先将s从小到大顺序排列，然后就可以用下一个更大排序的思路解题
     *      2. 用 i j 两个指针，i表示从后到前第一个 arr[i]<arr[i+1]，表示可以让排序变大的最后一个位置
     *      3. j 只要满足 arr[j] > arr[i] 就可以，表示可以和i交换并且让数组变大的位置
     *              且，如果 i 存在，在 j 一定存在
     *      4. 自定义的wap方法调用
     *      5. 将 i+1 后面的位置从小到大依次排序
     * */
    let arr = Array.from(s).sort();
    let res = [];
    const len = arr.length;

    function swap(arr, a, b){
        const temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    function laterReverse(arr, start){
        let left=start,right=len-1;
        while (left<right){
            swap(arr, left, right)
            left++
            right--
        }
    }
    function hasNextSort(arr){
        // console.log(arr)
        let i=len-2,j=len-1;
        while(i>=0 && arr[i]>=arr[i+1]){
            i--;
        }
        if(i<0){ return false }
        while(j>=0 && arr[j] <= arr[i]){
            j--;
        }
        swap(arr, i, j);
        laterReverse(arr, i+1);
        return true;
    }
    do{
        res.push(arr.join(''));
        // console.log(res)
    }while (hasNextSort(arr))
    // console.log(res)
    return  res;
};
permutation('432')
