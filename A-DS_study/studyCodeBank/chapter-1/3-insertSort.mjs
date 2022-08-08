import {generateRandomArr as dsq, ifEqual} from './logicDetector.mjs'


function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function insertSort(arr){
    let len=arr.length;
    for(let i=1;i<len;i++){
        let preIndex=i-1,cur=arr[i];
        while (preIndex>=0 && cur<arr[preIndex]){
            arr[preIndex+1] = arr[preIndex]
            preIndex--;
        }
        arr[preIndex+1] = cur;
    }
    return arr;
}
// test-self
// let arr=[5,3,2,4,1]
// insertSort(arr)
// console.log(arr)

// for test
(function main(){
    let testTime=1000;
    for(let n=0;n<testTime;n++){
        let tArr=dsq(50,100);
        let sArr=[...tArr];
        // 标准方法升序排列
        sArr.sort((a,b) => a-b);
        // 测试使用的排序方法
        insertSort(tArr)
        console.log(sArr,tArr)
        if(!ifEqual(tArr,sArr)){
            return console.log('失败!')
        }
    }
    console.log('成功.')
})()

