import {generateRandomArr as dsq, ifEqual} from './logicDetector.mjs'


function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function bubbleSort(arr){
    let len=arr.length;
    for(let n=len-1;n>0;n--){
        for(let i=0;i<n;i++){
            if(arr[i]>arr[i+1]){
                swap(arr,i,i+1);
            }
        }
    }
    return arr;
}
// test-self
// let arr=[5,3,2,4,1]
// bubbleSort(arr)
// console.log(arr)

// for test
(function main(){
    let testTime=100000;
    for(let n=0;n<testTime;n++){
        let tArr=dsq(50,100);
        let sArr=[...tArr];
        // 标准方法升序排列
        sArr.sort((a,b) => a-b);
        // 测试使用的排序方法
        bubbleSort(tArr)
        // console.log(sArr,tArr)
        if(!ifEqual(tArr,sArr)){
            return console.log('失败!')
        }
    }
    console.log('成功.')
})()

