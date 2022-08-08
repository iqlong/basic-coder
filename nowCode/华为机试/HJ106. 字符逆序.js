while (line = readline()) {
    reverseFunction(line)
}

function reverseFunction(str) {
    let strToArr = str.split('')
    const res = strToArr.reverse().join('')
    console.log(res)
}
