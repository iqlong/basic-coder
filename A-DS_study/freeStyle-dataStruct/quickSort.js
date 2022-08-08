function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[0]

    let left = [], right = []
    for(let i=1; i<arr.length; i++) {
        const val = arr[i]
        if(val <= pivot) {
            left.push(val)
        }else {
            right.push(val)
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
// quickSort([7,3,5])

let arr = []

// 生成随机数并放入数组中  范围是 2- 200
// Math.floor(Math.random()*199 + 2)
for (let i=0; i<10; i++) {
    arr[i] = Math.floor(Math.random()*199 + 2)
}
console.log(arr)
let res = quickSort(arr)
console.log(`the callback arr of quickSort: 
       ${res}`)
console.log(`the original arr:     
       ${arr}`)










