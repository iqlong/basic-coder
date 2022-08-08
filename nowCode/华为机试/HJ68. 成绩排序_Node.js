let readSort = 1;
let personNum, sortType
// let map = new Map()
let arr
let line = require('readline')
const rl = line.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', (line) => {
    if(readSort === 1) {
        personNum = Number(line)
        arr = new Array(personNum)
        readSort = 2
    }else if(readSort === 2) {
        // ==可以隐式类型转换
        sortType = line == 0 ? 'des' : 'asc'
        readSort = 3
    }else {
        const tempArr = line.split(' ')
        // map.set(tempArr[0], Number(tempArr[1]))
        const person = {
            name: tempArr[0],
            age:  Number(tempArr[1])
        }
        arr.push(person)
    }
}).on('close', () => {
    sortGrad()
})
// while(line = readline()) {
//
// }

function sortGrad() {
    let res
    if(sortType == 'asc') {
        res = arr.sort(({age: preAge}, {age: curAge}) => preAge - curAge)
    }else {
        res = arr.sort(({age: preAge}, {age: curAge}) => curAge - preAge)
    }

    res.forEach(item => {
        console.log(`${item.name} ${item.age}`)
    })
}

