// traverse from the median
// check if it's prime

while(line = readline()) {
    const inputNum = parseInt(line)
    getPrime(inputNum)
}

function getPrime(num) {
    const middle = num / 2;
    let left = middle
    let right = middle
    while (left >1 && right <num-1) {
        if(ifPrime(left) && ifPrime(right)) {
            console.log(left)
            console.log(right)
        }
        left--
        right++
    }
}

function ifPrime(num) {
    for(let i=2; i<num; i++) {
        if(num % i == 0) return false
    }
    return true

}
