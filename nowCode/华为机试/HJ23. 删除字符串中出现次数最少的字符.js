function test(arr) {
    // 只使用一个 number 解决不了，我要使用obj
    let minTime = arr.length
    let map = new Map()
    arr.forEach(item => {
        if(map.has(item)) {
            const newVal = map.get(item) + 1
            // 当 get到的值是1，

            map.set(item, newVal)
        }else {
            map.set(item, 1)
        }
    })

    let aimArr = []
    map.forEach((item) => {
        if(item < minTime) minTime = item
    })
    map.forEach((item, key) => {
        if(item == minTime) {
            aimArr.push(key)
        }
    })

    for(let i=0; i<arr.length; i++) {
        if(aimArr.indexOf(arr[i]) !== -1) {
            arr.splice(i, 1)
            i--;
        }
    }
    console.log(arr.join(''))

}

test('aabcddd'.split(''))

