let line = readline()
let inputArr = line.split('')
let resArr = []
let set = new Set()

for(let i=inputArr.length; i>=0; i--) {
    const item = inputArr[i]
    if(!set.has(item)) {
        resArr.push(item)
        set.add(item)
    }
}

const res = Number(resArr.join(''))
console.log(res)
