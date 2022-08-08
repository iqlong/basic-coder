let arr = [];
let n;
let onlyOne = true
while(line = readline()) {
    if(onlyOne) {
        n = Number(line)
        onlyOne = false;
    }else {
        arr.push(line)
    }
}
const res = arr.sort()
res.forEach(item => {
    console.log(item)
})
