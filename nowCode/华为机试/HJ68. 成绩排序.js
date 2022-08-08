let readSort = 1;
let personNum, sortType
// let map = new Map()
let arr
while(line = readline()) {
    if(readSort === 1) {
        personNum = Number(line)
        arr = new Array(personNum)
        readSort = 2
    }else if(readSort === 2) {
        sortType = line == 0 ? 'asc' : 'des'
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
}

let res
if(sortType == 'asc') {
    res = arr.sort(({age: preAge}, {age: curAge}) => preAge - curAge)
}else {
    res = arr.sort(({age: preAge}, {age: curAge}) => preAge - curAge)
}

res.forEach(item => {
    console.log(`${item.name} ${item.age}`)
})
