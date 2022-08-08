let fstNum, secNum;
while(line = readline()) {
    const arr = line.split(' ')
    fstNum = parseInt(arr[0])
    secNum = parseInt(arr[1])
    const res = LCM(fstNum, secNum)
    console.log(res)
}

// 是否包含
    // 是否有最小共因子  从n/2开始判断
    // 否则返回 first * second
function LCM(a, b) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    // 最大公因子
    let gcd
    if(max % min == 0) return max
    for(let x=Math.floor(min/2); x>=2; x--) {
        if(min % x == max % x == 0) {
            gcd = x
        }
    }
    if(gcd) {
        return min * max / gcd
    }else {
        return min * max
    }


}
