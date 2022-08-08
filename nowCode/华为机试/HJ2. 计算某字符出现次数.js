const inputStr = readline()
const inputChar = readline()

let res = computeStrTime(inputStr, inputChar)
console.log(res)

function computeStrTime(str, char) {
    const lowerChar = char.toLowerCase()
    // traverse the str, use map
    let map = new Map()
    const arr = str.split('')
    // toLowerCase()
    arr.forEach(item => {
        const lowerItem = item.toLowerCase()
        if(map.has(lowerItem)) {
            map.set(lowerItem, map.get(lowerItem) + 1)
        }else {
            map.set(lowerItem, 1)
        }
    })
    return map.get(lowerChar) || 0
}

