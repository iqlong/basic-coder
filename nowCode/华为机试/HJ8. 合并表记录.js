let map = new Map()
// output with sorted arr
let resArr = []
let lineNum = 1

while(line = readline()) {
    if(lineNum == 1) lineNum = 2
    else if(lineNum == 2) {
        mergeRecord(line.split(' '))
    }
}

function mergeRecord(arr) {
    const key = Number(arr[0])
    const value = Number(arr[1])
    // arr only concern about if include
    if(!resArr.includes(key)) {
        // there was a naming problem
        resArr.push(key)
        map.set(key, value)
    }else {
        // resArr do nothing, but map should consider the merge
        map.set(key, value + map.get(key))
    }
}
const sortedArr = resArr.sort((a, b) => a - b)
sortedArr.forEach(item => {
    console.log(`${item} ${map.get(item)}`)
})

// First priority
    // after pass this code, search and study how to get multiply input in ACM mode
