// let line
let arr
while (readline()) {
    arr = readline().split('')
}
let set = new Set()
for(const val of arr) {
    !set.has(val) && set.add(val)
}
console.log(set.size)
