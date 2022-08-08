let num = Number(readline())
const res = nicoChester(num)
console.log(res)

function nicoChester(num) {
    let arr = []
    let sum = 0
    let aim = num ** 3;
    if(num == 1) {
        return 1
    }
    if(num % 2 == 0) {
        const first = num ** 2 - 1
        const second = num ** 2 + 1
        sum = first + second
        arr.push(first, second)
    } else {
        const first = num ** 2
        sum = first
        arr.push(first)
    }
    while (sum < aim) {
        const fir = arr[0] -2
        const sec = arr[arr.length - 1] + 2
        sum += fir + sec
        arr.unshift(fir)
        arr.push(sec)
    }

    return arr.join('+')
}

