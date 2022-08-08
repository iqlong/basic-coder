const len = +readline()
let inputArr = []
while (line = readline()) {
    inputArr.push(Number(line))
}
let res = [...new Set(inputArr)].sort( (a, b) => a - b)
res.forEach( item => {
    console.log(item)
})
