import {generateRandomArr as dsq, ifEqual} from './logicDetector.mjs'
import {binarySearch} from './binarySearch.mjs'


// for test     ---  搜索
(function main(){
    let testTime=1000;
    for(let n=0;n<testTime;n++){
        let tArr=dsq(100,60);
        // let sArr=[...tArr];
        // 排序且去重，保证两种结果一样
        tArr = [...new Set(tArr)].sort((a,b) => a-b)
        // console.log(tArr)
        // 标准方法
        let r1= tArr.indexOf(4)
        // 测试使用的方法
        let r2 = binarySearch(tArr,4)
        // console.log(r1,r2)
        if(r1!==r2){
            return console.log('搜索算法执行失败!')
        }
    }
    console.log('搜索算法执行成功.')
})()

