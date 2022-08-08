while (line = readline()) {
    if(line.includes('.')) {
        toNum(line)
    }else {
        toIp(Number(line))
    }
}

function toNum(ip) {
    let resNum = ip.split('.').map(item => {
        return Number(item).toString(2).padStart(8, '0')
    }).join('')
    console.log(parseInt(resNum, 2))
}

function toIp(num) {
    let binaryStr = num.toString(2).padStart(32, '0')
    let binaryArr = [binaryStr.substr(0, 8), binaryStr.substr(8, 8),
            binaryStr.substr(16, 8) ,binaryStr.substr(24, 8)]
    let resIp = binaryArr.map(item => parseInt(item, 2)).join('.')
    console.log(resIp)

}
// map 使用的少，return的作用总是没注意
// split 中是'' 还是 '.'    parseInt 的第二参数 2    toString
