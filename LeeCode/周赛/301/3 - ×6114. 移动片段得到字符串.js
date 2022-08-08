function moveToEnd(arr, lIndex = 0, rIndex = arr.length) {
    let left = true
    while(lIndex < rIndex) {
        let index;
        if(left) {
            index = lIndex
        }else {
            index = rIndex
        }

        if(arr[index] == 'L' && arr[index - 1] == '_') {
            let temp = index;
            do{
                swap(arr, temp, temp - 1)
                temp -= 1;
            }while(arr[temp - 1] == '_')
        }else if(arr[index] == 'R' && arr[index + 1] == '_') {
            let temp = index;
            do{
                swap(arr, temp, temp + 1)
                temp += 1;
            }while(arr[temp + 1] == '_')
        }

        if(left) {
            lIndex ++;
            left = false
        }else {
            rIndex --;
            left = true
        }
    }
    return arr.join('')
}

function swap(arr, a, b) {
    const item = arr[a]
    arr[a] = arr[b]
    arr[b] = item
}

// const testArr = "R_L_".split('')
// const len = testArr.length
//
// console.log(testArr)
// let res = moveToEnd(testArr, 0, len)
// console.log(res)

var canChange = function(start, target) {
    const changedStart = start.replace(/_/g, '')
    const changedTarget = target.replace(/_/g, '')
    let res = changedStart == changedTarget
    if(!res) {
        return res
    }else {
        const movedStart = moveToEnd(start.split(''))
        const movedTarget = moveToEnd(target.split(''))
        res = movedStart == movedTarget
    }
    return res
};
