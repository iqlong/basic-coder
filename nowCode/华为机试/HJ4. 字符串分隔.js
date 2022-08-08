let inputStr = readline()
strSplit(inputStr)

function strSplit(inputStr) {
    let inputToArr = inputStr.split('')
    const len = inputStr.length;

    if (len % 8 !== 0) {
        const needAdd = 8 - len % 8
        for(let i=1; i<=needAdd; i++) {
            inputToArr.push(0)
        }
    }
    // 0-7   8-15
    for(let x=0; x<=inputToArr.length - 7; x+=8) {
        console.log(inputToArr.slice(x, x+8).join(''))
    }
}

