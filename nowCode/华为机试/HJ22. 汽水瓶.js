// two butt bottle -> 1
// while(line = readline()) {
//     const emptyBottle = Number(line)
//     if(emptyBottle != 0) {
//         const  res = drinkBottle(emptyBottle)
//         console.log(res)
//     }
// }

function drinkBottle(emptyBottle) {
    let resSum = 0
    while (emptyBottle >= 3) {
        let drunkBottle = Math.floor(emptyBottle / 3)
        emptyBottle -= drunkBottle * 3
        resSum += drunkBottle
        emptyBottle += drunkBottle
    }
    if(emptyBottle == 2) {
        resSum += 1
    }
    return resSum
}

let res = drinkBottle(81)
console.log(res)
