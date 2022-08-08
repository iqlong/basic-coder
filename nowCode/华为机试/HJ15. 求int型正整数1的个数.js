let inputNum = Number(readline())
let sum = 0

// a number have 32 byte
for(let i=1; i<=32; i++) {
    if(inputNum & 1 == 1) sum ++;
    inputNum >>>= 1
}
console.log(sum)
