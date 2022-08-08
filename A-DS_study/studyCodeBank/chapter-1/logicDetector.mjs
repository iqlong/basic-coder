function generateRandomArr(maxNum, maxVal){
    let arr=new Array(Math.ceil(Math.random()*maxNum));
    for(let i=0;i<arr.length;i++){
        arr[i] = Math.ceil(Math.random()*maxVal)
    }
    return arr;
}
function ifEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }else {
        return  arr1.every((item,index) => {
            return arr1[index]===arr2[index]
        })
    }
}
export {generateRandomArr,ifEqual}
// import引入此文件时 会自动执行代码
// console.log(generateRandomArr(10,20))
