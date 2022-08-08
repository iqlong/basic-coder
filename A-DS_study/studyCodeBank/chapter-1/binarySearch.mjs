/**
 * 使用递归的二分查找
 * * 查找数组中某个值所在的index
 * */
function recursionSearch(arr,left,right,val){
    // let left=0,right=len;
    // let mid=left+(right-left)/2;
    // 多个判断条件可以简写哦
    if(left>=right){
        if(arr[left] == val){
            return left;
        }else {
            return false
        }
    }
    let mid=left+((right-left)>>1);
    if(arr[mid]>val){
        return recursionSearch(arr,left,mid-1,val)
    }else if(arr[mid]<val){
        return recursionSearch(arr,mid+1,right,val)
    }else {
        return mid
    }


}
function binarySearch(arr,aimVal){
    let len=arr.length;
    if(len<1){
        return -1;
    }
    let resIndex = recursionSearch(arr,0,len-1,aimVal)
    // 要考虑index=0的情况
    if(resIndex!==false){
        return resIndex
    }else {
        return -1
    }
}
let arr=[4,5]
let result =binarySearch(arr,4)
console.log(result)
export {binarySearch}
