// check whether the input is valid
let res = [0, 0]
while(line = readline()) {
    // each input causes a movement
    const arr = line.split(';')
    arr.forEach(item => {
        if(ifLegal(item)) {
            move(item)
        }
    })
    console.log(res.join(','))
}

function move(str) {
    const strPart = str[0]
    const NumberPart = Number(str.substr(1))
    switch (strPart) {
        case 'W':
            res[1] += NumberPart;
            break;
        case 'A':
            res[0] -= NumberPart;
            break;
        case 'S':
            res[1] -= NumberPart;
            break;
        case 'D':
            res[0] += NumberPart;
            break;
        default:
            console.log(`illegal input.`)
    }
}

const strGather = ['W', 'A', 'S', 'D']
function ifLegal(str) {
    const strPart = str[0]
    if(!strGather.includes(strPart)) return false
    const NumberPart = str.substr(1)
    if(!Number(NumberPart)) return false
    return true
}
