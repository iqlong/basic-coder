/**
 * 冒泡排序的特点：
 *      1. 双for中 i和j无关，所以比较的是相邻的俩个元素
 *      2. 一次排序中(找到一个正确值)要swap多次
 * */




/**
 * 选择排序的特点：
 *      1. 双for中i和j有关，所以比较的是一个和其他的元素
 *      2. 一次排序中(...)只要swap一次
 * */


/***
 * 插入排序的特点：
 *      1. 双for中 i和j 有关
 *      2. 一次排序中不会swap，变成了insert了    [应该要考虑 数组和链表中插入查询的效率问题了]
 * */
function insertSort(arr) {
    // 插入排序的i不像选择排序，需要全部的arr内容
    let insertIndex=-1;
    let insertItem;
    for(let i=1;i<arr.length;i++) {
        let ifLoop = true;
        // 由于从小到大，需要从后往前遍历
        if(arr[i]>arr[i-1]) {
            ifLoop=false
        }else {
            for(let j=i-1;j>=0;j--) {
                if(arr[i]>arr[j]) {
                    // 记录i要插入的位置(insertIndex)
                    insertIndex =j;
                    insertItem = arr[j];
                    break;
                }
            }
        }

            // j+1到i-1向后移动，i放在j+1的位置
        // INSERT
        if(ifLoop) {
            let insertItem = array[i];
            for(let n=i-1;n>insertIndex;n--) {
                arr[n+1] = arr[n];
            }
            arr[insertIndex+1] = insertItem;
            insertIndex = -1;
        }

    }
    return arr;
}

// let array = [-1,10,8,3,4,2];
// console.log(insertSort(array));




/**
 * 前三个排序方式的总结：
 *      1. 冒泡自成一排
 *      2. 选择和插入的区别  是swap向insert的过度：都是用到了--- 必有则减的思想
 * */

function insertionSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}




// 插入排序
function insertSort(array) {
    let preIndex,current;
    for(let i=1;i<array.length;i++) {
        current = array[i];
        preIndex = i-1;
        while(preIndex>=0 && array[preIndex]>current) {
            array[preIndex+1] = array[preIndex];
            preIndex--;
        }
        array[preIndex+1] = current;
    }
    return array;
}

/**
 * 软考书上的 简单插入排序
 * */
function insertSort(array) {
    let i,j,temp;
    let len = array.length;
    // i是从1开始，让index=0的位置自成一个数组
    for(i=1;i<len;i++) {
        if(array[i]<array[i-1]) {
            temp = array[i];
            for(j=i-1;j>=0 && array[j]>temp;j--) {
                array[j+1] = array[j];
            }
            array[j+1] = temp;
        }

    }
    return array;

}

console.log(insertSort([1,0,38,19,34,84,12]))



















