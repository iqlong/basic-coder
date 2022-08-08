import {generateRandomArr as dsq, ifEqual} from './logicDetector.mjs'
// 选择排序
/**
 * 需要记住最小值的下标
 * */
function swap(arr,i,j){
    arr[i]=arr[i] ^ arr[j];
    arr[j]=arr[i] ^ arr[j];
    arr[i]=arr[i] ^ arr[j];
}
function selectionSort(arr){
    let len=arr.length;
    let index;
    for(let idx=len-1;idx>0;idx--){
        // 遍历idx之前的数据，找到最小值
        index=idx

        for(let i=0;i<idx;i++){
          if (arr[i]>arr[index]){
              index=i;
          }
        }
        if(idx!==index){
            swap(arr,index,idx)
        }
    }
    return arr;
}
// let arr=[3,6,12,4,3,1,2]
// console.log(selectionSort(arr))
// console.log(arr)

// for test
(function main(){
    let testTime=1000;
    for(let n=0;n<testTime;n++){
        let tArr=dsq(40,100);
        let sArr=[...tArr];
        // 标准方法升序排列
        sArr.sort((a,b) => a-b);
        // 测试使用的排序方法
        selectionSort(tArr)
        // console.log(sArr,tArr)
        if(!ifEqual(tArr,sArr)){
            return console.log('失败!')
        }
    }
    console.log('成功.')
})()
