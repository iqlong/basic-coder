let lineNum=1, arr, sortType;
let len;
// the value 0f the sortType mean ->  0: asc    1: des
while(line = readline()) {
    if(lineNum == 1) {
        len = Number(line)
        lineNum = 2
    }else if(lineNum == 2) {
        arr = line.split(' ')
        lineNum = 3
    }else {
        sortType = Number(line)
    }
}

const res = arr.sort((pre, cur) => {
    return sortType ? Number(cur) - Number(pre) : Number(pre) - Number(cur)
})

console.log(res.join(' '))
