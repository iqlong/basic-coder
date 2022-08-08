while(line = readline()) {
    const res = lastWord(line)
    console.log(res)
}

function lastWord(str) {
    const len = str.length
    let num = 0;
    for(let i=len-1; i>=0; i--) {
        const item = str[i]
        if(item !== ' ') {
            num ++
        }else {
            break
        }
    }
    return num
}
