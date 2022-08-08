let arr = new Array(50).fill(0);
arr.forEach( (itme, index, arr) => {
    let tempNum;
    // 1 - 100      [0, 1)  
    tempNum = Math.floor( Math.random() * 100 + 1);
    arr[index] = tempNum;
})

function quickSort(arr) {
    const len = arr.length

    if(len <= 1) {
        return arr
    }
    const pivot = arr[0]
    let left = [], right = [];
    for(let i=1; i<len; i++) {
        if(arr[i] <= pivot) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let res = quickSort(arr)
console.log(res);