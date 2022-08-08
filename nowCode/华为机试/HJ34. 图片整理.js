let inputStr = readline()
let inputArr = inputStr.split('')
let res = inputArr.sort((pre, cur) => {
    // sort by the ascii
    return pre.charCodeAt() - cur.charCodeAt()
}).join('')
console.log(res)
